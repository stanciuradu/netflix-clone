import React from 'react';
import HeaderÎntrebari from '../components/HeaderÎntrebari';
import HeaderAsistenta from '../components/HeaderAsistenta';
import '../pages/Asistenta.css';

function Asistenta() {
    return (
        <div className='asistenta-page'>
            <HeaderÎntrebari />
            <HeaderAsistenta />
        </div>
    );
}

export default Asistenta;
