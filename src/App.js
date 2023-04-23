import './App.css';
import {Square} from './components/Square';
import Board from './components/Board'
import React, { useState, useEffect } from "react";
import Scores from './components/Scores';
import ShowTurn from './components/ShowTurn';
import Results from './components/Results';

let moves = {
  middle:4,
  upLeft:0,
  upRight:2,
  bottomLeft: 6,
  bottomRight: 8,
}

let squares = new Array(9).fill(null);
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true)
  const [winner, setWinner] = useState({draw: false, didWin: false, winner: ''})
  const [score, setScore] = useState({Player: 0, Computer: 0, Draw:0})

  const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]


  useEffect(() => {

    checkWinner(board)
  }, board)

  const checkWinner = (board) => {
    var draw = false;
    var win = false
    winCombos.some((row, rIndex) => {
      if(row.every(i => board[i] == 'X')){
        setWinner({...winner, didWin:true, winner: 'Player'})
        setScore({...score, Player:++score.Player})
        win = true;
      }else if(row.every(i => board[i] == 'O')){
        setWinner({...winner, didWin:true, winner: 'Computer'})
        setScore({...score, Computer:++score.Computer})
        win = true;
      }

    })
    if(win == false && board.every(x => x!==null)){
      debugger;
      setScore({...score, Draw:++score.Draw})
      setWinner({...winner, draw:true})   
    }


    // if(draw){
    //   setWinner({...winner, draw:true})
    //   setScore({...score, Draw:score.Draw++})
    // }
  }

  useEffect(() => {

    if(!xTurn){
      setTimeout(() => {
        computerMove();
      }, 500)
    } 
  }, [xTurn])

  /*
        for (let j  = 0;  j < row.length; j++) {
        if(takenSquares.includes(row[j])){
          if(board[row[j]==='X']){
            numPlayerMarks++;
          }
        }else{
          numAvailableSquares++;
          lastAvailableSquare = combo[j];
        }
        
      }
      
      */

      function findNextMove(takenSquares,board, availableSquares ){
        for (let i = 0; i < winCombos.length; i++) {
          const combo = winCombos[i];
          let numComputerMarks = 0;
          let numAvailableSquares = 0;
          let lastAvailableSquare = -1;
      
          for (let j = 0; j < combo.length; j++) {
            if (takenSquares.includes(combo[j])) {
              if ("O" === board[combo[j]]) {
                numComputerMarks++;
              }
            } else {
              numAvailableSquares++;
              lastAvailableSquare = combo[j];
            }
          }
      
          if (numComputerMarks === 2 && numAvailableSquares === 1) {
            return lastAvailableSquare;
          }
        }

        for (let i = 0; i < winCombos.length; i++) {
          const combo = winCombos[i];
          let numPlayerMarks = 0;
          let numAvailableSquares = 0;
          let lastAvailableSquare = -1;
      
          for (let j = 0; j < combo.length; j++) {
            if (takenSquares.includes(combo[j])) {
              if ("X" === board[combo[j]]) {
                numPlayerMarks++;
              }
            } else {
              numAvailableSquares++;
              lastAvailableSquare = combo[j];
            }
          }
      
          if (numPlayerMarks === 2 && numAvailableSquares === 1) {
            return lastAvailableSquare;
          }
        }
      
        // If there are no two-in-a-row or three-in-a-row situations, make a random move
        return availableSquares[Math.floor(Math.random() * availableSquares.length)];

      }
  function checkForTwo(takenSquares,board ) {
    for (let i = 0; i < winCombos.length; i++) {
      const combo = winCombos[i];
      let numPlayerMarks = 0;
      let numAvailableSquares = 0;
      let lastAvailableSquare = -1;
      for (let j = 0; j < combo.length; j++) {
        if (takenSquares.includes(combo[j])) {
          if ("X" === board[combo[j]]) {
            numPlayerMarks++;
          }
        } else {
          numAvailableSquares++;
          lastAvailableSquare = combo[j];
        }
      }

      if (numPlayerMarks === 2 && numAvailableSquares === 1) {
        return lastAvailableSquare;
      }
    }
  
    return -1;
  
  }

  const computerMove = () => {

    var availableSquares = [];
    var takenSquares = []
    let numPlayerMarks = 0;
    let numAvailableSquares = 0;
    board.map((x, i) => {
      if(x === null){
        availableSquares.push(i);
      }else{
        takenSquares.push(i)
      }
    })
    var index = findNextMove( takenSquares, board, availableSquares)

       

    const randomIndex = Math.floor(Math.random() * availableSquares.length);
    if(index !== -1) return handleSquareClick(index)

    handleSquareClick(availableSquares[randomIndex])
  }

  const handleSquareClick = ( index)  => {
    const updateBoard = board.map((s, i) => {
      if(i === index){
        return xTurn === true? 'X' : 'O'

      }else{
        return s
      }
    })
    setBoard(updateBoard)
    // checkWinner(board)
    setXTurn(!xTurn)
  }

  return (
    <main>
      <Scores scores={score} xTurn={xTurn}/>
        <Board board={board} onClick={winner.didWin ? null : handleSquareClick}/>

        <Results winner={winner} xTurn={xTurn} setWinner={setWinner} setBoard={setBoard}/>       
    </main>
   
   )
}

export default App;
