import React from 'react';
import HeaderÎntrebari from '../components/HeaderÎntrebari';
import ÎntrebariFreceventeContentOne from '../components/ÎntrebariFreceventeContentOne';
import ÎntrebariFrecventeContentTwo from '../components/ÎntrebariFrecventeContentTwo';
import ÎntrebariFrecventeContentThree from '../components/ÎntrebariFrecventeContentThree';
import ÎntrebariFrecventeContentFour from '../components/ÎntrebariFrecventeContentFour';

function ÎntrebariFrecevente() {
    return (
        <div>
            <HeaderÎntrebari />
            <ÎntrebariFreceventeContentOne />
            <ÎntrebariFrecventeContentTwo />
            <ÎntrebariFrecventeContentThree />
            <ÎntrebariFrecventeContentFour />
        </div>
    );
}

export default ÎntrebariFrecevente;
