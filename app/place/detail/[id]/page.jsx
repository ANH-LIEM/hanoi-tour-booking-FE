import React from 'react';
import Navbar from '../../Navbar';
import Detail from './Detail'
import EditButton from './EditButton';
import Link from 'next/link';

const PlaceDetail = ({params}) => {
  return (
    <>
      <Navbar />
      <Detail id={params.id}/>
      <Link href={`/place/edit/${params.id}`}><EditButton /></Link>
    </>
  )
}

export default PlaceDetail