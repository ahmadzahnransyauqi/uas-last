import logoText from '../assets/logotext.png'
import Regist from './registration.jsx'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="w-full bg-[#1a1a1a] h-18 m-0 p-2 font-sans flex justify-between items-center">
            <img src={logoText} alt="Logo" className="w-32"/>
           <div className='text-white font-inter flex flex-row gap-4'>
            <Link to="/" className='hover:bg-[#303030] cursor-pointer px-4 py-2 rounded'>Home</Link>
            <Link to="/class" className='hover:bg-[rgb(48,48,48)] cursor-pointer px-4 py-2 rounded'>Class</Link>
            <Link to="/membership" className='hover:bg-[#303030] cursor-pointer px-4 py-2 rounded'>Membership</Link>
            <Link to="/aboutus" className='hover:bg-[#303030] cursor-pointer px-4 py-2 rounded'>About Us</Link>
            </div>
            <Regist />
        </div>
    ) 
}