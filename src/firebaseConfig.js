import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDFMduQXj3CIarQrT5BRQejxun28inCY0Q",
    authDomain: "dashboard-auth-6c6fa.firebaseapp.com",
    projectId: "dashboard-auth-6c6fa",
    storageBucket: "dashboard-auth-6c6fa.appspot.com",
    messagingSenderId: "793748140020",
    appId: "1:793748140020:web:05b37c0bdaf5da916853a1"
};

const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app);
export default firebaseConfig;