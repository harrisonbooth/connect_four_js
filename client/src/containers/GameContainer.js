import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import GamesService from '../services/GameServices';
import BoardComponent from '../components/BoardComponent';
import Game from '../models/Game'

const GameContainer = () => {
    const [games, setGames] = useState([])
    const [game, setGame] = useState(null)

    useEffect(() => {
        GamesService.getGames()
         .then(games=> setGames(games))

        setGame(Game.newGame())
    }, [])

    const endGameResults = finishedGame => {
        GamesService.postGame(finishedGame)
        .then(savedGames => setGames([...games, savedGames]))
        console.log(games)
    }

    const handleClick = (event) => {
        console.log(event.target);

        const cellId = parseInt(event.target.innerText);
        if (!game.board[cellId].player) {
          game.takeTurn(cellId % 7)
          setGame(game.clone())
        } else {
            console.log('move not allowed');
        }
    }

    const handleResetClick = () => {
        game.newBoard();
        setGame(game.clone())
    }

    const handleSelectClick = (column) => {
      game.takeTurn(column)
      setGame(game.clone())
    }

    const boardNode = (game) ? <BoardComponent board={[...game.board]} handleClick={handleClick} handleSelectClick={handleSelectClick}/> : null
    console.log("rerendering gamecontainer");
    return (
        <>
        <HeaderComponent handleResetClick={handleResetClick}/>
        <h1>I am the screen container</h1>
        {boardNode}
        {/* <GameBoardComponent endGameResults={endGameResults}/> */}
        {/* <ScoreComponent games = {games}/> */}
        <FooterComponent/>
        </>
    )

}

export default GameContainer
