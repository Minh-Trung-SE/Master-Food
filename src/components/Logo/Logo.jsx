import React from 'react';
import logo from '../../assets/images/logo.png'

function Logo() {
    return (
        <div className="w-fit h-fit">
            <img src={logo} alt="Logo" className="object-cover block aspect-square h-11"/>
        </div>
    );
}

export default Logo;