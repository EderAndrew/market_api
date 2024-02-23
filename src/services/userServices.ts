import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config"

const UserServices = {
    login: async (email: string, password: string) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            return user.user
        } catch (err) {
            console.log(err)
        }
    },
    createUser: async (email: string, password: string) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            return user.user
        } catch (err) {
            console.log(err)
        }
    }
}

export default UserServices