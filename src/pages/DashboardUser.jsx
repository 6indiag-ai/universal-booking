import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardUser(){
  return (
    <div>
      <h3>User Dashboard (mock)</h3>
      <ul>
        <li><Link to='/my-bookings'>My Bookings</Link></li>
        <li>Profile (mock)</li>
        <li>Wallet (mock)</li>
      </ul>
    </div>
  );
}