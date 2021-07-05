import React from 'react';
import HeaderÎntrebari from '../components/HeaderÎntrebari';
import AsistentaHeader from '../components/AsistentaHeader';
import AsistentaContentOne from '../components/AsistentaContentOne';
// import AsistentaContentTwo from '../components/AsistentaContentTwo';
import FooterContentFive from '../components/FooterContentFive';
import '../pages/Asistenta.css';

function Asistenta() {
    return (
        <div className='asistenta-page'>
            <HeaderÎntrebari />
            <AsistentaHeader />
            <AsistentaContentOne />
            {/* <AsistentaContentTwo /> */}
            <FooterContentFive />
        </div>
    );
}

export default Asistenta;
