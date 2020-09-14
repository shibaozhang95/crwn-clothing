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

export const createUserProfileDocument = async (userAuth: any, additionalData: any) => {
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

export const addCollectionAndDocuments = async (colletionKey: any, objectsToAdd: any) => {
  const collectionRef = firestore.collection(colletionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach((obj: any) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections: any) => {
  const transforedCollectoin = collections.docs.map((doc: any) => {
    const { title, items } = doc.data();

    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id
    }
  });

  // console.log(transforedCollectoin);
  return transforedCollectoin.reduce((accumulator: any, collection: any) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {})
}

export const getCurrentUser = (): Promise<firebase.User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;