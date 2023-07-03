import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ mobileBooking, setMobileBooking }) => {

    console.log(mobileBooking);
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.buyerName.value;
        const email = form.email.value;
        const mobileName = form.mobileName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const place = form.place.value;

        console.log(buyerName, email, mobileName, price, phone, place);

        const bookings = {
            buyerName,
            buyerEmail: email,
            mobileName,
            price,
            phone,
            place
        }
        console.log(bookings);
        setMobileBooking(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
        
                        
                        <input name='buyerName' type="text" defaultValue={user?.name} disabled className="input input-bordered w-full" required />
                        <input name='email' type="text" defaultValue={user?.email} disabled className="input input-bordered w-full " required />
                        <input name='mobileName' type="text" defaultValue={mobileBooking?.name} disabled className="input input-bordered w-full " required />
                        <input name='price' type="text" defaultValue={mobileBooking?.newPrice} disabled className="input input-bordered w-full " required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='place' type="text" placeholder="Place" className="input input-bordered w-full" required />
                        
                        <input type="submit" value="SUBMIT" className="btn bg-gradient-to-r from-primary to-secondary text-black w-full " />
                    </form>
                </div>
            </div>
        </>

    );
};

export default BookingModal;