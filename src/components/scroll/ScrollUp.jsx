import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import './scrollUp.scss'
const ScrollUp = () => {
    const scrollUp=useRef();
    const handleUp=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    useEffect(() => {
        const handleShow=()=>{
            let scrollY=window.scrollY;
            if(scrollY>400){
                scrollUp.current.classList.add('show')
            }else{
                scrollUp.current.classList.remove('show')
            }
        }
        window.addEventListener('scroll',handleShow)
        return () => {
            window.removeEventListener('scroll',handleShow)
        };
    }, []);
    return (
        <button ref={scrollUp} onClick={handleUp} className='btn-up'>
            <i>
                <FontAwesomeIcon icon={faUpLong}/>
            </i>
        </button>
    );
}

export default ScrollUp;
