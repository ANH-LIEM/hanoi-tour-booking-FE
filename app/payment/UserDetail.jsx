'use client'
import { UserContext } from '@/app/context/UserContext'
import React, { useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const UserDetail = () => {

    const { user } = useContext(UserContext);

    //console.log(user)
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

      const [tour, setTour] = useState([]);

      useEffect(() => {
        fetchDataTour();
      }, []);


    return (
        <>
            <div className='float-left w-1/3 ml-32 mt-8' >
                <p className='mb-6'>個人情報と連絡先情報を入力します</p>

                <div className="tour-info-section">
                    <ul>
                        <li className='mb-2'>
                            <b className='mr-6'>料金</b> {user.name}
                        </li>
                        <li className='mb-2'>
                            <b className='mr-6'>人数</b> {user.email}
                        </li>
                        <li className='mb-2'>
                            <b className='mr-6'>時間</b> {user.phone}
                        </li>

                        {/* <li className='mb-2'>
                            <b className='mr-6'>ツアー名</b> {tour.name}
                        </li>
                        <li className='mb-2'>
                            <b className='mr-6'>料金 </b> {tour.price}
                        </li> */}
                    </ul>

                    <ul className='mt-6'>
                        

                    </ul>

                </div>
            </div>

        </>
    )
}

export default UserDetail