import React, { useState } from 'react';
import './App.css';
import Square from './Square';

// const handleClick = () => {
//   setSquares(['', '', '', '', '', '', '', '', '',])
//   setPlayer(true)
// };

function calculateWinner(array){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
      if (
        array[a] &&
        array[a] === array[b] &&
        array[a] === array[c]
    ){
        return `${array[a]} won!`;
    }
  }
  return 'Who will win?';
};

function App() {

 

  const handleClick = () => {
    setSquares(['', '', '', '', '', '', '', '', '',])
    setPlayer(true)
  };


  const [squares, setSquares] = useState(['','','','','','','','','']);
  const [player, setPlayer] = useState(true);
  // const shape = "this is a shape"
  return (
    <div className="App" >
      <button onClick={handleClick}>Reset</button>
      <div className='container'>
        {squares.map((value, index) => {
          return (
            <Square
              index={index}
              squareValue={value}
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
            /> 
          );
        })}
      </div>
      <span>{calculateWinner(squares)}</span>
    </div>
  );
}


export default App;
