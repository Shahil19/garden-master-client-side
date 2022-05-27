// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIE3YT7CYvfF5U3ASE95HFPCcEEqixUVQ",
    authDomain: "garden-master-8a578.firebaseapp.com",
    projectId: "garden-master-8a578",
    storageBucket: "garden-master-8a578.appspot.com",
    messagingSenderId: "216394253152",
    appId: "1:216394253152:web:294bf366ed02a12bdc1405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
