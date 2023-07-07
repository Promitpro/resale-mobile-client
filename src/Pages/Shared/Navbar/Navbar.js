import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/icon.png'
import { AuthContext } from '../../../contexts/AuthProvider';


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogout = () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.log(error))
  }
  const menuitems = <React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
    <li><Link to='/about'>About</Link></li>
    {
      user?.userType ==='seller' && <li><Link to='/addProduct'>Add Product</Link></li> && <li><Link to='/myProducts'>Add Product</Link></li>
    }
    {
      user?.uid ? <li><button onClick={handleLogout}>Log out</button></li> : <li><Link to='/login'>Login</Link></li>
    }
    
    
  </React.Fragment>
  return (
    <div className="navbar bg-gradient-to-r from-primary to-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
              {menuitems}
          </ul>
        </div>
        <img src={img} className='w-10 rounded-full ml-4' alt="" />
        <Link to='/' className="btn btn-ghost normal-case text-xl">Mobile Island</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {menuitems}
        </ul>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} alt='' />
        </div>
      </label>
      </div>
      
    </div>
  );
};

export default Navbar;