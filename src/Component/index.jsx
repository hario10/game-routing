
import Main from './Game/main';
import Navigasi from './Game/navigasi';
import Play from './Game/play';
import Score from './Game/score';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';

const Game = () => {
    const [score, setScore] = useState(0);
    const [pilihanSaya, setPilihanSaya] = useState('');
    return (
        <div>
            <Navigasi />
            <Score score={score}/>
            <Routes>
                <Route path={'/'} element={<Main setPilihanSaya={setPilihanSaya}/>}/>
                <Route path={'/play'} element={<Play pilihanSaya={pilihanSaya} setScore={setScore} score={score}/>}/>
            </Routes>
        </div>
    )
}
export default Game;