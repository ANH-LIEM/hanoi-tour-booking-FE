"use client";
import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import OptionBox from "./OptionBox";
import Tours from "./Tours";
import Button from "./Button";
import Link from "next/link";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import ChatButton from "../components/ChatButton";
import ChatComponent from "../components/ChatBox";

export default function Home() {
  //call server get data
  //save data to state

  const [places, setPlaces] = useState([]);

  const fetchData = async () => {
    try {
      const token = Cookies.get("accessToken"); // Lấy token từ cookie

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch("http://localhost:8080/location", {
        method: "GET",
        headers,
      });
      const jsonData = await response.json();
      console.log(jsonData);
      if (jsonData == null) {
        setPlaces([]);
      }
      setPlaces(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <Tours places={places} />
        </div>
      </div>
      <Footer />
    </>
  );
}
