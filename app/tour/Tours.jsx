import React from 'react';
import Section from './Section'

function Tours(props) {
    return (

        <div className="relative -mt-6">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 w-4/6">
                <Search onSearch={handleSearch} />
            </div>

            <div id="main" className="flex">
                <div id="left" className="w-1/5 ml-10">
                    <PriceInput onPriceChange={handlePriceChange} />
                    <OptionBox />
                </div>

                <div id="right" className="w-4/5 mt-10">
                    {filteredTours.map((item, index) => (
                        <Section key={index} title={item.name} desc={item.description} url={item.url} id={item.id} price={item.price} />
                    ))}
                </div>
            </div>

        <div>
            {props.tours.map((item, index) => (
                <Section key={index} title={item.name} desc={item.description} url={item.url} id={item.id} price={item.price}/>
            ))}

        </div>

    );
}

export default Tours;