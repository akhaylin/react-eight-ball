import React, { useState } from "react";
import "./EightBall.css";
import { getRandomIdx } from "./helpers.js";

//TODO:Can put in seperate file and improt here
const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];


/** EightBall shows random message and color on click
 *
 * Props:
 * - choices which is an array of message and color combinations
 *
 * State:
 * - eightBall
 *
 * App -> EightBall
 */
function EightBall({ choices = answers }) {

  console.log("IN EIGHTBALL");

  const [eightBall, setEightBall] = useState({
    color: "black",
    msg: "Think of a question"
  });

  function handleClick() {
    const msgAndColor = getRandomIdx(choices);
    
    setEightBall({
      color: msgAndColor.color,
      msg: msgAndColor.msg
    });
  }

  return (
    <div
      className="EightBall"
      style={{ "background-color": eightBall.color }}
      onClick={handleClick}
    >
      <div className="EightBall-message">
        {eightBall.msg}
      </div>
    </div>
  );
}

export default EightBall;
