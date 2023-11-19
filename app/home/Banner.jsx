import React from 'react';
import Search from './Search';

export default function Banner() {
    return (
        <>
            <div className=" relative banner mb-10">
                <img
                    src="https://statics.vinpearl.com/lang-chu-tich-ho-chi-minh-2_1685366073.jpg"
                    alt="Banner"
                    className="w-full h-64 object-cover"
                />
                
                <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/6">
                    <Search />                
                </div>       
            </div>           
        </>
    );
}