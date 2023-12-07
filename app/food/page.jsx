'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import OptionBox from './OptionBox';
import Filter from './Filter';
import Tours from './Tours';
import Button from './Button';
import Link from 'next/link';
import Footer from './Footer';
import Cookies from 'js-cookie';

export default function Home() {

    const [foods, setFoods] = useState([])

    const updateFoods = (newData) => {
        setFoods(newData);
    };

    const fetchData = async () => {
        try {
            const token = Cookies.get('accessToken'); // Lấy token từ cookie

            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            };

            const response = await fetch('http://localhost:8080/food', {
                method: 'GET',
                headers,
            });


            const jsonData = await response.json();
            console.log(jsonData)
            if (jsonData == null) {
                setFoods([])
            }
            setFoods(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            <Banner />
            <Link href="/food/create">
                <Button />
            </Link>

            <div id="main" className="flex">
                <div id="left" className="w-1/5">
                    <Filter updateFoods={updateFoods} />
                    <OptionBox />
                </div>
                <div id="right" className="w-4/5">
                    <Tours foods={foods} />
                </div>
            </div>

            <Footer />
        </>
    );
}