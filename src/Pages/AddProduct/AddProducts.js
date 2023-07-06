import React from 'react';

const AddProducts = () => {
    return (
        <div>
            <form  className='grid grid-cols-1 gap-3'>


                <input name='buyerName' type="text"   className="input input-bordered w-full" required />
                <input name='email' type="text"  className="input input-bordered w-full " required />
                <input name='mobileName' type="text"   className="input input-bordered w-full " required />
                <input name='price' type="text"   className="input input-bordered w-full " required />
                <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                <input name='place' type="text"  placeholder="Location"  className="input input-bordered w-full" required />

                <input type="submit" value="SUBMIT" className="btn bg-gradient-to-r from-primary to-secondary text-black w-full " />
            </form>
        </div>
    );
};

export default AddProducts;