import React from 'react';
import {Link} from 'react-router-dom';
import './FooterContentFive.css';

function FooterContentFive() {
    return (
        <div className='footer-content-five'>
            <nav>
                <ul>
                    <li>
                        <Link className='link'>
                            Conditii de utilizare
                        </Link>
                    </li>
                    <li>
                        <Link className='link'>
                            Confidentialitate
                        </Link>
                    </li>
                    <li>
                        <Link className='link'>
                            Preferite de cookie
                        </Link>
                    </li>
                    <li>
                        <Link className='link'>
                            Informatii legate de companie
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default FooterContentFive;
