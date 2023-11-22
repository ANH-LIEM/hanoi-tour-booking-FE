import React from "react";
import Navbar from "../../Navbar";
import Detail from "./Detail";

const TourDetail = ({ params }) => {
  return (
    <>
      <Navbar />
      <Detail id={params.id} />
    </>
  );
};

export default TourDetail;
