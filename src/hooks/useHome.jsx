import { useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const useHome = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyB8NupBhoXT8uiqBdCrqrpKO5vaAJLayKU",
      authDomain: "clone-339018.firebaseapp.com",
      projectId: "youtube-clone-339018",
      storageBucket: "youtube-clone-339018.appspot.com",
      messagingSenderId: "1083580781763",
      appId: "1:1083580781763:web:f5b9360201314055d83e76"
    };
    
    useEffect(() => {
        initializeApp(firebaseConfig)
        authentication()
    }, []);

    const authentication = async () => {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            console.log("user", user)
          }).catch((error) => {
            if (error.code === 'auth/popup-closed-by-user') {
                console.log("No se pudo autenticar al usuario")
            }
          });
    }

    return {

    }
};
