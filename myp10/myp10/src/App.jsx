import React, { useState } from 'react';

function App() {
  let [name, setName] = useState('');
  let [message, setMessage] = useState('');
  let [comments, setComments] = useState([]);

  let handlePost = () => {
    if (name && message) {
      let newComment = {
        id: Date.now(),
        name: name,
        message: message,
        time: new Date().toLocaleTimeString()
      };
      setComments([newComment, ...comments]);
      setName('');
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>Leave a Comment / Review</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
      />
      <button onClick={handlePost} style={{ padding: '10px 20px' }}>Post</button>

      <hr />
      <h3>All Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc' }}>
          <strong>{comment.name} - {comment.time}</strong>
          <p>{comment.message}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
