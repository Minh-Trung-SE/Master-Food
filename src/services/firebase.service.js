import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { API_URL } from "../constants/api.constant";
import { saveAuth } from "../redux/auth/authSlice";
import { store } from "../redux/store";


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

export const firebaseLogin = async (authRequest) => {
    const response = await axios.post(`${API_URL}/auth/firebase`, authRequest, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    const { data } = response
    const { user } = data
    const token = {
        accessToken: data?.accessToken,
        createdAt: data?.createdAt,
        expiredAt: data?.expiredAt
    }
    store.dispatch(saveAuth({ user, token }))
}

export const subscribeOnAuthStateChanged = () => {
    const auth = getAuth()

    return onAuthStateChanged(auth, async (user) => {
        try {

            if (user) {
                const userProvider = user.providerData[0]
                const authRequest = {
                    firebaseUid: user.uid,
                    email: user.email,
                    emailVerify: user.emailVerified,
                    providerId: userProvider.providerId,
                    providerUid: userProvider.uid,
                    phone: userProvider.phoneNumber,
                    displayName: userProvider.displayName,
                    avatarLink: userProvider.photoURL,
                    idToken: await user.getIdToken()
                }
                firebaseLogin(authRequest)
            }
        } catch (error) {
            console.log(error);
        }
    });
}


export const emailSiginWithPopup = async () => {

    const auth = await getAuth()
    const socailProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, socailProvider);
}

