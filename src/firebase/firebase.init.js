import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebaseAuthentication = () => {
    const app = initializeApp(firebaseConfig);
}

export default firebaseAuthentication