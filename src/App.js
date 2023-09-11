import { createContext, useState } from 'react';
import './App.css';
import { boardDefault } from './Words';
import Board from './components/Board';
import Keyboard from './components/Keyboard';


export const AppContext = createContext();

function App() {
  const [board, setBoard]= useState(boardDefault)

const timestamp = Date.now();
const currentDate = new Date(timestamp);
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and pad with leading zeros
const day = String(currentDate.getDate()).padStart(2, '0'); // Pad day with leading zeros

// Format the date as MM-DD-YYYY
const formattedDate = `${month}-${day}-${year}`;

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
        <h6> Last Updated: {formattedDate} </h6>
      </nav>
      <AppContext.Provider value={{board, setBoard}}>
     <Board/>
     <Keyboard/>
     </AppContext.Provider>
    </div>
  );
}

export default App;
