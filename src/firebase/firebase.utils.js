import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDkcUBadtR36GL2yMT8m0t4ajKpUXgbEmI",
  authDomain: "crwn-db-1d755.firebaseapp.com",
  databaseURL: "https://crwn-db-1d755.firebaseio.com",
  projectId: "crwn-db-1d755",
  storageBucket: "crwn-db-1d755.appspot.com",
  messagingSenderId: "791902618",
  appId: "1:791902618:web:c9e4c54bc07846ccbca223",
  measurementId: "G-FTRLM5JLRR"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

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
  // console.log(firestore.doc('users/123dfsdfsd'))

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;