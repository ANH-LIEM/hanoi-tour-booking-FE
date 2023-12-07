import React from 'react';
import Section from './Section'

function Tours(props) {
    return (
        <div>
            {props.foods.map((item, index) => (
                <Section key={index} title={item.name} desc={item.description} url={item.url} id={item.id} />
            ))}
        </div>
    );
}

export default Tours;