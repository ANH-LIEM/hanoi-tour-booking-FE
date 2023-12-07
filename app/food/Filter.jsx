'use client';
import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";

const Filter = ({ updateFoods }) => {
  const [priceValue, setPriceValue] = useState('');
  const [ratingValue, setRatingValue] = useState('');
  const [activeTab, setActiveTab] = useState('price');
  const [sortOrderPrice, setSortOrderPrice] = useState('Asc');
  const [sortOrderRating, setSortOrderRating] = useState('Asc');

  const handleFilter = () => {
    let apiUrl = `http://localhost:8080/food/sortBy${activeTab === 'price' ? 'Price' : 'Rating'}${activeTab === 'price' ? sortOrderPrice : sortOrderRating}`;

    const validatedValue = activeTab === 'price' ? priceValue : ratingValue;

    if (validatedValue) {
      apiUrl += `?${activeTab}=${validatedValue}`;
    }

    const token = Cookies.get('accessToken');

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateFoods(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    handleFilter();
  }, [priceValue, ratingValue, sortOrderPrice, sortOrderRating, activeTab]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md float-left inline-block ml-5 mt-20 border border-gray-300">
      <div className="flex items-center mb-4">
        <div
          className={`cursor-pointer p-1 rounded-md ${activeTab === 'price' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('price')}
        >
          <h1 className="text-2xl font-semibold mb-4">価格帯</h1>
        </div>
        <div
          className={`cursor-pointer p-1 rounded-md ml-2 ${activeTab === 'rating' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('rating')}
        >
          <h1 className="text-2xl font-semibold mb-4">評価範囲</h1>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          id="value"
          name="value"
          value={activeTab === 'price' ? priceValue : ratingValue}
          onChange={(e) => {
            const value = Math.max(activeTab === 'price' ? 0 : 0, parseFloat(e.target.value));
            if (activeTab === 'price') {
              setPriceValue(value);
            } else {
              setRatingValue(value);
            }
          }}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder={activeTab === 'price' ? '¥ 0 ~ 1万' : '0 ~ 5 スター'}
        />
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => {
              if (activeTab === 'price') {
                setSortOrderPrice('Asc');
              } else {
                setSortOrderRating('Asc');
              }
              handleFilter();
            }}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 flex items-center"
          >
            ↑
          </button>
          <button
            type="button"
            onClick={() => {
              if (activeTab === 'price') {
                setSortOrderPrice('Desc');
              } else {
                setSortOrderRating('Desc');
              }
              handleFilter();
            }}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 flex items-center"
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;