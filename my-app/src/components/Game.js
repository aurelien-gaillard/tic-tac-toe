import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [history, setHistory] = useState([])
    const [isXturn, setIsXturn] = useState(true)
    const winner = calculateWinner(squares)

    const handleClick = (index) => {
        const copySquares = [...squares]
        if (winner || copySquares[index]) return

        isXturn ? copySquares[index] = 'X' : copySquares[index] = 'O'
        setSquares(copySquares)
        setIsXturn(!isXturn)

        const copyHistory = [...history]
        copyHistory.push(copySquares)
        setHistory(copyHistory)
        console.log(history)
    }

    const jumpTo = (turnIndex) => {
        const newLayout = [...history[turnIndex]]
        setSquares(newLayout)
    }

    const renderMoves = () => {
        setSquares(Array(9).fill(null))
        setHistory([])
    }

    const historyButton = history.map((turn, index)=> {
        return (
            <button key={index} onClick={()=>jumpTo(index)}>
                Replay turn number {index+1}
            </button>
        )
    })

    return (
        <>
            <Board
                onClick={handleClick}
                squares={squares} />
            <div>

                <p>{winner ? `Winner : ${winner}` :
                    `It is turn : ` + (isXturn ? 'X' : 'O')
                }
                </p>
                <button onClick={renderMoves}>Restart the game</button>
                {historyButton}
            </div>
        </>
    )
}

export default Game;