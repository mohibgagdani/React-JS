import '../src/App.css'
import Card from './component/card'
import './Data/products'
import product from './Data/products'

function App() {
  return (
    <>
      <div id='box'>
        {product.map((e) => (
          <Card 
            pImg={e.image}
            pBrend={e.brand}
            pPrice={e.price}
          />
        ))}
      </div>
    </>
  )
}

export default App
