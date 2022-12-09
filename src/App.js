import './App.css'
import firebase from 'firebase/compat/app';
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { GithubAuthProvider } from "firebase/auth";

import{useAuthState} from 'react-firebase-hooks/auth';
import{useCollectionData} from 'react-firebase-hooks/firestore';
import { Firestore } from 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBBvwrRIVHuKU6x2_c4AQeSlrwzmowwSAw",
  authDomain: "chatapp-79cea.firebaseapp.com",
  projectId: "chatapp-79cea",
  storageBucket: "chatapp-79cea.appspot.com",
  messagingSenderId: "19953142518",
  appId: "1:19953142518:web:f2d7dda2fd7bd2af8b3ad7",
  measurementId: "G-8ZTSVYK9KM"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  
  const [user] = useAuthState(auth) //Google Sign In
  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  const signInWithGithub = () =>{
    const provider = new GithubAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    
    <div className="App">
      <header className="App-header">
      <SignOut />
      </header>
      <section>
        {user ? <ChatRoom fireStore={firestore} useColData={useCollectionData} auth={auth}/> : <SignIn signGoogle={signInWithGoogle} signGit={signInWithGithub}/>}
      </section>
     
    </div>
  );
}
//LOG OUT
function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}
export default App;
