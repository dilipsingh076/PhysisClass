// pages/secure-page.js
import { getSession } from 'next-auth/react';

export default function SecurePage({ user }) {
  return (
    <div>
      <h1>Secure Page</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}
