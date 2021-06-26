import React from 'react';
import Footer from './Footer';

function Layout(props) {
    return (
        <div>
            <Footer />
            {props.children}
        </div>
    )
}

export default Layout;
