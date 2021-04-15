import React from 'react';

const Header = ({ redScore, blueScore }) => {
    return (
        <div className="header">
            <div>
                <span>red: </span>
                <span id="red-score" style={{ color: 'red', fontWeight: 'bold' }}>
                    {redScore}
                </span>
            </div>
            <div>
                <span>blue: </span>
                <span id="blue-score" style={{ color: 'blue', fontWeight: 'bold' }}>
                    {blueScore}
                </span>
            </div>
        </div>
    );
};

export default Header;