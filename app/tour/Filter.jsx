'use client';
import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";

const Filter = ({ updateTours, price }) => {

  const [priceValue, setPriceValue] = useState('');
  const [sortOrder, setSortOrder] = useState('Asc');

  const handleFilter = () => {
    let apiUrl = `http://localhost:8080/tour/sortByPrice${sortOrder === 'Asc' ? 'Asc' : 'Desc'}`;

    const validatedPrice = priceValue > 0 ? priceValue : '';

    if (validatedPrice) {
      apiUrl += `?price=${validatedPrice}`;
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
        updateTours(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    handleFilter();
  }, [priceValue, sortOrder]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md float-left inline-block ml-5 mt-20 border border-gray-300">
      <h1 className="text-2xl font-semibold mb-4">価格帯</h1>
      <div className="flex items-center">
        <input
          type="number"
          id="price"
          name="price"
          value={priceValue}
          onChange={(e) => setPriceValue(Math.max(0, parseFloat(e.target.value)))}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="¥ 0 ~ 1万"
        />
        <button
          type="button"
          onClick={() => {
            setSortOrder('Asc');
            handleFilter();
          }}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 flex items-center"
        >
          ↑
        </button>
        <button
          type="button"
          onClick={() => {
            setSortOrder('Desc');
            handleFilter();
          }}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 flex items-center"
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default Filter;
