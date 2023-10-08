import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between h-[60px] bg-slate-800 opacity-60'>
{/* logo */}
        <div>
        </div>
        
        <div className='flex flex-row justify-center'>
            <ul className='flex flex-row items-center justify-center gap-5 mr-8 text-xl text-neutral-100'>
                    <li className='list-none font-sans'>Home</li>
                    <li className='list-none font-sans'>Map</li>
                    <li className='list-none font-sans'>Donation</li>
                    <li className='list-none font-sans'>About Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar