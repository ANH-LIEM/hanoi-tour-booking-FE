import React from 'react';
import Link from 'next/link';

function Button() {
    return (
        <>
            <Link href='/tour'>
            <button className="mt-6 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 float-right  transform -translate-x-1/2 -translate-y-1/2">
                支払う
            </button>
            </Link>
        </>
    )
}
export default Button