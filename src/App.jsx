
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCart from './components/CoffeeCart';

function App() {

  const coffees = useLoaderData();

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Cold Coffee: {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-2'>
        {
          coffees.map(coffee => <CoffeeCart
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCart>)
        }
      </div>

    </div>
  )
}

export default App
