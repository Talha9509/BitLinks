"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    handleResize(); // Check on first load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
      <div className="logo font-bold text-lg">
        <Link href="/"><div className='text-xl md:text-2xl'>BitLink</div></Link>
        </div>
      <ul className='flex justify-center items-center gap-4'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <li className='flex gap-3'>
          {isLargeScreen && <Link href="/shorten" className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold' ><button>Try Now</button></Link>}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
