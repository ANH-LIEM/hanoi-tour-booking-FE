// Tours.jsx
import React, { useState } from 'react';
import PriceInput from './PriceInput';
import OptionBox from "./OptionBox";
import Search from './Search';
import Section from './Section';

function Tours({ tours }) {
    const [selectedPrice, setSelectedPrice] = useState('全て');
    const [searchText, setSearchText] = useState('');

    const handlePriceChange = (range) => {
        setSelectedPrice(range);
    };

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const filterTours = (tour) => {
        // Filter by price
        if (selectedPrice !== '全て') {
            const [min, max] = selectedPrice.split(' - ').map(Number);
            const tourPrice = Number(tour.price);
            if (tourPrice < min || (max !== undefined && tourPrice > max)) {
                return false;
            }
        }

        // Filter by search text
        if (searchText) {
            const tourTitle = tour.name.toLowerCase();
            if (!tourTitle.includes(searchText.toLowerCase())) {
                return false;
            }
        }

        return true;
    };

    const filteredTours = tours.filter(filterTours);

    return (
        <div id="main" className="flex">
            <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-10 w-4/6">
                <Search onSearch={handleSearch} />
            </div>
            <div id="left" className="w-1/5">
                <PriceInput onPriceChange={handlePriceChange} />
                <OptionBox />
            </div>
            <div id="right" className="w-4/5">
                {filteredTours.map((item, index) => (
                    <Section key={index} title={item.name} desc={item.description} url={item.url} id={item.id} price={item.price} />
                ))}
            </div>
        </div>
    );
}

export default Tours;
