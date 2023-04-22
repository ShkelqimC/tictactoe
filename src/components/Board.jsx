import React, { useState } from "react";
import { Square } from "./Square";

export default function Board({ board, onClick }) {
  return (
    <div className="boardContainer">
      {board.map((v, i) => {
        return (
          <Square
            value={v}
            onClick={() => v === null && onClick !== null && onClick(i)}
            board={board}
            index={i}
            // style={`cursor:${board[i] !== null ? "pointer" : "no-allowed"}`}
          />
        );
      })}
    </div>
  );
}
