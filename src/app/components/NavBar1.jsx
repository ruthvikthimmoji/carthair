import Link from 'next/link'
import React from 'react'
import { FaBackward, FaStepBackward } from 'react-icons/fa'
import { HiBackspace, HiLogout } from 'react-icons/hi'

const NavBar1 = () => {
    return (
        <div className="flex justify-between p-6">
            <Link href=".">
                <button className='border rounded-lg px-4 py-3 text-2xl  hover:bg-white hover:text-black '>
                 <FaBackward/>
                </button>
            </Link>
            <Link href="/">
                <button className='border rounded-lg px-4 py-3 text-2xl hover:bg-white hover:text-black'>
                    <HiLogout />
                </button>
            </Link>

        </div>
    )
}

export default NavBar1