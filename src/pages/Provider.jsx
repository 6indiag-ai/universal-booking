import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/mock';

export default function Provider(){
  const { id } = useParams();
  const [provider,setProvider] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{ api.getProviderById(id).then(setProvider); },[id]);

  if(!provider) return <div>Loading...</div>;

  return (
    <div className='card'>
      <div className='card-body'>
        <h4>{provider.name}</h4>
        <p className='mb-1'><strong>Category:</strong> {provider.category}</p>
        <p className='mb-1'><strong>About:</strong> {provider.about}</p>
        <p className='mb-1'><strong>Price:</strong> ₹{provider.price}</p>
        <p className='mb-1'><strong>Rating:</strong> {provider.rating} ★</p>
        <div className='mt-3'>
          <button className='btn btn-primary me-2' onClick={()=>navigate('/book/'+provider.id)}>Book Now</button>
          <a className='btn btn-outline-secondary' href={'tel:+'+ (provider.phone||'')}>Call</a>
        </div>
      </div>
    </div>
  );
}