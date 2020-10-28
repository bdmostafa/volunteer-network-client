import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


// Initialize Firebase
export const initLoginFramework = () => {
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    // googleProvider.addScope("email");
        return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = { name: displayName, email }
            // storeAuthToken();
            // console.log(res.user)
            return signedInUser;
        }).catch(err => {
            console.log(err.message)
        });
    }

    // const storeAuthToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
    //         sessionStorage.setItem('token', idToken)
    //       }).catch((error) => {
    //         // Handle error
    //       });
    // }