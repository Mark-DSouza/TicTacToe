import React from 'react';
import Square from '../square/Square';
import './Board.css';

function Board(props) {
    return (
        <div className="board">
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
        </div>
    )
}

export default Board;