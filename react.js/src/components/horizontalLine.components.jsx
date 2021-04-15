import React, { useState } from 'react';
import { TURN } from '../constants/turn';

const HorizontalLine = ({ turn, setTurn }) => {
    const [isHover, setIsHover] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const [selectedColor, setSelectedColor] = useState()


    const onLineMouseEnter = () => {
        if (isSelected) return
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
        <div className={`horizontal_line ${isHover ? turn : ''} ${isSelected ? selectedColor : ''}`}
            onMouseEnter={onLineMouseEnter} onMouseLeave={onLineMouseLeave}
            onClick={onLineClick}
        >

        </div>
    );
};

export default HorizontalLine;