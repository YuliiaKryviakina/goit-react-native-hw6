import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import "firebase/compat/auth";
// import { getAuth } from "firebase/auth";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRl5wi2Vmc2mB1wotMYKeEiQcrkHVA0rk",
  authDomain: "goit-react-native-1-bd2be.firebaseapp.com",
  // databaseURL: "https://goit-react-native-1-bd2be-default-rtdb.firebaseio.com",
  projectId: "goit-react-native-1-bd2be",
  storageBucket: "goit-react-native-1-bd2be.appspot.com",
  messagingSenderId: "181999502626",
  appId: "1:181999502626:web:ddd07e0979302857a1117b",
  // measurementId: "G-E30LMVSKRR",
};
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const myStorage = getStorage(app);
export const db = getFirestore(app);
