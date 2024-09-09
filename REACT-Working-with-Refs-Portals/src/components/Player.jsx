import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    console.log(playerName);
    playerName.current.value = "";
  }

  // state는 변화가 있을 때마다 재실행이 되지만, refs는 component의 재실행을 보장하지 않는다.

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
