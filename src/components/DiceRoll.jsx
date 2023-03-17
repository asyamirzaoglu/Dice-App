import React from "react";
import { useState } from "react";
import Dice1 from "../images/dice1.png";
import Dice2 from "../images/dice2.png";
import Dice3 from "../images/dice3.png";
import Dice4 from "../images/dice4.png";
import Dice5 from "../images/dice5.png";
import Dice6 from "../images/dice6.png";
import { useNavigate } from "react-router-dom";

function DiceRoll() {
  const navigate = useNavigate();
  const diceImageArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const [diceImage, setDiceImage] = useState(Dice1);
  const [diceImage2, setDiceImage2] = useState(Dice1);
  function handleClick() {
    let timer = 0;
    let loop = 200;
    let myInterval = setInterval(() => {
      let random = Math.floor(Math.random() * diceImageArray.length);
      let random2 = Math.floor(Math.random() * diceImageArray.length);
      setDiceImage(diceImageArray[random]);
      setDiceImage2(diceImageArray[random2]);
      timer += loop;
      if (timer > 800) {
        clearInterval(myInterval);
        if (random === random2) {
          setTimeout(() => {
            navigate("/win");
          }, 500);
        }
      }
    }, loop);
  }

  return (
    <>
      <div className="diceContainer">
        <div className="diceDiv">
          <img
            className="dice"
            style={{
              WebkitMask: `url(${diceImage}) center/contain`,
              background: "purple",
            }}
          ></img>
          <div className="heart"></div>
        </div>
        <div className="diceDiv">
          <img
            className="dice"
            style={{
              WebkitMask: `url(${diceImage2}) center/contain`,
              background: "purple",
            }}
          ></img>
          <div className="heart"></div>
        </div>
      </div>

      <button className="btn-bas" onClick={handleClick}>
        ROLL
      </button>
    </>
  );
}

export default DiceRoll;
