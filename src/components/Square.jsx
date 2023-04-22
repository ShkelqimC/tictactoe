import React from "react";

export function Square({ index, value, onClick, board }) {
  const classes = value === "X" ? "box x" : "box o";
  return (
    <div
      className={`square ${classes}`}
      onClick={onClick}
      style={{
        cursor: `${board[index] === null ? "pointer" : "not-allowed"}`,
        pointerEvents: `${board[index] === null ? "" : "none"}`,
      }}
      //   style={{ cursor: "not-allowed" }}
    >
      {value}
    </div>
  );
}
