// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQouvSeXN4YetXrvBl0YvFnj-y-Lw0hlE",
  authDomain: "nuxt3solex.firebaseapp.com",
  databaseURL:
    "https://nuxt3solex-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nuxt3solex",
  storageBucket: "nuxt3solex.appspot.com",
  messagingSenderId: "1000751150240",
  appId: "1:1000751150240:web:f18a806139560aa638c5c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// export default firestore;

export default defineNuxtPlugin(() => {
  return {
    provide: {
      firestore,
      teamMembersCollectionRef: collection(firestore, "teamMembers"),
    },
  };
});
