import { Link } from "react-router-dom"
export default function Regist() {
    return (
        <div className='text-white flex gap-3'>
                <Link to="/login" className='hover:bg-[#303030] px-4 py-2 rounded'>Login</Link>
                <Link to="/register" className='w-max h-auto bg-[#ff1f1f] hover:bg-[#ff6161] px-4 py-2 rounded'>Sign Up</Link>
        </div>
    )
}