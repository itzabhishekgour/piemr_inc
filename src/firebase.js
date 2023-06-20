import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA6CiYYd66o1AwJFIdAI3wqabCnWQtP3DQ",
	authDomain: "prestige-inc.firebaseapp.com",
	projectId: "prestige-inc",
	storageBucket: "prestige-inc.appspot.com",
	messagingSenderId: "618680854156",
	appId: "1:618680854156:web:6864d3a3ab23616c6a3da9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth,app};
