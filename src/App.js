import React from "react";
import "./App.css";
import PlayersList from "./PlayerList";
import Players from "./Players";

function App () {
  return (
    <div className="App">
      <h1 style={{color:"white", display: "flex", alignItems: "centre" , justifyContent: "center", }}>
        <strong>Football Players</strong></h1>
      <PlayersList Players={Players} />
    </div>
  );
}

export default App;