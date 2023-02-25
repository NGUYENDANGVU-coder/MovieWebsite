import React, { useEffect, useState } from 'react';
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const Cast = ({ category, id }) => {
    const [cast, setCast] = useState([]);
    useEffect(() => {
        const getCast = async () => {
            const res = await tmdbApi.credits(category, id)
            setCast(res.data.cast.slice(0, 5))
        }
        getCast()
    }, [category, id]);
    return (
        <div className='casts'>
            {
                cast.map((item, index) => {
                    return (
                        <div className="casts__item" key={index}>
                            <img className="casts__item__img" src={apiConfig.imgW500(item.profile_path)} alt="profile" />
                            <p className="casts__item__name">{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cast;
