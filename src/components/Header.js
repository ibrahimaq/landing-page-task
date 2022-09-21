import React, { useState } from "react";
import { Link } from "gatsby";

import Dropdown from "./Dropdown";

import {ChevronDownIcon} from '@heroicons/react/24/outline'

const Header = () => {

    const [isDropdown, setIsDropdown] = useState(false);

    const onMouseEnter = (e) => {
        setIsDropdown(true)
    }
    const onMouseLeave = (e) => {
        setIsDropdown(false)
    }

    return ( 
        <div className="h-20 px-32 w-full flex flex-row justify-between items-center">
           <Link to='/'>Logo</Link>

           <nav className="h-full">
            <ul className="flex flex-row space-x-8 ml-32 h-full">

                <li className="flex items-center">
                    <Link to='/' className="text-base leading-[26px] hover:text-[#FF6B6B] transition-colors duration-150 ease-in-out">Recipe box
                    </Link>
                </li>
                
                <li 
                    onMouseEnter={e => onMouseEnter(e)}
                    onMouseLeave={e => onMouseLeave(e)}
                    className='relative flex flex-row items-center hover:text-[#FF6B6B]'
                    >
                    <Link to='/' className="text-base leading-[26px] transition-colors duration-150 ease-in-out">Products</Link>
                    <ChevronDownIcon className={isDropdown? "w-6 h-6 ml-1 rotate-180 transition-transform duration-200" : 'w-6 h-6 ml-1 transition-transform duration-200'} />
                    
                    {isDropdown && <Dropdown />}
                </li>
                
                <li className="flex items-center">
                    <Link to='/' className="text-base leading-[26px] hover:text-[#FF6B6B] transition-colors duration-150 ease-in-out">About us
                    </Link>
                </li>

                <li className="flex items-center">
                    <Link to='/' className="text-base leading-[26px] hover:text-[#FF6B6B] transition-colors duration-150 ease-in-out">Visit us
                    </Link>
                </li>
            </ul>
           </nav>
           
           <div className="flex flex-row space-x-10 items-center">
            <Link to='/' className="text-base leading-[26px]">Login</Link>
            <Link to='/' className="border border-[#1D1D1D] py-1 px-2 uppercase font-light text-[10px] leading-[18px]">Create Account</Link>
            </div>
        </div>
     );
}
 
export default Header;