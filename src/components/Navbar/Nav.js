import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div>
            <ul className='flex justify-around' >
                <li>
                    <Link href="/" >Home</Link>
                </li>
                <li>
                    <Link href="/about" >About</Link>
                </li>
                <li>
                    <Link href="/contact" >Contact</Link>
                </li>
                <li>
                    <Link href="/services" >Services</Link>
                </li>
            </ul>
        </div>
      
    </nav>
  )
}

export default Nav
