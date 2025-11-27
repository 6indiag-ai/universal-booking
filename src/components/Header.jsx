import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate = useNavigate();
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white border-bottom'>
      <div className='container'>
        <Link className='navbar-brand fw-bold' to='/'>Suvidha</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#nav'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='nav'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/categories'>Categories</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/my-bookings'>My Bookings</Link></li>
          </ul>
          <div className='d-flex gap-2'>
            <button className='btn btn-outline-primary' onClick={()=>navigate('/login')}>Login</button>
            <button className='btn btn-primary' onClick={()=>navigate('/dashboard/user')}>Dashboard</button>
          </div>
        </div>
      </div>
    </nav>
  );
}