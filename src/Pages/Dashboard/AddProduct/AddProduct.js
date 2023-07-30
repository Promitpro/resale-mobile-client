import moment from 'moment/moment';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    console.log(user);
    const currentDate = moment().format('DD-MM-YYYY');
    const handleAddProduct = data => {
        
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success)
            {
                const addProduct = {
                    productName : data.productName,
                    oldPrice : data.oldPrice,
                    newPrice : data.newPrice,
                    condition : data.condition,
                    location : data.location,
                    phoneNumber : data.phoneNumber,
                    category : data.category,
                    purchased : data.purchased,
                    image : imgData.data.url,
                    time : currentDate,
                    email: user?.email,
                    displayName : user?.displayName

                
                }
                
                fetch('http://localhost:5000/sellingProducts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(addProduct)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${data.productName} is added successfully`);
                    navigate('/dashboard/myProducts');
                })
                
            }
            
        })
        
    }
    return (
        
        <div className='mb-12'>
            <h1 style={{ textShadow: '1px 1px  #CBD28F' }} className='text-center text-3xl font-bold text-primary my-12'>Add a Product</h1>

            <form className='w-96 mx-auto' onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form-control w-full  pb-3 pt-3">

                    <input type="text" className="input input-bordered input-secondary w-full "
                        {...register("productName", { required: 'Product name is required' })}
                        placeholder="Product" />
                    {errors.productName && <p className='text-red-600 font-semibold pt-3' >{errors.productName?.productName}</p>}
                </div>
                <div className="form-control w-full  pb-3">

                    <input type="text" className="input input-bordered input-secondary w-full "
                        {...register("oldPrice", { required: 'Old price is required' })}
                        placeholder="old price" />
                    {errors.price && <p className='text-red-600 font-semibold pt-3' >{errors.oldPrice?.message}</p>}
                </div>
                <div className="form-control w-full  pb-3">

                    <input type="text" className="input input-bordered input-secondary w-full "
                        {...register("newPrice", { required: 'New price is required' })}
                        placeholder="new price" />
                    {errors.newPrice && <p className='text-red-600 font-semibold pt-3' >{errors.newPrice?.message}</p>}
                </div>
                <div className="form-control w-full  pb-3">

                    <select
                        {...register("condition")}
                        className="select border-secondary w-full ">
                        <option disabled selected className='text text-slate-400' required>Your phone's condition</option>
                        <option>excellent</option>
                        <option>good</option>
                        <option>fair</option>

                    </select>

                </div>
                <div className="form-control w-full  pb-3">

                    <input type="text" className="input input-bordered input-secondary w-full "
                        {...register("location", { required: 'Location is required' })}
                        placeholder="location" />
                    {errors.location && <p className='text-red-600 font-semibold pt-3' >{errors.location?.message}</p>}
                </div>
                <div className="form-control w-full  pb-3">

                    <input type="text" className="input input-bordered input-secondary w-full "
                        {...register("phoneNumber", { required: 'Phone Number is required' })}
                        placeholder="Phone Number" />
                    {errors.phoneNumber && <p className='text-red-600 font-semibold pt-3' >{errors.phoneNumber?.message}</p>}
                </div>
                <div className="form-control w-full  pb-3">

                    <select
                        {...register("category")}
                        className="select border-secondary w-full ">
                        <option disabled selected>Pick your phone's category</option>
                        <option>Realme</option>
                        <option>Redmi</option>
                        <option>Samsung</option>

                    </select>

                </div>
                <div className="form-control w-full  pb-3">

                    <select
                        {...register("purchased")}
                        className="select border-secondary w-full ">
                        <option disabled selected>Phone purchased</option>
                        <option>1 month</option>
                        <option>2 month</option>
                        <option>3 month</option>
                        <option>4 month</option>
                        <option>5 month</option>
                        <option>6 month</option>
                        <option>7 month</option>
                        <option>8 month</option>
                        <option>9 month</option>
                        <option>10 month</option>
                        <option>11 month</option>
                        <option>12 month</option>
                        <option>13 month</option>
                        <option>14 month</option>
                        <option>15 month</option>
                        <option>16 month</option>
                        <option>17 month</option>
                        <option>18 month</option>
                        <option>19 month</option>
                        <option>20 month</option>
                        <option>21 month</option>
                        <option>22 month</option>
                        <option>23 month</option>
                        <option>24 month</option>


                    </select>

                </div>
                <div className="form-control w-full  pb-3">

                    <input type="text" className="input input-bordered input-secondary w-full "
                        {...register("description")}
                        placeholder="Description" />
                    {errors.description && <p className='text-red-600 font-semibold pt-3' >{errors.phoneNumber?.message}</p>}
                </div>
                <div className="form-control w-full  pb-3 pt-3">
                    <label className="label"><span className="label-text font-semibold">Product photo</span></label>
                    <input type="file" className="input input-bordered input-secondary w-full "
                        {...register("image", { required: 'Photo is required' })}
                        placeholder="" />
                    {errors.image && <p className='text-red-600 font-semibold pt-3' >{errors.image?.message}</p>}
                </div>


                <input className='btn bg-gradient-to-r from-primary to-secondary text-black w-full mt-3' type="submit" value="Add Product" />

            </form>

        </div>
        
    );
};

export default AddProduct;

