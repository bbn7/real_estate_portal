import Head from 'next/head';
import Navigation from '../components/Navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setMessage(data.message || 'No message received'));
  }, []);

  return (
    <div>
      <Head>
        <title>Real Estate Portal</title>
      </Head>
      <Navigation />
      <h1>Welcome to the Real Estate Portal</h1>
      <p>{message}</p>
    </div>
  );
}
