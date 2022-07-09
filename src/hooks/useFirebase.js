import { useEffect, useState } from "react"
import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";

firebaseAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    return {
        user,
        error,
        logOut,
        singInWithGoogle
    }
}
export default useFirebase