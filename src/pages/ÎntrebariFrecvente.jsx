import React from 'react';
import HeaderÎntrebari from '../components/HeaderQuestions/HeaderÎntrebari';
import ÎntrebariFreceventeContentOne from '../components/ÎntrebariFrecvente/ÎntrebariFreceventeContentOne';
import ÎntrebariFrecventeContentTwo from '../components/ÎntrebariFrecvente/ÎntrebariFrecventeContentTwo';
import ÎntrebariFrecventeContentThree from '../components/ÎntrebariFrecvente/ÎntrebariFrecventeContentThree';
import ÎntrebariFrecventeContentFour from '../components/ÎntrebariFrecvente/ÎntrebariFrecventeContentFour';
import ÎntrebariFrecventeContentFive from '../components/ÎntrebariFrecvente/ÎntrebariFrecventeContentFive';

function ÎntrebariFrecevente() {
    return (
        <div>
            <HeaderÎntrebari />
            <ÎntrebariFreceventeContentOne />
            <ÎntrebariFrecventeContentTwo />
            <ÎntrebariFrecventeContentThree />
            <ÎntrebariFrecventeContentFour />
            <ÎntrebariFrecventeContentFive />
        </div>
    );
}

export default ÎntrebariFrecevente;
