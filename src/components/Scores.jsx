export default function Scores({ scores, xTurn }) {
  const { Player, Computer, Draw } = scores;
  console.log(scores);
  return (
    <div className="scoreDiv">
      <span className={`score x-score ${!xTurn && "inactive"}`}>
        Player:{Player}
      </span>
      <span className={`score ${xTurn && "inactive"}`}>Draw:{Draw}</span>
      <span className={`score o-score ${xTurn && "inactive"}`}>
        Computer:{Computer}
      </span>
    </div>
  );
}
