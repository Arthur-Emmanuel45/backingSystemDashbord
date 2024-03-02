import React, {useState, useEffect, useContext} from "react";
import { auth } from "./firebaseConfig";

const createContext = React.createContext();

const AuthContent = ({children}) => {

    const[user, setUser] = useState({});
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser(currentUser);
                setLoading(false)
            }else {
                setUser(null);
            }
        }, []);
        return() => {
            listen();
        }
    })

    const value = {
        user
    }

    return (
        <createContext.Provider value={value}>
            {!loading && children}
        </createContext.Provider>
    )
}

export default AuthContent