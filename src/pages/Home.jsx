import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/mock';

export default function Home(){
  const [cats,setCats] = useState([]);
  const [providers,setProviders] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{ api.getCategories().then(setCats); api.getProvidersByCategory('doctor').then(setProviders); },[]);

  return (
    <div>
      <div className='d-flex align-items-center mb-4'>
        <input className='form-control form-control-lg me-3' placeholder='Search services, e.g. plumber, doctor...' />
        <button className='btn btn-outline-secondary'>Nearby</button>
      </div>

      <h4>Categories</h4>
      <div className='row g-3 mb-4'>
        {cats.map(c=>(
          <div className='col-6 col-md-3' key={c.id}>
            <Link to={'/category/'+c.id} className='card p-3 text-center text-decoration-none text-dark'>
              <div style={{fontSize:28}}>{c.icon}</div>
              <div className='mt-2'>{c.name}</div>
            </Link>
          </div>
        ))}
      </div>

      <h4>Top Services</h4>
      <div className='row g-3'>
        {providers.map(p=>(
          <div className='col-md-4' key={p.id}>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>{p.name}</h5>
                <p className='card-text mb-1'><strong>{p.category}</strong> · {p.distance_km} km · ₹{p.price}</p>
                <p className='mb-2'>Rating: {p.rating} ★</p>
                <div className='d-flex gap-2'>
                  <button className='btn btn-primary' onClick={()=>navigate('/book/'+p.id)}>Book Now</button>
                  <Link to={'/provider/'+p.id} className='btn btn-outline-secondary'>Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}