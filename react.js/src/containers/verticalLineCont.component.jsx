import React from 'react';
import VerticalLine from '../components/verticalLine.components';

const VerticalLineCont = ({ setTurn, turn, bottomDot }) => {
    return (
        <div className="row vertical_lines_container">
            <VerticalLine setTurn={setTurn} turn={turn} bottomDot />
            <VerticalLine setTurn={setTurn} turn={turn} bottomDot />
            <VerticalLine setTurn={setTurn} turn={turn} bottomDot />
            <VerticalLine setTurn={setTurn} turn={turn} bottomDot />
            <VerticalLine setTurn={setTurn} turn={turn} bottomDot />
            <VerticalLine setTurn={setTurn} turn={turn} bottomDot />
            <VerticalLine setTurn={setTurn} turn={turn} bottomDot />
            <VerticalLine setTurn={setTurn} turn={turn} bottomDot />
        </div>
    );
};

export default VerticalLineCont;