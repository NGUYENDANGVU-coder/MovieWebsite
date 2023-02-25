import React from 'react';
import './header-catolog.scss'
import image from '../../assets/img/img';
const HeaderCatalog = ({category}) => {
    if(category==='movie'){
        category='Movie Series'
    }else{
        category='TV Series'
    }
    return (
        <div  className="page-header" style={{backgroundImage: `url(${image.headerCatalog})`}}>
            <h2 className='page-header__title'>{category}</h2>
        </div>
    );
}

export default HeaderCatalog;
