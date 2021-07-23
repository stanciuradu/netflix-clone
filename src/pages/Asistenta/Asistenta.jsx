import React from 'react';
import HeaderÎntrebari from '../../components/HeaderQuestions/HeaderÎntrebari';
import AsistentaHeader from '../../components/AsistentaHeader/AsistentaHeader';
import AsistentaContentOne from '../../components/AsistentaContent/AsistentaContentOne';

import FooterContentFive from '../../components/FooterContent/FooterContentFive';
import '../../pages/Asistenta/Asistenta.css';

function Asistenta() {
    return (
        <div className='asistenta-page'>
            <HeaderÎntrebari />
            <AsistentaHeader />
            <AsistentaContentOne />
            <FooterContentFive />
        </div>
    );
}

export default Asistenta;
