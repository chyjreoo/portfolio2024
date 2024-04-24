import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";

// export interface dropdownLinkProps{
//     title: string;
//     path: string;
// }

export interface DropdownProps {
    links: {
        title: string;
        path: string;
    }[];
}

function Header() {
    const [changeHeader, setChangeHeader] = useState(false);
    
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
    
    return (
        <header className={`fixed w-full z-50 transition-colors duration-500 ${changeHeader? 'bg-white':'bg-transparernt'}`}>
            <div className="container mx-auto">
                <nav className="flex items-center justify-between h-20 ">
                    <h1 className="text-xl text-gray-800 font-bold">
                        <Link to="/">2024 Portfolio</Link>
                    </h1>
                    <div className="flex items-center">
                        <ul className="flex items-center space-x-6">
                            <li className="text-gray-700">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-gray-700">
                                <Dropdown links={projectLinks} />
                            </li>
                            <li>
                                <a href="mailto:chyjreoo@gmail.com"><FiMail /></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        
    )
}

export default Header;