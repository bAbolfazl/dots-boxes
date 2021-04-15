import React, { useState } from 'react';
import GameStatus from '../components/gameStatus.component';
import { TURN } from '../constants/turn';
import HorizontalLineCont from '../containers/horizontalLineCont.components';
import VerticalLineCont from '../containers/verticalLineCont.component';

const Game = () => {
    const [turn, setTurn] = useState(TURN.blue)

    return (
        <div className="container">
            <HorizontalLineCont turn={turn} setTurn={setTurn} />
            <VerticalLineCont turn={turn} setTurn={setTurn} />
            <HorizontalLineCont turn={turn} setTurn={setTurn} />
            <VerticalLineCont turn={turn} setTurn={setTurn} />
            <HorizontalLineCont turn={turn} setTurn={setTurn} />
            <VerticalLineCont turn={turn} setTurn={setTurn} />
            <HorizontalLineCont turn={turn} setTurn={setTurn} />
            <VerticalLineCont turn={turn} setTurn={setTurn} />
            <HorizontalLineCont turn={turn} setTurn={setTurn} />
            <VerticalLineCont turn={turn} setTurn={setTurn} bottomDot />
            <HorizontalLineCont turn={turn} setTurn={setTurn} />

            <GameStatus turn={turn} />
        </div>
    );
};

export default Game;