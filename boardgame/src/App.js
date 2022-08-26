import "./App.css";
import { useState } from "react";

export default function App() {
  const [playerPosition, setPlayerPosition] = useState(0);
  const [health, setHealth] = useState(25);
  const board = [
    0,
    3,
    0,
    -5,
    4,
    -2,
    1,
    7,
    -2,
    -13,
    8,
    6,
    1,
    -2,
    -6,
    -9,
    -1,
    3,
    8,
    -3,
    "SAFE",
  ];

  function Tile(props) {
    const hasPlayer = props.hasPlayer || false;
    const healthChange = props.value;

    return (
      <div className="box">
        <p>{healthChange} </p>
        {hasPlayer && <div className="dot" />}
      </div>
    );
  }

  function RollDie() {
    let die = Math.floor(Math.random() * 5) + 1;
    console.log("rolled", die);
    const newPosition = playerPosition + die;
    setPlayerPosition(newPosition);
    console.log("pos", newPosition, playerPosition);
    const newHealth = health + board[newPosition];
    setHealth(newHealth);
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          RollDie();
        }}
      >
        Roll Die
      </button>
      <p>{health} health</p>
      {board.map((tile, index) => {
        return <Tile value={tile} hasPlayer={playerPosition === index} />;
      })}
    </div>
  );
}
