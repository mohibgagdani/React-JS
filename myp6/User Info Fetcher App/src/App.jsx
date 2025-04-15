import React, { useState, useEffect } from 'react';

function App() {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState('');

  let fetchUser = async () => {
    setLoading(true);
    setError('');
    try {
      let response = await fetch('https://randomuser.me/api');
      let data = await response.json();
      setUser(data.results[0]);
    } catch (err) {
      setError('Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div style={styles.container}>
      <h1>User Info Fetcher</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {user && !loading && (
        <div style={styles.card}>
          <img src={user.picture.large} alt="User" style={styles.image} />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      )}

      <button onClick={fetchUser} style={styles.button}>Click</button>
    </div>
  );
}

let styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial',
  },
  card: {
    margin: '1rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  image: {
    borderRadius: '50%',
    marginBottom: '1rem',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  }
};

export default App;
