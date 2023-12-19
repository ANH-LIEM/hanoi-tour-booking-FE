'use client';
import React, { useState } from 'react';

const PriceInput = ({ onPriceChange }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedRange, setSelectedRange] = useState('全て');
    const priceRanges = ['全て', '0 - 25', '25 - 50', '50 - 75', '75 - 100', '100以上'];

    const handleFilterClick = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (range) => {
        setSelectedRange(range);
        setShowOptions(false);
        onPriceChange(range);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md float-left inline-block ml-5 mt-20 border border-gray-300 relative">
            <h1 className="text-2xl font-semibold mb-4">価格帯</h1>
            <div className="flex items-center relative">
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={selectedRange}
                    readOnly
                    className="mt-1 p-2 w-full border rounded-md cursor-pointer"
                    placeholder="Select a range"
                />
                <button
                    type="button"
                    onClick={handleFilterClick}
                    className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 flex items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={`h-4 w-4 transform ${showOptions ? 'rotate-180' : 'rotate-0'}`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {showOptions && (
                    <div className="absolute mt-12 bg-white border rounded-md shadow-md w-full">
                        {priceRanges.map((range) => (
                            <div
                                key={range}
                                onClick={() => handleOptionClick(range)}
                                className="block p-2 text-gray-800 hover:bg-gray-200 w-full text-left cursor-pointer"
                            >
                                {range}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PriceInput;
