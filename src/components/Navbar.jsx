import {useState} from 'react'
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants';


const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className='w-ful flex px-10 py-4 justify-between items-center navbar  ' >
      <img src="src\assets\logo.png" alt='banklogo' className='w-[180px] h-[75px]'/>
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
      {navLinks.map((nav, index) => 
      <li key = {nav.id} className={'font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' }>
        <a href={`#${nav.id}`}> {nav.title}</a>

      </li>
      )}
      </ul>

      <div className='sm:hidden flex justify-end items-center flex-1'>
        <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-conatian '
        onClick={() => settoggle((prev) => !prev)}/>
        <div className={`${toggle ? 'flex' : 'hidden' } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1 '>
      {navLinks.map((nav, index) => 
      <li key = {nav.id} className={'font-poppins font-normal cursor-pointer text-[16px] text-white mb-6' }>
        <a href={`#${nav.id}`}> {nav.title}</a>

      </li>
      )}
      </ul>
        </div>
      </div>
      </nav>
  )
}

export default Navbar
