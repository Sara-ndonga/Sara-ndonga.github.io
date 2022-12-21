import React from "react";
import { useState } from "react";
import Bubble from "../../components/Bubble/Bubble";
import useWindowDimensions from "../../components/UseWindowDimensions/UseWindowDimensions";
import "./Home.scss";

function Home() {
  const { height, width } = useWindowDimensions();
  const [game, setGame] = useState(null);
  const [score, setScore] = useState(0);
  const [menuVisible, setMenuVisible] = useState(true);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [top, setTop] = useState(Math.random() * height);
  const [left, setLeft] = useState(Math.random() * width);
  const start = () => {
    setTop(Math.random() * window.innerHeight);
    setLeft(Math.random() * window.innerHeight);
    setIsBubbleVisible(true);
  };
  const pause = () => {
    setMenuVisible(true);
    setIsBubbleVisible(false);
    clearInterval(game);
  };
  const endGame = () => {
    setScore(0);
    setGame(null);
  };
  const win = () => {
    pause();
    endGame();
    alert("You win!");
  };
  const bubbleSmash = () => {
    setScore(score + 1);
    setIsBubbleVisible(false);
    if (score === 10) {
      clearInterval(game);
      setGame(window.setInterval(start, 500));
    } else if (score === 25) {
      clearInterval(game);
      setGame(window.setInterval(start, 300));
    } else if (score === 45) {
      clearInterval(game);
      setGame(window.setInterval(start, 100));
    } else if (score === 50) win();
  };
  const handleClick = () => {
    setIsBubbleVisible(true);
    setMenuVisible(false);
    setGame(window.setInterval(start, 1000));
  };

  return (
    <div className="game-container">
      <div className="counter" onClick={pause}>
        {score}
      </div>
      <div className="menu" hidden={!menuVisible}>
        <h1>{game === null ? "Menu" : "Pause"}</h1>
        <div className="buttons">
          <button onClick={handleClick}>
            {game === null ? "Start!" : "Continue"}
          </button>
          <br />
          <button hidden={game === null ? true : false} onClick={endGame}>
            Exit
          </button>
        </div>
      </div>
      <div
        onMouseEnter={bubbleSmash}
        onClick={bubbleSmash}
        hidden={!isBubbleVisible}
      >
        <Bubble top={top} left={left} />
      </div>
    </div>
  );
}

export default Home;
