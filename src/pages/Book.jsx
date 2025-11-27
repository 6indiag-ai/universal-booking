import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/mock';

export default function Book(){
  const { id } = useParams();
  const [provider,setProvider] = useState(null);
  const [date,setDate] = useState('');
  const [time,setTime] = useState('');
  const [name,setName] = useState('');
  const [mobile,setMobile] = useState('');
  const [note,setNote] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{ api.getProviderById(id).then(setProvider); },[id]);

  function submit(e){
    e.preventDefault();
    if(!mobile || !name){ alert('Name and mobile required'); return; }
    const booking = {
      providerId: id,
      providerName: provider?.name || '',
      date, time, customerName: name, customerMobile: mobile, note
    };
    api.createBooking(booking).then(b=>{
      alert('Booking created (mock). ID: '+b.id);
      navigate('/my-bookings');
    });
  }

  if(!provider) return <div>Loading...</div>;

  return (
    <div className='card'>
      <div className='card-body'>
        <h4>Book: {provider.name}</h4>
        <form onSubmit={submit}>
          <div className='mb-3'><label className='form-label'>Name</label><input className='form-control' value={name} onChange={e=>setName(e.target.value)} /></div>
          <div className='mb-3'><label className='form-label'>Mobile</label><input className='form-control' value={mobile} onChange={e=>setMobile(e.target.value)} /></div>
          <div className='row'>
            <div className='col-md-6 mb-3'><label className='form-label'>Date</label><input className='form-control' type='date' value={date} onChange={e=>setDate(e.target.value)} /></div>
            <div className='col-md-6 mb-3'><label className='form-label'>Time</label><input className='form-control' type='time' value={time} onChange={e=>setTime(e.target.value)} /></div>
          </div>
          <div className='mb-3'><label className='form-label'>Note</label><textarea className='form-control' value={note} onChange={e=>setNote(e.target.value)} /></div>
          <div className='d-flex gap-2'><button className='btn btn-primary' type='submit'>Confirm Booking</button><button className='btn btn-outline-secondary' type='button' onClick={()=>navigate(-1)}>Cancel</button></div>
        </form>
      </div>
    </div>
  );
}