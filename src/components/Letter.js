import React, {useConext, useContext} from 'react';
import { AppContext } from '../App';
import Board from './Board';

function Letter(letterPos, attemptVal) {
    const {board} = useContext(AppContext)

    return (
        <div>
<div className= "letter"></div>

        </div>
    )
}
export default Letter;