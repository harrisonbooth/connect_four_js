import React from 'react';
import '../styles/Game.css'

const CellComponent = ({player, winning, id, handleClick}) => {
    const playerClass = (player) ? player : ""

    return (
        <div className={`cell ${playerClass}`} onClick={() => handleClick(id)}>
            {id}
        </div>
    )
}

export default CellComponent;
