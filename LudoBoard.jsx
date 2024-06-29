import React, { useState } from 'react';

function LudoBoard() {
    let [Moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });

    let updateBlue = () => {
        console.log(`Moves = ${Moves.blue}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 };
        });
    };

    let updateYellow = () => {
        console.log(`Moves = ${Moves.yellow}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };
        });
    };

    let updateRed = () => {
        console.log(`Moves = ${Moves.red}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 };
        });
    };

    let updateGreen = () => {
        console.log(`Moves = ${Moves.green}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 };
        });
    };

    return (
        <div>
            <p>Game begins!</p>
            <div className='board'>
                <p>Blue moves = {Moves.blue}</p>
                <button style={{ background: "blue" }} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {Moves.yellow}</p>
                <button style={{ background: "yellow" }} onClick={updateYellow}>+1</button>
                <p>Green moves = {Moves.green}</p>
                <button style={{ background: "green" }} onClick={updateGreen}>+1</button>
                <p>Red moves = {Moves.red}</p>
                <button style={{ background: "red" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}

export default LudoBoard;
