import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { initFirebase, subscribeOnAuthStateChanged } from "./services/firebase.service";


function App() {
    useEffect(() => {
        initFirebase();
        const usubscribe = subscribeOnAuthStateChanged();
        return usubscribe;
    }, [])

    
    return (
        <Routes>
            <Route path="auth/*" element={<Auth/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}

export default App;
