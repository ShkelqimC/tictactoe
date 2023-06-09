export default function ShowTurn({ turn }) {
  return (
    <div className="whosTurn">
      <h1>
        Waiting for{" "}
        <span className={`${turn ? "x" : "o"} `}>
          {" "}
          {turn ? "Player" : "Computer"}
        </span>{" "}
        To play.
      </h1>
    </div>
  );
}
