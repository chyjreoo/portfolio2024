import './header.css';
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";

export interface DropdownProps {
    toggleMenu: ()=>void;
    links: {
        title: string;
        path: string;
    }[];
}

function Header() {
    const [changeHeader, setChangeHeader] = useState(false);
    const [expandMobileMenu, setExpandMobileMenu] = useState(false);
    
    const projectLinks = [
        { title: '迷你TODOLIST', path: 'todolist' },
        { title: 'POKEBOOK', path: 'pokebook' },
        { title: '過去作品', path: 'pinwork' }
    ];

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setChangeHeader(document.documentElement.scrollTop > 50)
            );
        }
    }, []);

    const toggleMenu = ()=>{
        setExpandMobileMenu(!expandMobileMenu);
    }
    
    return (
        <header className={`navbar fixed w-full z-50 transition-colors duration-500 ${changeHeader? 'bg-white':'bg-transparernt'}`}>
            <div className="container mx-auto px-4 md:px-4 xl:px-0">
                <nav className="flex items-center justify-between h-20 ">
                    <h1 className="text-xl text-gray-800 font-bold">
                        <Link to="/">2024 Portfolio</Link>
                    </h1>
                    <div className={`menu-list flex sm:items-center ${expandMobileMenu?'active':''}`}>
                        <ul className="flex items-start sm:items-center flex-col sm:flex-row text-gray-700 w-full md:w-auto">
                            <li className="py-4 md:py-0 px-2 md:px-0">
                                <Link onClick={toggleMenu} className='w-full md:w-auto' to="/">Home</Link>
                            </li>
                            <li className="md:ml-6 md:py-0">
                                <Dropdown toggleMenu={toggleMenu} links={projectLinks} />
                            </li>
                            <li className='md:ml-6 py-4 md:py-0 px-2 md:px-0'>
                                <a onClick={toggleMenu} className='w-full md:w-auto' href="mailto:chyjreoo@gmail.com"><FiMail /></a>
                            </li>
                        </ul>
                    </div>
                    <div className={`hamburger ${expandMobileMenu?'clicked':''}`}  onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
        
    )
}

export default Header;