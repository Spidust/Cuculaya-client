import React from 'react'

export default function Navbar() {
  return (
    <div className="Nav h-14 w-full flex justify-between bg-stone-800">
        <ul className="left-nav h-14 flex">
          <li className='ml-10'>
            <a href="/">
            <img src="/src/assets/img/logo.png" alt="Logo" className="w-32 h-14"/>
            </a>
          </li>
            <li className="no-underline text-white font-lg px-4 py-2 w-fit bg-stone-800 hover:bg-stone-700 flex items-center mx-2">
            <a href="/" >Home</a>
            </li>
            <li className="no-underline text-white font-lg px-4 py-2 w-fit bg-stone-800 hover:bg-stone-700 flex items-center">
                <a href='/photo'>Kho ảnh</a>
            </li>
        </ul>

        <ul className="right-nav flex justify-around w-52">
          <li className='no-underline text-white font-lg px-4 py-2 w-fit h-full bg-red-700 hover:bg-red-800 flex items-center justify-center w-24'><a href="/login">Register</a></li>
          <li className='no-underline text-white font-lg px-4 py-2 w-fit h-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center w-24'><a href="/register">Login</a></li>
        </ul>
    </div>
  )
}
