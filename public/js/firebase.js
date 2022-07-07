const firebaseConfig = {
  apiKey: "AIzaSyAmzTndPKe1N6h2i-kM6qTTCvW1wjDtlS0",
  authDomain: "blogwebsite-ef229.firebaseapp.com",
  projectId: "blogwebsite-ef229",
  storageBucket: "blogwebsite-ef229.appspot.com",
  messagingSenderId: "522301696877",
  appId: "1:522301696877:web:08dea4dcda4a809ec7c864"
};


firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
  auth.signOut();
  location.reload();
}