"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const Detail = ({ id }) => {
  const [registered, setRegistered] = useState(false)

  
  const fetchDataTour = async () => {
    try {
      const token = Cookies.get("accessToken");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch(`http://localhost:8080/tour/${id}`, {
        method: "GET",
        headers,
      });
      const jsonData = await response.json();
      console.log(jsonData);
      //console.log(transformedLocations)
      setTour(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const peopleOnTour = async () => {
    try {
      const token = Cookies.get("accessToken");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch(`http://localhost:8080/tour/people/${id}`, {
        method: "GET",
        headers,
      });
      const jsonData = await response.json();
      setPeople(jsonData);
      //console.log(jsonData)
      //console.log(transformedLocations)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [tour, setTour] = useState([]);
  const [people, setPeople] = useState([]);

  const [isBook, setIsBook] = useState(false);

  const contractState = async (e) => {
    try {
      e.preventDefault();
      const token = Cookies.get('accessToken');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch(`http://localhost:8080/tour/book/${id}`, {
        method: 'GET',
        headers,
      });

      const jsonData = await response.json();
      setIsBook(jsonData);
      //console.log(jsonData)
      if (jsonData == true) {
        setRegistered(true)
      } else {
        contract(e)
        //window.location.href = `http://localhost:3000/tour/payment/${id}`
      }

      //console.log(jsonData)
      //console.log(transformedLocations)      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataLocation = async () => {
    try {
      const token = Cookies.get("accessToken");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch(
        `http://localhost:8080/locationsOnTour/${id}`,
        {
          method: "GET",
          headers,
        }
      );
      const jsonData = await response.json();
      console.log(jsonData);
      //console.log(transformedLocations)
      setLocations(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const contract = async (e) => {
    const token = Cookies.get("accessToken"); // Lấy token từ cookie
    e.preventDefault();
    //console.log("Submit form", formValue)
    // after call api
    fetch("http://localhost:8080/contract", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // Add any additional headers if needed
      },
      body: JSON.stringify({
        "tourId": `${id}`,
      }),

      
    }).then(() => {
      setRegistered(true);
      peopleOnTour();
    });




    // redirect here
  };

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchDataTour();
    fetchDataLocation();
    peopleOnTour();
  }, []);

  // useEffect(() => {
  //   peopleOnTour()
  // }, [isRegistered])

  const [showMore, setShowMore] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/H%E1%BB%93_T%C3%A2y_ho%C3%A0ng_h%C3%B4n_-_NKS.jpg",
    "https://static.vinwonders.com/production/ho-hoan-kiem-2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/L%C4%83ng_B%C3%A1c_-_NKS.jpg/1200px-L%C4%83ng_B%C3%A1c_-_NKS.jpg",
    "https://static.vinwonders.com/production/van-mieu-quoc-tu-giam-1.jpg",
    "https://ik.imagekit.io/tvlk/blog/2022/03/hoang-thanh-thang-long-1.jpg",
    "https://static.vinwonders.com/production/bao-tang-ha-noi-01.jpg",
  ];

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const tourInfo = {
    fee: "5000¥",
    numberOfPeople: 10,
    time: "2日",
    location: "ハノイ",
    status: "利用可能",
  };

  const comments = [
    {
      user: "ハリー・マクギー",
      comment: "このツアーは素晴らしいです",
      time: "2023-11-22 12:30:00",
      avatar:
        "https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/12/7/190ec53b-bcaa-4a99-9b9f-4db695901c89-17019224659581173761427.jpg",
    },
    {
      user: "クリスティアーノ・ロナウド",
      comment: "41歳は人生の頂点",
      time: "2023-11-22 13:45:00",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Cristiano_Ronaldo_2018_%28cropped%29.jpg",
    },
    {
      user: "ライオネル・メッシ",
      comment: "GOAT!!!",
      time: "2023-11-22 14:20:00",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Messi_vs_Nigeria_2018.jpg",
    },
  ];

  const handleShowMore = () => {
    setShowMore(true);
  };



  return (
    <form className="max-w-2xl mx-auto mt-4">
      <div className="space-y-4">
        <div className="border border-gray-300 p-4 rounded-md mx-auto float-center mt-4">
          <label
            htmlFor="tour-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            <b className="text-lg">{tour.name}</b>
          </label>
          <div className="image-section relative overflow-x-auto">
            <button
              type="button"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded-full"
              onClick={handlePrevImage}
            >
              &lt;
            </button>
            <button
              type="button"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 rounded-full"
              onClick={handleNextImage}
            >
              &gt;
            </button>
            <div className="flex">
              <img
                src={images[currentIndex]}
                alt={`Tour Image ${currentIndex + 1}`}
                className="mr-2"
              />
            </div>
          </div>
        </div>

        <div className="border border-gray-300 p-4 rounded-md mx-auto center mt-6">
          <label
            htmlFor="tour-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            <b className="text-lg">情報</b>
          </label>
          <br />
          <div className="tour-info-section">
            <ul>
              <li className='mb-2'>
                <b className='mr-48'>料金</b> {tour.price}
              </li>
              <li className='mb-2'>
                <b className='mr-48'>人数</b> {tour.maxCapacity}
              </li>
              <li className='mb-2'>
                <b className='mr-48'>時間</b> {tour.due}
              </li>
              {/* <li className='mb-2'>
                <b className='mr-48'>場所</b> {tourInfo.location}
              </li> */}
              <li className='mb-2'>
                <b className='mr-48'>状態</b> {tour.status}
              </li>
              <li className='mb-2'>
                <ul>
                  <b >場所</b>
                  {locations.map((location) => (
                    <Link
                      className="text-blue-500"
                      key={location.id}
                      href={`/place/detail//${location.id}`}
                    >
                      <li className='ml-56 mb-1'>{location.name}</li>
                    </Link>
                  ))}
                </ul>
              </li>
              <li className='mb-2'>
                <b className='mr-32'>注文する人数</b> {people}
              </li>
            </ul>
            <div className="flex items-center justify-center p-2 rounded-md mt-4">
              {
                registered ? 
                  <div> 予約した。 </div>
                  : 
                  <button onClick={(e) => {
                    contractState(e);
                  }}>
                    <div className="p-2 bg-white rounded-md shadow-md inline-block mt-2 border border-gray-300">
                      <b>予約</b>
                    </div>
                  </button>
              }
            </div>
          </div>
        </div>

        <div className="border border-gray-300 p-4 rounded-md mx-auto center mt-6">
          <label
            htmlFor="tour-schedule"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            <b className="text-lg">詳しいスケジュール</b>
          </label>
          <br />
          <div className="tour-schedule-section">
            <p>{tour.description}</p>
            {/* <p>
              [2]
              ユニークなハノイ料理を提供する人気レストランでランチをお楽しみください。
            </p>
            <p>
              [3]
              引き続きハノイ博物館を訪問して、街の歴史と文化をより深く理解してください。
            </p>
            <p>
              [4]
              旅の終わりは、あらゆる年齢層の観光客が楽しめるゲームやエンターテイメントがたくさんあるヴィンワンダーズ
              ハノイで終わります。
            </p> */}
          </div>
        </div>

        <div className="border border-gray-300 p-4 rounded-md mx-auto center mt-6">
          <label
            htmlFor="tour-comments"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            <b className="text-lg">コメント</b>
          </label>
          <div className="tour-comments-section">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="flex items-start border-b border-gray-300 py-4"
              >
                <div className="flex-shrink-0">
                  <img
                    src={comment.avatar}
                    alt={`Avatar ${comment.user}`}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <span className="font-bold text-sm ml-2">
                    @{comment.user}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    {comment.time}
                  </span>
                  <p className="text-gray-800 ml-2">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Detail;
