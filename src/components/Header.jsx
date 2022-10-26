import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user,logout } = useContext(AuthContext)
    
    const handleLogout = () => {
        logout()
    }
    return (
        <div>
            
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link to="/" className="flex items-center">
            <img src="https://images-platform.99static.com//KlBLMX8dQrcq6hZGnxf5HSnG29I=/8x543:525x1060/fit-in/500x500/99designs-contests-attachments/123/123360/attachment_123360235" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Authentic Course</span>
        </Link>
        <div className="flex items-center">
                        <p className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">{user?.displayName}</p>
                        {
                            user?.photoURL ?
                         <div className="avatar mr-2 tooltip  tooltip-bottom"  data-tip={user?.displayName}>
                                    
                       <div className="avatar">
                        <div className="w-8 rounded">
                            <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                        </div>
                         </div> :
                        <FaUser className='mr-3'></FaUser>        
                        }
                {user?.uid ? 
                 <button onClick={handleLogout} className="btn btn-link btn-sm text-sm font-medium  normal-case bg-slate-500 text-white hover:text-black">Logout</button>
                :
                <Link to='/login'><button className='btn btn-link btn-sm text-sm font-medium  normal-case bg-slate-500 text-white hover:text-black'>Login</button></Link>
             }          
           
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="flex items-center justify-between">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <NavLink to="/" className='text-gray-900 dark:text-white hover:underline text-lg'   aria-current="page">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/course' className={({isActive})=> isActive ? ' dark:text-white hover:underline  bg-sky-900 text-white p-1 rounded-sm text-lg' : 'text-gray-900 dark:text-white hover:underline text-lg'}>Courses</NavLink>
                </li>
                <li>
                    <NavLink to='/blog' className={({isActive})=> isActive ? ' dark:text-white hover:underline  bg-sky-900 text-white p-1 rounded-sm text-lg' : 'text-gray-900 dark:text-white hover:underline text-lg'}>Blog</NavLink>
                </li>
                <li>
                    <NavLink to='/FAQ'className={({isActive})=> isActive ? ' dark:text-white hover:underline  bg-sky-900 text-white p-1 rounded-sm text-lg' : 'text-gray-900 dark:text-white hover:underline text-lg'}>FAQ</NavLink>
                </li>
            </ul>
                     
        </div>
                    
    </div>
     </nav>

        </div>
    );
};

export default Header;