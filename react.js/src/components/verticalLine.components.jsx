import React, { useState } from 'react';
import { TURN } from '../constants/turn';

const VerticalLine = ({ setTurn,turn, bottomDot }) => {
    const [isHover, setIsHover] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const [selectedColor, setSelectedColor] = useState()

    const onLineMouseEnter = () => {
        setIsHover(true)
    }
    const onLineMouseLeave = () => {
        setIsHover(false)
    }
    const onLineClick = () => {
        setSelectedColor(turn)
        setIsHover(false)

        setIsSelected(true)
        if (turn === TURN.blue)
            setTurn(TURN.red)
        else setTurn(TURN.blue)
    }
    return (
        <div className={`vertical_line ${isHover ? turn : ''} ${isSelected ? selectedColor : ''}`}
            onMouseEnter={onLineMouseEnter} onMouseLeave={onLineMouseLeave}
            onClick={onLineClick}
            >
            <div className="dot"></div>
            {bottomDot && <div className="bottom_dot"></div>}
        </div>
    );
};

export default VerticalLine;