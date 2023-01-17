import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.inti";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const singInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    const singInUsingGithub = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            setUser(result.user);
        })
    }



    const logout = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect( () =>{
        onAuthStateChanged(auth, user=>{
            if(user){
                // console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [auth])

    return {
        user,
        error,
        singInUsingGoogle,
        logout,
        singInUsingGithub
    }
}

export default useFirebase;