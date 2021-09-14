import Game from '../models/Game';
import CellComponent from './CellComponent';

const BoardComponent = ({board, handleClick, handleSelectClick}) => {
    const renderCells = board.map((cell) => {
        return <CellComponent player={cell.player} winning={cell.winning} id={cell.id} key={cell.id} handleClick={handleClick}/>
    })

    return (
        <>
            <button id="0" onClick={() => handleSelectClick(0)}>Column 1</button>
            {/* <button id="1" onClick ={handleSelectClick}>Column 2</button> */}
            {/* <button id="2" onClick ={handleSelectClick}>Column 3</button> */}



            <div className='grid'>
                {renderCells}
            </div>
        </>
    )
}

export default BoardComponent;
