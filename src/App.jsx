import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './components/Header';

export default function App(){
  return (
    <div>
      <Header />
      <main className='container my-4'>
        <Outlet />
      </main>
      <footer className='bg-light py-3 text-center'>
        <div className='container'>
          <small>© Suvidha — Booking Portal Demo V3</small>
        </div>
      </footer>
    </div>
  );
}