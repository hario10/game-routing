import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


const Main = ({ setPilihanSaya }) => {
    const choiceHandler = (e) => {
        setPilihanSaya(e.target.dataset.id);
    }
    return (
        <>
        <div className='letak'>
        <Link to='/Play'>
                <div className='main' onClick={choiceHandler} data-id='Lakik'>Lakik</div>
            </Link>
            <Link to='/Play'>
                <div className='main' onClick={choiceHandler} data-id='Rama'>Rama</div>
            </Link>
            <Link to='/Play'>
                <div className='main' onClick={choiceHandler} data-id='Eko'>Eko</div>
            </Link>
        </div>
           
        </>
    )
}

export default Main;