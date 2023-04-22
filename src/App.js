import './App.css';
import { useState } from 'react';
import {Square} from './components/Square';


let squares = new Array(9).fill(null);
function App() {
  

  return (

    <main>
      <div className='boardContainer'>

       
      {squares.map((square,index) => {
        return <Square index={index}/>
      })}
      </div>
       
    </main>
   
   )
}

export default App;
