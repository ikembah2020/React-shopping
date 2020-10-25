import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAm_07R-cAPTrl5_dMQDM1dc3B1_ig6kYg",
    authDomain: "merry-shop-db.firebaseapp.com",
    databaseURL: "https://merry-shop-db.firebaseio.com",
    projectId: "merry-shop-db",
    storageBucket: "merry-shop-db.appspot.com",
    messagingSenderId: "1071169147475",
    appId: "1:1071169147475:web:58327e6c5f633572a56ca6",
    measurementId: "G-371T6YDXCS"
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt, 
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }; 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

