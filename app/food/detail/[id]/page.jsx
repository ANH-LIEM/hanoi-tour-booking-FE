import React from "react";
import Navbar from "../../Navbar";
import Detail from "./Detail";
import EditButton from "./EditButton"
import Link from 'next/link';
import Footer from '../../../components/Footer';

const TourDetail = ({ params }) => {
  return (
    <>
      <Navbar />
      <Detail id={params.id} />
      <Link href={`/food/edit/${params.id}`}><EditButton /></Link>
      <Footer />
    </>
  );
};

export default TourDetail;
