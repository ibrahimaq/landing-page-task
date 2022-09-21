import React from "react";
import { Link } from "gatsby";

import DropdownItems from './DropdownItems.json'

const Dropdown = () => {

    return ( 
        <ul className="absolute top-full -left-1/2 z-50 bg-white py-4 px-3 w-48 flex flex-col space-y-3 shadow-md rounded-md text-font-primary text-base leading-[26px]">

            {DropdownItems.Products.map(item => (
                <li key={item.id} className="hover:text-[#FF6B6B]">
                    <Link to='/' className="w-full block">
                        {item.name}
                    </Link>
                </li>
            ))}

        </ul>
     );
}
 
export default Dropdown;