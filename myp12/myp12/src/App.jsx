import React, {useState} from 'react';

function App() {
  let [showBox, setShowBox] = useState(false);
  let [key, setKey] = useState('');
  let [value, setValue] = useState('');
  let [result, setResult] = useState('');

  let handleSet = () => {
    localStorage.setItem(key, value);
    setResult(`Set "${key}" = "${value}"`);
  };

  let handleGet = () => {
    let storedValue = localStorage.getItem(key);
    setResult(storedValue ? `Value: "${storedValue}"` : `"${key}" not found`);
  };

  let handleRemove = () => {
    localStorage.removeItem(key);
    setResult(`Removed "${key}"`);
  };

  let handleClear = () => {
    localStorage.clear();
    setResult('Local storage cleared');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <button onClick={() => setShowBox(!showBox)}>Local Storage</button>

      {showBox && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          border: '2px solid #333',
          borderRadius: '10px',
          background: '#f0f0f0',
          width: '300px'
        }}>
          <input
            type="text"
            placeholder="Key"
            value={key}
            onChange={e => setKey(e.target.value)}
            style={{ marginBottom: '10px', width: '100%', padding: '5px' }}
          />
          <input
            type="text"
            placeholder="Value"
            value={value}
            onChange={e => setValue(e.target.value)}
            style={{ marginBottom: '10px', width: '100%', padding: '5px' }}
          />
          <div>
            <button onClick={handleSet}>Set</button>
            <button onClick={handleGet}>Get</button>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleClear}>Clear</button>
          </div>
          <p style={{ marginTop: '10px' }}>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;


