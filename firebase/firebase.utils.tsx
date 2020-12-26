import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

//config for firebase 

const Config = {
	apiKey: "AIzaSyDHG-6GpUfLAlOW49Exew3QUTO8EOhs8Rs",
	authDomain: "personalrecord-11737.firebaseapp.com",
	projectId: "personalrecord-11737",
	storageBucket: "personalrecord-11737.appspot.com",
	messagingSenderId: "624588506614",
	appId: "1:624588506614:web:6b3a4899817959c9d633d7",
	measurementId: "G-EGK6C8E0EW"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    //if the users has not login yet return from doing anything
    if (!userAuth) return;   
    //gets the ref for that specific user id
	const userRef = firestore.doc(`/users/${userAuth.uid}`);
    //gets the snapshot to determine whether or not there is data in that ref
	const snapShot = await userRef.get();
    //If there is nothing, if exists is false create/save the user info
	if (!snapShot.exists) {
		const { displayName, email, photoURL,phoneNumber } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
                createdAt,
                photoURL,
                phoneNumber,
				...additionalData
			});
		} catch (error) {
			console.log('Error creating user', error);
		}
    }
    
    return userRef
};


//init firebase with the config 
if (!firebase.apps.length) {
	firebase.initializeApp(Config);
 }else {
	firebase.app(); // if already initialized, use that one
 }


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

//google auth
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
