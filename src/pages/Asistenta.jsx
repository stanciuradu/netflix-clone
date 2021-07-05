import React from 'react';
import HeaderÎntrebari from '../components/HeaderÎntrebari';
import AsistentaHeader from '../components/AsistentaHeader';
import '../pages/Asistenta.css';

function Asistenta() {
    return (
        <div className='asistenta-page'>
            <HeaderÎntrebari />
            <AsistentaHeader />
        </div>
    );
}

export default Asistenta;
