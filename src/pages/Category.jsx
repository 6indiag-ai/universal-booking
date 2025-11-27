import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/mock';

export default function Category(){
  const { slug } = useParams();
  const [providers,setProviders] = useState([]);

  useEffect(()=>{ api.getProvidersByCategory(slug).then(setProviders); },[slug]);

  return (
    <div>
      <h3 className='text-capitalize'>{slug.replace('-', ' ')}</h3>
      <div className='list-group'>
        {providers.map(p=>(
          <div key={p.id} className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
              <strong>{p.name}</strong>
              <div className='small'> {p.distance_km} km · Rating {p.rating} · ₹{p.price}</div>
            </div>
            <div>
              <Link to={'/book/'+p.id} className='btn btn-sm btn-primary me-2'>Book</Link>
              <Link to={'/provider/'+p.id} className='btn btn-sm btn-outline-secondary'>Contact</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}