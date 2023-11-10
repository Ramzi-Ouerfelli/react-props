import React from 'react'
import Player from "./Player"



const PlayerList = ({Players}) => {
  return (
    <div>
        {Players.map((ob)=> <Player elm={ob}  />)}
    </div>
  )
}

export default PlayerList