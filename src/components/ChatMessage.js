import React from 'react'
import firebase from 'firebase/compat/app';


export default function ChatMessage(props) {
  const auth = firebase.auth();
    const {text, uid, photoURL} = props.message;
    console.log(props.message.text);
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL}/>
    <p>{text}</p>
    </div>  
  )
}
