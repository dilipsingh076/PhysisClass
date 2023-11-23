// pages/auth/signout.js
import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <div>
      <h1>Sign Out</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
