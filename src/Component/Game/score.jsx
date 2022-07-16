import React from 'react';
import './style.css';

const Score = ({score}) => {
    return (
        <>
            <div className='score'>Score :</div>
            <div className="angka">{score}</div>
        </>
    )
}

export default Score;