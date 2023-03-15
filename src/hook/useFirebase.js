import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged,signOut } from "firebase/auth";
import firebaseInitialize from '../components/Firebase/firebase.init';
import { useState, useEffect } from 'react';



firebaseInitialize();




const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google
    const signInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const user = result.user;
                setAuthError('');

    })
        .catch((error) => {
        setAuthError(error.message);
    })
       .finally(() => setIsLoading(false))      
    }


//Observer user state
    useEffect(() => {
        const unsubcribed  = onAuthStateChanged(auth, user =>{
            if(user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubcribed;
    }, [auth])

//logout
const logOut = () =>{
    setIsLoading(true);
    signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false))
}   





    return {
       signInWithGoogle,
       user,
       isLoading,
       authError,
       logOut


    }
};

export default useFirebase;


