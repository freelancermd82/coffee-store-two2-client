
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCart from './components/CoffeeCart';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot and Cold Coffee: {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-2'>
        {
          coffees.map(coffee => <CoffeeCart
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCart>)
        }
      </div>


    </div>
  )
}

export default App
