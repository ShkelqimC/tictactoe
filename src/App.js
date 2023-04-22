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
  const [score, setScore] = useState({Player: 0, Computer: 0})

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
      setWinner({...winner, draw:true})   
    }


    if(draw){
      setWinner({...winner, draw:true})
    }
  }

  useEffect(() => {
    if(!xTurn) computerMove();
  }, [xTurn])


  const computerMove = () => {

    var availableMoves = [];
    board.map((x, i) => {
      if(x === null){
        availableMoves.push(i);
      }
    })
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    handleSquareClick(availableMoves[randomIndex])
    // handleSquareClick(availableMoves[item])
      // var randomnumber=Math.floor((Math.random() * 9))
   

        // handleSquareClick(randomnumber)
    
    // console.log(randomnumber, "randomnr")
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


        

        {/* {(!winner.didWin && !winner.draw) && <ShowTurn turn={xTurn}/>}
        {winner.didWin && (
          <div className='results'>

            <h1>We have a winner!<span className={`${winner.winner == 'O' ? 'o' : 'x'}`}> {winner.winner}</span> Have won the game!</h1>
            <button className='resetBtn' onClick={() =>{ 
              setWinner({...winner, didWin: false, draw:false})
              setBoard(Array(9).fill(null))                   
              }}>              
              Reset game
            
            </button>

          </div>
        )}

        {(winner.draw && !winner.didWin) && (
           <div className='results'>
          <h1>We have a DRAW!</h1>
          <button className='resetBtn' onClick={() =>{ 
            setWinner({...winner, didWin: false, draw:false})
            setBoard(Array(9).fill(null))                   
          }}>              
            Reset game
          
          </button>
          </div>
        )} */}

       
    </main>
   
   )
}

export default App;
