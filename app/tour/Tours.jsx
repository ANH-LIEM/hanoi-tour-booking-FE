import React from 'react';
import Section from './Section'

function Tours(props) {
    return (
        <div>
            {props.tours.map((item, index) => (
                <Section key={index} title={item.name} desc={item.description} url={item.url} id={item.id} price={item.price}/>
            ))}
        </div>
    );
}

export default Tours;