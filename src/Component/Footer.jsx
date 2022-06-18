import React from 'react'
// react-icon
import { FaGithub,FaInstagram,FaFacebook } from 'react-icons/fa'


function Footer() {
  return (
    <>
      <div className='my-7 flex justify-center'>
        <a href="https://github.com/arsyaadi" target={'_blank'} rel="noreferrer"><FaGithub className='mx-3 text-4xl text-slate-800 hover:-translate-y-1 transition duration-300 hover:shadow-lg'/></a>
        <a href="https://www.instagram.com/arsyaadi/" target={'_blank'} rel="noreferrer"><FaInstagram className='mx-3 text-4xl text-slate-800 hover:-translate-y-1 transition duration-300 hover:shadow-lg'/></a>
        <a href="https://web.facebook.com/arsya.xkz/" target={'_blank'} rel="noreferrer"><FaFacebook className='mx-3 text-4xl text-slate-800 hover:-translate-y-1 transition duration-300 hover:shadow-lg'/></a>
      </div>
    </>
  )
}

export default Footer