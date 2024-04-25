import './dropdown.css';
import { Link } from 'react-router-dom';
import { FiChevronDown } from "react-icons/fi";
import type { DropdownProps } from './Header';
import { useState } from 'react';


function Dropdown({ links, toggleMenu }:DropdownProps) {
    const [showDropdown, setShowDropdown] = useState(false);
    const triggerToggleMenu = ()=>{
        toggleMenu();
        setShowDropdown(false);
    }
    const renderedLinks = links.map((link)=>{
        return (
            <li key={link.title}>
                <Link onClick={triggerToggleMenu} to={`/portfolio2024/projects/${link.path}`} className="flex px-6 py-3 md:py-4 hover:bg-gray-50">{link.title}</Link>
            </li>
        )
    })
    const toggleShowDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    return (
        <div className={`relative parent ${showDropdown?'active':''}`}>
            <div onClick={toggleShowDropdown} className='flex justify-between md:inline-flex md:p-4 items-center hover:bg-gray-50 space-x-2 py-4 md:py-0 px-2 md:px-0 w-full md:w-auto'>
                <span>Projects</span>
                <FiChevronDown />
            </div>
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
                { renderedLinks }
            </ul>
        </div>
    )

}
export default Dropdown;



