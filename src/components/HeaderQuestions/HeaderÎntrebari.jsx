import React from 'react';
import Logo from "../../assets/images/logo.png";
import '../../components/HeaderQuestions/HeaderÎntrebari.css';
function HeaderÎntrebari() {
    return (
        <div className='container-intrebari'>
            <img src={Logo} alt="" />
            <div className='buttons'>
                <button className='btn btn-dark'>Aboneaza-te la Netflix</button>
                <button className='btn btn-danger'>Conectare</button>
            </div>
        </div>
    );
}

export default HeaderÎntrebari;
