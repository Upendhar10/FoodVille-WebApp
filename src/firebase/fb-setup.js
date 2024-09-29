import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcfxmobMO_FBQbjKk65nRuARNCr0e7vYA",
  authDomain: "foodville-app.firebaseapp.com",
  projectId: "foodville-app",
  storageBucket: "foodville-app.appspot.com",
  messagingSenderId: "1082859335778",
  appId: "1:1082859335778:web:0c88a33c69255c2d76613b",
};

const app = initializeApp(firebaseConfig);

export default app;
