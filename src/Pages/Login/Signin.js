import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Signin = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signInError, setSignInError] = useState('');
    const [userType, setUserType] = useState('user');
    const navigate = useNavigate();
    const handleSignIn = data => {

        console.log(data);
        setSignInError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                
                console.log(user);
                toast.success('user created successfully');
                const userInfo = {
                    displayName: data.name,
                    userType: userType
                }
                user.userType = userType;
                console.log(userInfo);
                updateUser(userInfo)
                    .then(() => { 
                        saveUserInDatabase(data.name, data.email, userType)
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error);
                setSignInError(error.message);
            })

    }

    const saveUserInDatabase = (name, email, userType) => {
        const user = {name, email, userType};
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate('/')
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 w-96 mx-auto">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign in</h1>

                </div>
                <form onSubmit={handleSubmit(handleSignIn)}>


                    <div className="form-control">
                        <label className="label font-semibold"><span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered"
                            {...register("name", { required: 'Name is required' })} />
                        {errors.name && <p className='text-red-600 '>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered"
                            {...register("email", { required: 'Email address is required' })} />
                        {errors.email && <p className='text-red-600 '>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 8, message: 'Password must be 8 characters or longer' },
                                pattern: { value: /^(?=(.*[a-z]){1})(?=(.*[A-Z]){1})(?=(.*[0-9]){1})(?=(.*[!@#$%^&*()\-__+.]){1}).{8}$/, message: "Password must be strong" }
                            })} />
                        {errors.password && <p className='text-red-600 '>{errors.password?.message}</p>}
                        <label className="label">
                            <Link to='/login' href="#" className="label-text-alt link link-hover font-semibold  text-green-700">Already have an account? Login</Link>
                        </label>

                    </div>


                    {signInError && <p className='text-red-600'>{signInError}</p>}

                    <label className="label font-semibold"><span className="label-text">User Type</span></label>
                        <label className="radio mr-4">
                            <input
                                type="radio"
                                value="user"
                                checked={userType === 'user'}
                                onChange={() => setUserType('user')}
                            />
                            <span className="radio-mark"></span>
                            User
                        </label>
                        <label className="radio ml-4">
                            <input
                                type="radio"
                                value="seller"
                                checked={userType === 'seller'}
                                onChange={() => setUserType('seller')}
                            />
                            <span className="radio-mark"></span>
                            Seller
                        </label>


                    <button type="submit" className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-black w-full mt-8'>Sign In</button>

                </form>
            </div>
        </div>
    );
};

export default Signin;
