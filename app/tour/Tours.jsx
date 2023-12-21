import React from 'react';
import Section from './Section'

function Tours(props) {
    const tours = props.tours
    const filterText = props.search
    const filteredTours = tours.filter(tour => tour.name.toLowerCase().includes(filterText.toLowerCase()));

    return (
        <div>
            {filteredTours.map((item, index) => (
                <Section key={index} title={item.name} desc={item.description} url={item.url} id={item.id} price={item.price}/>
            ))}
        </div>
    );
}

export default Tours;