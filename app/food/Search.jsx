'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Search({ onSearch }) {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="flex items-center bg-white shadow-md p-2 rounded border border-gray-500 w-full">
      <input
        type="text"
        placeholder="名前、位置、…"
        className="border-none outline-none px-3 py-1 flex-grow"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
        onClick={handleSearch}
      >
        サーチ
      </button>
    </div>
  );
}

export default Search;
