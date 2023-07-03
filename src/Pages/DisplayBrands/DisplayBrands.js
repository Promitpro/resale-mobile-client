import { useState } from 'react';
import { useLoaderData} from 'react-router-dom';
import DisplayBrand from './DisplayBrand';
import BookingModal from '../BookingModal/BookingModal';

function DisplayBrands() {
  const [mobileBooking, setMobileBooking] = useState(null);
  const product = useLoaderData();
  console.log(product);

  return (
    <div className='w-full lg:w-2/3 my-10 mx-auto'>
      <h1 style={ {textShadow :'1px 1px  #CBD28F'}} className='text-center text-3xl font-bold text-primary mb-10'>Our Products from {product.name} brand</h1>
      
      {product.products.map((prod) => <DisplayBrand prod={prod} setMobileBooking={setMobileBooking} key={prod._id}></DisplayBrand>)}
      {
        mobileBooking && <BookingModal mobileBooking={mobileBooking} setMobileBooking={setMobileBooking}></BookingModal>
      }
    </div>
  );
}

export default DisplayBrands;
