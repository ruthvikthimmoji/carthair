import React from 'react'
import { FaArrowAltCircleRight, FaEject } from 'react-icons/fa'
import { HiArrowRight, HiLogin, HiLogout } from 'react-icons/hi'
import NavBar1 from '../components/NavBar1'

const LoginPage = () => {
  return (
    <div>
      <NavBar1/>
    <div className='h-screen flex flex-col justify-center items-center'>
      <form className='border rounded-lg shadow-lg shadow-white px-8 pt-6 pb-8 mb-4'>
        <h1 className='flex flex-col justify-center items-center text-2xl font-bold p-4 m-4'>
          LOGIN
        </h1>
        <div className=' flex flex-col justify-center p-4'>
          <label htmlFor='email' className='font-serif p-2 '>
            Email</label>
          <input type='email' id='email' className='border-b-2 bg-transparent  py-2 px-5' />
        </div>
        <div className=' flex flex-col justify-center p-4'>
          <label htmlFor='password' className='font-serif p-2'>
            password</label>
          <input type='password' id='password' className=' border-b-2 bg-transparent py-2 px-3' />
        </div>
        <div class="rounded flex justify-start">
          <label class="flex items-center p-4">
            <input type="checkbox" class="form-checkbox text-blue-600" />
            <span className='font-thin text-xs p-2'>
               Remember me</span>
          </label>
        </div>
        <div className='flex flex-col  justify-center items-center border rounded-lg hover:bg-transparent hover:text-white  py-2 px-3 bg-white text-black'>
          <button className='text-2xl' >
            <HiLogin/>
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default LoginPage