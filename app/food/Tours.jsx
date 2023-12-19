import React, { useState } from 'react';
import Search from './Search';
import RatingInput from './RatingInput';
import PriceInput from './PriceInput';
import OptionBox from './OptionBox';
import Section from './Section';

function Foods({ tours }) {
    const [filterType, setFilterType] = useState('rating');
    const [selectedRating, setSelectedRating] = useState('全て');
    const [selectedPrice, setSelectedPrice] = useState('全て');
    const [searchText, setSearchText] = useState('');

    const handleToggle = () => {
        setFilterType(filterType === 'rating' ? 'price' : 'rating');
    };

    const handleRatingChange = (range) => {
        setSelectedRating(range);
    };

    const handlePriceChange = (range) => {
        setSelectedPrice(range);
    };

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const filterTours = (tour) => {
        if (filterType === 'rating') {
            if (selectedRating !== '全て') {
                const [min, max] = selectedRating.split(' - ').map(Number);
                const tourRating = Number(tour.rating);
                if (tourRating < min || (max !== undefined && tourRating > max)) {
                    return false;
                }
            }
        } else {
            if (selectedPrice !== '全て') {
                const [min, max] = selectedPrice.split(' - ').map(Number);
                const tourPrice = Number(tour.price);
                if (tourPrice < min || (max !== undefined && tourPrice > max)) {
                    return false;
                }
            }
        }

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
        </div>
    );
}

export default Foods;
