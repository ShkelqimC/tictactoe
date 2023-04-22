export default function Scores({ scores, xTurn }) {
  const { X, O } = scores;
  console.log(X, "X");
  console.log(O, "O");
  console.log(scores, "scores");
  console.log(xTurn, "xTurn");
  return (
    <div className="scoreDiv">
      <span className={`score x-score ${!xTurn && "inactive"}`}>X:{X}</span>
      <span className={`score o-score ${xTurn && "inactive"}`}>O:{X}</span>
    </div>
  );
}
