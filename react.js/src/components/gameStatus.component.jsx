import React from 'react';

const GameStatus = ({ turn }) => {
    return (
        <div className="game_status">
            <p>
                Player
                 <span id="player_turn" className={`text--${turn}`} style={{ fontWeight: 'bold' }}>
                    {` ${turn}`}
                </span>
                's turn
            </p>
        </div>
    );
};

export default GameStatus;