import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCydSrLpuPyrdl6AtOp2X8b6pjpuPD841U",
  authDomain: "mario-plan-react-firebas-b09b6.firebaseapp.com",
  projectId: "mario-plan-react-firebas-b09b6",
  storageBucket: "mario-plan-react-firebas-b09b6.appspot.com",
  messagingSenderId: "634754507451",
  appId: "1:634754507451:web:93a73ce8841229420dff9e",
  measurementId: "G-BGDHKN0F1Q",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
