import './dropdown.css';
import { Link } from 'react-router-dom';
import { FiChevronDown } from "react-icons/fi";
import type { DropdownProps } from './Header';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

function Dropdown({ links }:DropdownProps) {
    const renderedLinks = links.map((link)=>{
        return (
            <li key={link.title}>
                <Link to={`/projects/${link.path}`} className="flex px-6 py-4 hover:bg-gray-50">{link.title}</Link>
            </li>
        )
    })
    return (
        <div className="relative parent">
            <div className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2">
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



