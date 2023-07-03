import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayBrand from './DisplayBrand';
import BookingModal from '../BookingModal/BookingModal';

function DisplayBrands() {
  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState([]);
  const [mobileBooking, setMobileBooking] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filteredProduct = data.find((product) => product.ID === id);
        console.log(filteredProduct);
        if (filteredProduct) {
          setProducts(filteredProduct.products);
        }
      })
      .catch((error) => {
        console.log('Error fetching products:', error);
      });
  }, [id]);

  return (
    <div className='w-full lg:w-2/3 my-10 mx-auto'>
      <h1 style={ {textShadow :'1px 1px  #CBD28F'}} className='text-center text-3xl font-bold text-primary mb-10'>Our Products</h1>
      
      {products.map((product) => <DisplayBrand product={product} setMobileBooking={setMobileBooking} key={product.id}></DisplayBrand>)}
      {
        mobileBooking && <BookingModal mobileBooking={mobileBooking} setMobileBooking={setMobileBooking}></BookingModal>
      }
    </div>
  );
}

export default DisplayBrands;
