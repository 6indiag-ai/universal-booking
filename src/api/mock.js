// Simple mock API using static data + localStorage for bookings
const sampleCategories = [
  {id: 'doctor', name: 'Doctor', icon: '🩺'},
  {id: 'electrician', name: 'Electrician', icon: '🔌'},
  {id: 'taxi', name: 'Taxi', icon: '🚕'},
  {id: 'tutors', name: 'Tutors', icon: '📚'},
  {id: 'catering', name: 'Catering', icon: '🍽️'}
];

const sampleProviders = [
  {id: 'p1', name: 'Dr. Anil Sharma', category: 'doctor', distance_km: 1.2, price: 500, rating: 4.7, about: 'MBBS, 10 years experience', photos: []},
  {id: 'p2', name: 'Ravi Electricians', category: 'electrician', distance_km: 0.8, price: 300, rating: 4.3, about: 'Home electrician services', photos: []},
  {id: 'p3', name: 'Quick Taxi Pvt', category: 'taxi', distance_km: 2.5, price: 15, rating: 4.5, about: 'City taxi service', photos: []},
];

export function getCategories(){ return Promise.resolve(sampleCategories); }
export function getProvidersByCategory(cat){ return Promise.resolve(sampleProviders.filter(p=>p.category===cat)); }
export function getProviderById(id){ return Promise.resolve(sampleProviders.find(p=>p.id===id)); }

// Bookings stored in localStorage under "suvidha_bookings"
function loadBookings(){ try{ return JSON.parse(localStorage.getItem('suvidha_bookings')||'[]') }catch(e){ return [] } }
function saveBookings(list){ localStorage.setItem('suvidha_bookings', JSON.stringify(list)); }

export function createBooking(booking){
  const list = loadBookings();
  booking.id = 'b_' + Date.now();
  booking.status = 'Pending';
  list.unshift(booking);
  saveBookings(list);
  return Promise.resolve(booking);
}

export function getBookingsForUser(mobile){
  const list = loadBookings();
  return Promise.resolve(list.filter(b=>b.customerMobile===mobile));
}

export function getAllBookings(){
  return Promise.resolve(loadBookings());
}

export default { getCategories, getProvidersByCategory, getProviderById, createBooking, getBookingsForUser, getAllBookings };