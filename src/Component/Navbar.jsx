import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
      <div className="py-2 px-2 md:px-3 bg-emerald-600 shadow-xl fixed top-0 w-full z-10">
      <nav className="flex justify-between">
      <Link to={'/'} className='text-base md:ml-5 px-2 py-1 md:text-2xl font-quicksand font-semibold text-zinc-200  hover:text-zinc-50 '>Al-Qur'an Online</Link>
      <Link to={'/'} className='text-base md:text-2xl px-2 py-1 md:mr-5 font-quicksand font-semibold text-zinc-200  hover:text-zinc-50'>Daftar Surah</Link>
      </nav>
    </div>
   
  )
}

export default Navbar