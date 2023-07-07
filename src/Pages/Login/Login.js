import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import img from '../../assets/google-logo.png'

const Login = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const {signIn, googleSignIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    

    const handleSigninWithGoogle = () => {
        googleSignIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            const currentUser = {
                email: user.email,
                           
            }
            
            console.log(currentUser);
            saveUserInDatabase(user?.email, user?.displayName, user.userType='user')
            navigate('/');
        })
        .catch(error => console.log(error))
    }
    
    const handleLogin = (data) =>{
        console.log(data);
        setLoginError('')
        
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error);
            setLoginError(error.message);
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
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200 w-96 mx-auto">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control">
                        <label className="label font-semibold"><span className="label-text">Email</span></label>
                        <input  type="email" className="input input-bordered" 
                        {...register("email", {required: 'Email address is required'})}/>
                        {errors.email && <p className='text-red-600 '>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold"><span className="label-text">Password</span></label>
                        <input  type="password" className="input input-bordered" 
                        {...register("password", {
                            required: 'Password is required',
                            minLength:{value: 6, message: 'Password must be 6 characters or longer'}
                            })}/>
                        {errors.password && <p className='text-red-600 '>{errors.password?.message}</p>}
                        <label className="label">
                            <Link to='/signin' href="#" className="label-text-alt link link-hover font-semibold text-green-700">Don't have an account? signin</Link>
                        </label>

                    </div>


                    {loginError && <p className='text-red-600 '>{loginError}</p>}
                    <button type="submit" className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-black w-full my-8'>Login</button>
                    <button onClick={handleSigninWithGoogle} className="btn btn-outline w-full  font-semibold mb-5">Sign in with <img className='h-5 w-25' src={img} alt="" /></button>
                </form>
            </div>
        </div>
    );
};

export default Login;