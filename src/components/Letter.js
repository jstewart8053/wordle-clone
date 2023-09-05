import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";


function Letter({letterPos, attemptVal}) {
  const {board} = useContext(AppContext) 
    const letter = board[attemptVal][letterPos] ;
    console.log(letter)

    return (
        <div>
<div className= "letter"></div>

        </div>
    )
}
export default Letter;