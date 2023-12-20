import React from 'react';
import Section from './Section'

function Tours(props) {
    return (

        <div className="relative -mt-6">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 w-4/6">
                <Search onSearch={handleSearch} />
            </div>
            <div id="main" className="flex">

                <div id="left" className="w-1/5 text-center relative ml-10">
                    <button
                        onClick={handleToggle}
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                    >
                        スイッチ
                    </button>
                    {filterType === 'rating' ? (
                        <RatingInput onRatingChange={handleRatingChange} />
                    ) : (
                        <PriceInput onPriceChange={handlePriceChange} />
                    )}
                    <OptionBox />
                </div>
                <div id="right" className="w-4/5 mt-10">
                    {filteredTours.map((item, index) => (
                        <Section
                            key={index}
                            title={item.name}
                            desc={item.description}
                            url={item.url}
                            id={item.id}
                            rating={item.rating}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>

        <div>
            {props.tours.map((item, index) => (
                <Section key={index} title={item.name} desc={item.description} url={item.url} id={item.id}/>
            ))}

        </div>
    );
}

export default Tours;