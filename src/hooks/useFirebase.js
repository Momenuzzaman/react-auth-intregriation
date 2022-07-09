import { useState } from "react"
import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }
    return {
        user,
        error,
        singInWithGoogle
    }
}
export default useFirebase