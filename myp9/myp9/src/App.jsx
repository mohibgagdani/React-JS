import { useRef } from 'react';

function App() {
  const nameRef = useRef();

  const handleSubmit = () => {
    const name = nameRef.current.value;
    console.log(name);
    alert(`Submitted name: ${name}`);
  };

  return (
    <div>
      <input type="text" ref={nameRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;