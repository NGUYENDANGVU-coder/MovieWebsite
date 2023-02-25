import React, { useEffect, useRef } from 'react';
import './header.scss'
import image from '../../assets/img/img';
import { Link, useLocation } from 'react-router-dom';
import Search from '../search/Search';

const Header = () => {
    const headerNav = [
        {
            display: 'Home',
            path: '/',
        },
        {
            display: 'Movies',
            path: '/movie',
        },
        {
            display: 'TV Series',
            path: '/tv',
        },
    ]
    const headerRef = useRef();
    const location = useLocation();
    const match = headerNav.findIndex(e => e.path === location.pathname)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const show = window.scrollY;
            if (show > 200) {
                headerRef.current.classList.add('box-shadow')
            } else {
                headerRef.current.classList.remove('box-shadow')
            }
        })
    }, [])
    return (
        <div ref={headerRef} className='header '>
            <div className="header__wrapper container">
                <div className='header__wrapper__infor'>
                    <div className="logo">
                        <Link to="/">
                            <div className='logo__header'>
                                <img src={image.logoHeader} alt="logo" />
                                <p>vMovies</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Search />
                    </div>
                </div>
                <div>
                    <ul className="header__nav">
                        {
                            headerNav.map((item, index) => (
                                <li key={index} className={`${index === match ? 'active' : ''}`}>
                                    <Link to={item.path}>{item.display}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
