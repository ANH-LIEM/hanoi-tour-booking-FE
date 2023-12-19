'use client';
import React, { useState } from 'react';

const RatingInput = ({ onRatingChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedRating, setSelectedRating] = useState('全て');
  const ratingValues = ['全て', '0 - 1', '1 - 2', '2 - 3', '3 - 4', '4 - 5'];

  const handleFilterClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (rating) => {
    setSelectedRating(rating);
    setShowOptions(false);
    onRatingChange(rating);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md text-center inline-block ml-5 mt-20 border border-gray-300 relative">
      <h1 className="text-2xl font-semibold mb-4">評価</h1>
      <div className="flex items-center relative">
        <input
          type="text"
          id="rating"
          name="rating"
          value={selectedRating}
          readOnly
          className="mt-1 p-2 w-full border rounded-md cursor-pointer"
          placeholder="Select a rating"
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
            {ratingValues.map((rating) => (
              <div
                key={rating}
                onClick={() => handleOptionClick(rating)}
                className="block p-2 text-gray-800 hover:bg-gray-200 w-full text-left cursor-pointer"
              >
                {rating}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingInput;
