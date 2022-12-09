import React from 'react'

export default function SignIn(props) {
  return (
    <div>
      <button onClick={props.signGoogle}>Sign in with Google</button>
      <button onClick={props.signGit}>Sign in with Github</button>
    </div>
  )
}
