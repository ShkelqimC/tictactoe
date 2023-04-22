import ShowTurn from "./ShowTurn";
export default function Results({ winner, xTurn, setWinner, setBoard }) {
  console.log(winner, "winner");
  return (
    <div className="results">
      {!winner.didWin && !winner.draw && <ShowTurn turn={xTurn} />}
      {winner.didWin && !winner.draw && (
        <>
          <h1>
            We have a winner!
            <span className={`${winner.winner == "O" ? "o" : "x"}`}>
              {" "}
              {winner.winner}
            </span>{" "}
            Have won the game!
          </h1>
          <button
            className="resetBtn"
            onClick={() => {
              setWinner({ ...winner, didWin: false, draw: false });
              setBoard(Array(9).fill(null));
            }}
          >
            Reset game
          </button>
        </>
      )}
      {!winner.didWin && winner.draw && (
        <>
          <h1>We have a DRAW!</h1>
          <button
            className="resetBtn"
            onClick={() => {
              setWinner({ ...winner, didWin: false, draw: false });
              setBoard(Array(9).fill(null));
            }}
          >
            Reset game
          </button>
        </>
      )}
    </div>
  );
}

{
  /* {(!winner.didWin && !winner.draw) && <ShowTurn turn={xTurn}/>}
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
        )} */
}
