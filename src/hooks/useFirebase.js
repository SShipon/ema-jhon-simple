import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firbase.init";

initializeAuthentication();

const useFirebase =() =>{
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsignGoogle =() =>{
      return signInWithPopup(auth, googleProvider)
        
    }
    const logOut =()=>{
        signOut(auth)
        .then(() =>{
            setUser({})

        })
    }
    //observe whether user auth state changed or not 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
          setUser(user)
             
            } 
          });

    },[])

    return{
        user,
        signInUsignGoogle,
        logOut

        
    }

}
export default useFirebase;