import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import DisplayBrand from './DisplayBrand';
import BookingModal from '../BookingModal/BookingModal';

function DisplayBrands() {
  const {brand} = useParams();
  const [brandData, setBrandData] = useState([]);
  const [mobileBooking, setMobileBooking] = useState(null);

  

  useEffect(() => {
    fetch(`http://localhost:5000/brands/${brand}`)
    .then(res => res.json())
    .then(data => {
      
      setBrandData(data);
    })
  },[])

  return (
    <div className='w-full lg:w-2/3 my-10 mx-auto'>
      <h1 style={ {textShadow :'1px 1px  #CBD28F'}} className='text-center text-3xl font-bold text-primary mb-10'>Our Products from {brand} brand</h1>
      
      {brandData.map((bdata) => <DisplayBrand bdata={bdata} setMobileBooking={setMobileBooking} key={bdata._id}></DisplayBrand>)}
      {
        mobileBooking && <BookingModal mobileBooking={mobileBooking} setMobileBooking={setMobileBooking}></BookingModal>
      }
    </div>
  );
}

export default DisplayBrands;
