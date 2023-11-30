'use client';

import React, { useState } from 'react';
import Navbar from '../../Navbar';
import EditForm from './EditForm';
import Cookies from 'js-cookie';

const TourEdit = () => {

  const handleSubmitForm = (e, formValue,id) => {
    const token = Cookies.get('accessToken'); // Lấy token từ cookie
    e.preventDefault();
    console.log("Submit form", formValue)
    // after call api

    fetch(`http://localhost:8080/locations/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        // Add any additional headers if needed
      },
      body: JSON.stringify(formValue),
    })
      .then(response => response.json())
      .then(data => {

        window.location.href = '/place'
        // Handle the response data as needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors
      });

    // redirect here 
  }

  const deleteItem = (e,formValue,id) => {
    const token = Cookies.get('accessToken'); // Lấy token từ cookie
    fetch(`http://localhost:8080/locations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        // Add any additional headers if needed
      },
      // You can include a request body if necessary
    })
      .then(response => {
        if (response.ok) {
          window.location.href = '/place'
          // Handle the success scenario
        } 
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors
      });
  }


  return (
    <>
      <Navbar />
      <EditForm submitForm={handleSubmitForm} deleteItem={deleteItem}/>
    </>
  )
}

export default TourEdit