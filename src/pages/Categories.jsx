import React, {useEffect, useState} from 'react';
import api from '../api/mock';
import { Link } from 'react-router-dom';

export default function Categories(){
  const [cats,setCats] = useState([]);
  useEffect(()=>{ api.getCategories().then(setCats); },[]);
  return (
    <div>
      <h3>All Categories</h3>
      <div className='row g-3'>
        {cats.map(c=>(
          <div className='col-6 col-md-3' key={c.id}>
            <Link to={'/category/'+c.id} className='card p-3 text-center text-decoration-none text-dark'>
              <div style={{fontSize:28}}>{c.icon}</div>
              <div className='mt-2'>{c.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}