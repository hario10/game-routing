import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Play = ({pilihanSaya, setScore, score}) => {
    const [pilihanKomputer, setPilihanKomputer] = useState('');
    const [result, setResult] = useState('');

    const random = () => {
        const pilihan = ['Lakik', 'Rama', 'Eko']
        setPilihanKomputer(pilihan[Math.floor(Math.random () * 3 )]);
    }

    const hasil = () => {
        if(pilihanSaya === 'Lakik' && pilihanKomputer === 'Rama') {
            setResult('(Wih,,,mantap kamu menang, karena Lakik agak gapuak sangenek dari pado Rama)');
            setScore(score+1);
        } else if (pilihanSaya === 'Rama' && pilihanKomputer === 'Lakik') {
            setResult('(Aduh,,,kamu kalah, kan lah bakecek an tadi mah, badan si Lakik tt gapuak dari pado si Rama, balawanan jo si Lakik samo si Rama tt)');
            setScore(score+0);
        } else if (pilihanSaya === 'Eko' && pilihanKomputer === 'Lakik') {
            setResult('(Mantap,,,kamu menang, karano Eko agak ciluah dari pado si Lakik)');
            setScore(score + 1);
        } else if (pilihanSaya === 'Lakik' && pilihanKomputer === 'Eko') {
            setResult('(Yah,,,kalah, Eko tt labiah ciluah dari pado si Lakik)');
            setScore(score+0);
        } else if (pilihanSaya === 'Rama' && pilihanKomputer === 'Eko') {
            setResult('(Mantap kamu menang, karano Rama lah S2 kuliahe, Eko S1 alun jo salasai lai)');
            setScore(score+1);
        } else if (pilihanSaya === 'Eko' && pilihanKomputer === 'Rama') {
            setResult('(Yah,,,kalah, pacapek jo lah si Eko wisuda S1 nx dulu)');
            setScore(score+0);
        } else {
            setResult('(Podo wae)');
            setScore(score+0);
        }
    }

    useEffect(() => {
        random();
    }, []);

    useEffect(() => {
        hasil();
    }, [pilihanKomputer])
    return (
        <>
            <div className='player'>
                <h2 style={{color: 'green'}}>Hasil Dari Pilihan Pada Permainan</h2>
                <hr />

                <div style={{fontSize: '20px'}}>Kamu memilih : {pilihanSaya}</div>
                <div style={{fontSize: '20px'}}>Computer memilih: {pilihanKomputer}</div>
                <div className='hasil'>Keterangan :</div>
                <div className='jawaban'> {result}</div>
                
                <Link to='/' style={{textDecoration: 'none'}}>
                    <div className='lagi'>Main Lagi</div>
                </Link>
            </div>
        </>
    )
}

export default Play;