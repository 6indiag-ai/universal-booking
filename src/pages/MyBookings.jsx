import React, {useEffect, useState} from 'react';
import api from '../api/mock';

export default function MyBookings(){
  const [mobile, setMobile] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{
    const m = localStorage.getItem('suvidha_user_mobile') || '';
    setMobile(m);
    if(m) api.getBookingsForUser(m).then(setList);
  },[]);

  function cancel(id){
    if(!confirm('Cancel booking (mock)?')) return;
    // Simple mock cancel: update localStorage list
    const all = JSON.parse(localStorage.getItem('suvidha_bookings')||'[]');
    const updated = all.map(b=> b.id===id? {...b, status:'Cancelled'}: b);
    localStorage.setItem('suvidha_bookings', JSON.stringify(updated));
    setList(prev=> prev.map(p=> p.id===id? {...p, status:'Cancelled'}: p));
  }

  if(!mobile) return <div className='alert alert-info'>Please <a href='/login'>login</a> to see your bookings (mock).</div>;

  return (
    <div>
      <h3>My Bookings</h3>
      {list.length===0 && <div className='alert alert-secondary'>No bookings yet.</div>}
      <div className='list-group'>
        {list.map(b=>(
          <div key={b.id} className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
              <strong>{b.providerName}</strong>
              <div className='small'>{b.date} {b.time} · {b.customerName} · Status: {b.status}</div>
              <div className='mt-1'>{b.note}</div>
            </div>
            <div>
              {b.status!=='Cancelled' && <button className='btn btn-sm btn-outline-danger' onClick={()=>cancel(b.id)}>Cancel</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}