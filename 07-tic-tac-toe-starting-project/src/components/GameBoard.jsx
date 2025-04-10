import {useState} from "react";

const initialGameBoard = [
    [null,'X','O'],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard({onSelectSquare, playerSymbol}){

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevState)=> {

            const updatedBoard = [...prevState.map(innerArray=> [...innerArray])];
            updatedBoard[rowIndex][colIndex] = playerSymbol;

            return updatedBoard;
        });

        onSelectSquare();
    }

    return <ol id="game-board">
        {gameBoard.map((row,rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>)}
                </ol>


            </li>
        )}
    </ol>
}