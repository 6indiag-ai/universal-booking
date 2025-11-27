import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [mobile,setMobile] = useState('');
  const navigate = useNavigate();

  function submit(e){
    e.preventDefault();
    if(!mobile){ alert('Enter mobile'); return; }
    // Mock login: save mobile in localStorage as "suvidha_user_mobile"
    localStorage.setItem('suvidha_user_mobile', mobile);
    alert('Mock login successful');
    navigate('/');
  }

  return (
    <div className='card'>
      <div className='card-body'>
        <h4>Login / Mock OTP</h4>
        <form onSubmit={submit}>
          <div className='mb-3'><label className='form-label'>Mobile</label><input className='form-control' value={mobile} onChange={e=>setMobile(e.target.value)} /></div>
          <button className='btn btn-primary' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}