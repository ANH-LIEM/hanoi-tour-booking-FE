// Tours.jsx
import React, { useState } from 'react';
import RatingInput from './RatingInput';
import OptionBox from "./OptionBox";
import Search from './Search';
import Section from './Section';

function Tours({ tours }) {
    const [selectedRating, setSelectedRating] = useState('全て');
    const [searchText, setSearchText] = useState('');

    const handleRatingChange = (range) => {
        setSelectedRating(range);
    };

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const filterTours = (tour) => {
        // Filter by rating
        if (selectedRating !== '全て') {
            const [min, max] = selectedRating.split(' - ').map(Number);
            const tourRating = Number(tour.rating);
            if (tourRating < min || (max !== undefined && tourRating > max)) {
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
        <div className="relative -mt-6">
            <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-10 w-4/6">
                <Search onSearch={handleSearch} />
            </div>
            <div id="main" className="flex">
                <div id="left" className="w-1/5 ml-10">
                    <RatingInput onPriceChange={handleRatingChange} />
                    <OptionBox />
                </div>
                <div id="right" className="w-4/5 mt-10">
                    {filteredTours.map((item, index) => (
                        <Section key={index} title={item.name} desc={item.description} url={item.url} id={item.id} rating={item.rating} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tours;
