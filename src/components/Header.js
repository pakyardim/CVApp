import React from 'react';
import Cvpic from '../assets/cv1.png'

const Header = () => {
    return (
        <header>
            <div className="head-left">
                <img src={Cvpic} alt="cv" />
                <div>CV CREATOR</div>
            </div>
            <div className="head-right">
                <div><a href="#" className="head">Contact</a></div>
            </div>
        </header>
    )
}


export default Header;