import React, { useRef, useState } from 'react'
import ChatMessage from './ChatMessage';
import firebase from 'firebase/compat/app';


export default function ChatRoom(props) {
    const messageRef = props.fireStore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);

    const [messages] = props.useColData(query, {idField: 'id'});
    const [formValue, setValue] = useState('')
    const auth = firebase.auth();

  const dummy = useRef()

    const sendMessage = async (e) => {
      e.preventDefault()
      const {uid, photoURL} = auth.currentUser;
      await messageRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
      setValue('')
      dummy.current.scrollIntoView({ behavior: 'smooth'});
    }
  return (
    <> 
    <div>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
        </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setValue(e.target.value)}/>
      <button type='submit'>Send</button> 
    </form>
    </div>
    </>
  )
}
