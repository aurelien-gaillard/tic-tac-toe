import React from 'react';
import Square from './Square';

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '150px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => {
    const board = squares.map((square, index) => {
        return (
            <Square 
            value={square} 
            key={index} 
            onClick={()=>onClick(index)}/>
        )
    })

    return (
        <div style={style}>
           {board}
        </div>
    )
}

export default Board;