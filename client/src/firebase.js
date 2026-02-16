import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtUHYGZ_wTRe3A3T2FTE6VWqEd_vk02ng",
  authDomain: "shiskshasource.firebaseapp.com",
  projectId: "shiskshasource",
  appId: "1:563072662379:web:ad667b361e4fc499beaa2e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
