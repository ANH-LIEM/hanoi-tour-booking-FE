'use client';
import React from 'react'
import Navbar from '../Navbar'
import CreateForm from './CreateForm'

const CreateLocation = () => {

  const handleSubmitForm = (e, formValue) => {
    e.preventDefault();
    console.log("Submit form", formValue)
    // after call api
    fetch('http://localhost:8080/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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

  return (
    <>
        <Navbar />
        <CreateForm submitForm={handleSubmitForm}/>
    </>
  )
}

export default CreateLocation