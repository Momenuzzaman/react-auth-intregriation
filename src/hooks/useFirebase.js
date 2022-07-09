import { useEffect, useState } from "react"
import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

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
        singInWithGoogle
    }
}
export default useFirebase