import React from 'react';
import './Footer.css'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="row text-center w-75 m-auto">
                <a href='https://www.facebook.com/' target="_blank" className="col Flogo">
                    <BsFacebook id='facebook' />
                </a>
                <a href='https://instagram.com/' target="_blank" className="col Flogo">
                    <BsInstagram id='insta' />
                </a>
                <a href='https://twitter.com/' target="_blank" className="col Flogo">
                    <FaTwitter id='twitter' />
                </a>
                <a href='https://twitter.com/' target="_blank" className="col Flogo">
                    <ImLinkedin id='linkedin' />
                </a>
                <a href='https://www.youtube.com/' target="_blank" className="col Flogo">
                    <BsYoutube id='youtube' />
                </a>
            </div>
        </div>
    );
};

export default Footer;