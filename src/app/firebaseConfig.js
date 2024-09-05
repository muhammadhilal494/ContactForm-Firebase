
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyADAN4pjE40SyTXSD-DYf-cSYCTih_YKDM",
  authDomain: "contactform-5617a.firebaseapp.com",
  projectId: "contactform-5617a",
  storageBucket: "contactform-5617a.appspot.com",
  messagingSenderId: "14421562100",
  appId: "1:14421562100:web:b698e3fd4310aa3ead04a1",
  measurementId: "G-9Q8K2SD7B5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
