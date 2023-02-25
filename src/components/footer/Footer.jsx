import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import image from '../../assets/img/img';
const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${image.bgFooter})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={image.logoHeader} alt="" />
                        <Link to="/">tMovies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Investor Relations</Link>
                        <Link to="/">Privacy</Link>
                        <Link to="/">Speed Test</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Help Center</Link>
                        <Link to="/">Jobs</Link>
                        <Link to="/">Cookie Preferences</Link>
                        <Link to="/">Legal Notices</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Account</Link>
                        <Link to="/">Ways to Watch</Link>
                        <Link to="/">Corporate Information</Link>
                        <Link to="/">Only on Netflix</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
            <div className='footer__overlay'></div>
        </div>
    );
}

export default Footer;
