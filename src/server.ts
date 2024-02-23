import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import https from 'https'
import http from 'http'
import path from 'path'
import fs from 'fs'

import siteRoutes from './routes/sites'
import { requestIntercepter } from './utils/requestIntercepter'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))

app.all('*', requestIntercepter)

//app.use('/admin', adminRoutes)
app.use('/api/v1', siteRoutes)

const runServer = (port: number, server: http.Server | https.Server) =>{
    server.listen(port, () => {
        console.log(`Running at PORT ${port}`)
    })
}
const regularServer = http.createServer(app)

if(process.env.NODE_ENV === 'production') {
   const options = {
       key: fs.readFileSync(process.env.SLL_KEY as string),
       cert: fs.readFileSync(process.env.SSL_CERT as string)
   }
   const secServer = https.createServer(options, app)

   runServer(80, regularServer)
   runServer(443, secServer)
}else{
    const serverPort: number = process.env.PORT ? parseInt(process.env.PORT) : 9000
    runServer(serverPort, regularServer)
}

