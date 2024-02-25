import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, updateProfile } from 'firebase/auth'
import 'dotenv/config'

const {
    APIKEY,
    AUTHDOMAIN,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERID,
    APPID,
    MEASUREMENTID,
} = process.env

const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID,
    measurementId: MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {
    db,
    auth,
    collection,
    getDocs,
    updateProfile
}

