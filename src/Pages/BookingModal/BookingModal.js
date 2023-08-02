import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ mobileBooking, setMobileBooking }) => {

    console.log(mobileBooking);
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.buyerName.value;
        const email = form.email.value;
        const mobileName = form.mobileName.value;
        const price = form.newPrice.value;
        const phone = form.phone.value;
        const place = form.place.value;
        const image = mobileBooking?.image

        console.log(buyerName, email, mobileName, price, phone, place);

        const bookings = {
            buyerName,
            buyerEmail: email,
            mobileName,
            price,
            phone,
            place,
            image
        }

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
            
        })
        
        setMobileBooking(null);
        toast.success('Your order booked successfully');
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
        
                        
                        <input name='buyerName' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" required />
                        <input name='email' type="text" defaultValue={user?.email} disabled className="input input-bordered w-full " required />
                        <input name='mobileName' type="text" defaultValue={mobileBooking?.productName} disabled className="input input-bordered w-full " required />
                        <input name='newPrice' type="text" defaultValue={mobileBooking?.newPrice} disabled className="input input-bordered w-full " required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='place' type="text" placeholder="Location" className="input input-bordered w-full" required />
                        
                        <input type="submit" value="SUBMIT" className="btn bg-gradient-to-r from-primary to-secondary text-black w-full " />
                    </form>
                </div>
            </div>
        </>

    );
};

export default BookingModal;