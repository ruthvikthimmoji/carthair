import React from 'react'
import { HiLogout } from 'react-icons/hi'

const NavBar = () => {
  return (
    <div className="flex justify-between p-6">
    <h1 className="text-3xl font-bold">
        CARTHAIR
    </h1>
    <button className="border px-4 py-2 rounded-lg">
        <HiLogout/></button>
</div>
  )
}

export default NavBar