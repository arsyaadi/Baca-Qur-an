import React from 'react'
import Logo from '../Image/logo.webp'

function Content() {
  return (
    <div className='flex justify-center bg-gradient-to-b from-emerald-600 to-emerald-100 shadow-lg rounded-b-sm mt-[45px] xl:mt-12 pb-2'>
      <div className='container mx-auto mt-5'>
        <img src={Logo} alt="Al-quran" className='mx-auto w-28 md:w-44'/>
        <div className='text-center mb-4 text-slate-800 mt-5'>
          <h1 className='text-5xl mb-5 font-Nunito font-semibold'>Al-Qur'an Online</h1>
          <p className='text-xl font-quicksand w-auto mx-auto lg:w-1/2'>Baca Al-Qur'an secara Online dimanapun dan kapanpun saja dengan mudah.</p>
        </div>
      </div>
    </div>
  )
}

export default Content