import React from 'react'
import NavBar from '../components/NavBar'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <Link href="/customers">
        <button>
customers
        </button>

        </Link>
        
      </div>





    </div>
  )
}

export default page