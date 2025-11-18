import logoText from '../assets/logotext.png'
import Regist from './registration.jsx'

export default function Header() {
    return (
        <div className="w-full bg-[#1a1a1a] h-18 m-0 p-2 font-sans flex justify-between items-center">
            <img src={logoText} alt="Logo" className="w-32"/>
           <div className='text-white font-inter flex flex-row gap-4'>
            <a href="/" className='hover:bg-[#303030] cursor-pointer px-4 py-2 rounded'>Home</a>
            <a href="/class" className='hover:bg-[rgb(48,48,48)] cursor-pointer px-4 py-2 rounded'>Class</a>
            <a href="/membership" className='hover:bg-[#303030] cursor-pointer px-4 py-2 rounded'>Membership</a>
            <a href="/about" className='hover:bg-[#303030] cursor-pointer px-4 py-2 rounded'>About Us</a>
            </div>
            <Regist />
        </div>
    ) 
}