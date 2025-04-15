
function App() {

  let count = 0;
  
  const counterDisplay = document.getElementById('counter');
  const incrementButton = document.getElementById('incrementButton');
  
  incrementButton.addEventListener('click', () => {
      count++;
      counterDisplay.innerText = count;
  });
    return (
      <>
       <div class="counter-container">
          <h1>Counter: <span id="counter">0</span></h1>
          <button id="incrementButton">Increment</button>
      </div>
      </>
    )
  }
  
  export default App
  