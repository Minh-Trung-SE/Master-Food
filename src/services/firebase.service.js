import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { API_URL } from "../constants/api.constant";

export const initFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAxM1QAC6SrvOEfJhUQgxUzQ7GM46wrwtM",
        authDomain: "master-food-2022.firebaseapp.com",
        projectId: "master-food-2022",
        storageBucket: "master-food-2022.appspot.com",
        messagingSenderId: "332664774360",
        appId: "1:332664774360:web:0152267b63569576c201ad"
    };
    initializeApp(firebaseConfig)
}

export const subscribeOnAuthStateChanged  = () => {
    const auth = getAuth()
    console.log(auth);

    return onAuthStateChanged(auth, async (user) => {
        if(user){
            const authRequest =  {
                uid: user.uid,
                email: user.email
            }
            console.log(authRequest);
            const  response  = await axios.post(`${API_URL}/auth/firebase`, authRequest, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            console.log(response);
        }
    });
}


export const emailSiginWithPopup = async () => {

    const auth = await getAuth()
    const socailProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, socailProvider);
    const {user} = result;
}

