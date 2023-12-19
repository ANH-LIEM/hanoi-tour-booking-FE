"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Tours from "./Tours";
import Button from "./Button";
import Link from "next/link";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import ChatComponent from "../components/ChatBox";
import ChatButton from "../components/ChatButton";

export default function Home() {
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    try {
      const token = Cookies.get("accessToken"); // Lấy token từ cookie

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch("http://localhost:8080/tour", {
        method: "GET",
        headers,
      });

      const jsonData = await response.json();
      console.log(jsonData);
      if (jsonData == null) {
        setTours([]);
      }
      setTours(jsonData);
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
      <Link href="/tour/create">
        <Button />
      </Link>

      <div id="main" className="flex">
        <div id="right" className="w-4/5">
          <Tours tours={tours} />
        </div>
      </div>
      <Footer />
    </>
  );
}
