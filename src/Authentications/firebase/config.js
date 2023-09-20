import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD98WgEsQ3LhW5sCSFex5DmdHP3rg0m-X0",
  authDomain: "webghoul-form.firebaseapp.com",
  projectId: "webghoul-form",
  storageBucket: "webghoul-form.appspot.com",
  messagingSenderId: "370290251645",
  appId: "1:370290251645:web:aae200c3dbe6c880a49e14",
  measurementId: "G-3KHFCK2H0W",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const yahooProvider = new OAuthProvider("yahoo.com");
export { firebaseAuth, googleProvider,yahooProvider, githubProvider, facebookProvider };
