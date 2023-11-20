import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import OptionBox from './OptionBox';
import Tours from './Tours';
import Button from './Button';
import Link from 'next/link';
import Footer from './Footer';

export default function Home() {

    //call server get data
    //save data to state

    let tours

    return (
        <>
            <Navbar />
            <Banner />
            <Link href="/place/create">
                <Button />
            </Link>

            <div id="main" className="flex">
                <div id="left" className="w-1/5">
                    <OptionBox />
                </div>
                <div id="right" className="w-4/5">
                    <Tours tours={tours} />
                </div>
            </div>

            <Footer />
        </>
    );
}