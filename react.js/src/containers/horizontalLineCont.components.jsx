import React from 'react';
import HorizontalLine from '../components/horizontalLine.components';

const HorizontalLineCont = ({ turn, setTurn }) => {
    return (
        <div className="row horizontal_lines_container">
            <HorizontalLine turn={turn} setTurn={setTurn} />
            <HorizontalLine turn={turn} setTurn={setTurn} />
            <HorizontalLine turn={turn} setTurn={setTurn} />
            <HorizontalLine turn={turn} setTurn={setTurn} />
            <HorizontalLine turn={turn} setTurn={setTurn} />
            <HorizontalLine turn={turn} setTurn={setTurn} />
            <HorizontalLine turn={turn} setTurn={setTurn} />
        </div>
    );
};

export default HorizontalLineCont;