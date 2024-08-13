import { useState } from "react";
import DarkModeToggle from './DarkModeToggle';
import { Link } from 'react-scroll';
export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-background dark:bg-hitam fixed z-10">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a 
                            onClick={(e) => e.preventDefault()} 
                            className="cursor-pointer"
                        >
                            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold hover:text-kuning dark:hover:text-kuning dark:text-background">K</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-hitam dark:text-background rounded-md outline-none hover:text-kuning"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? "Close" : "Menu"}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-hitam hover:text-kuning dark:text-background dark:hover:text-kuning">
                            <Link to="about" smooth={true} duration={500}>
                              About
                            </Link>
                            </li>
                            <li className="text-hitam hover:text-kuning dark:text-background dark:hover:text-kuning">
                            <Link to="skill" smooth={true} duration={500}>
                              Skills & Tools
                            </Link>
                            </li>
                            <li className="text-hitam hover:text-kuning dark:text-background dark:hover:text-kuning">
                            <Link to="projects" smooth={true} duration={500}>
                              Projects
                            </Link>
                            </li>
                            <li className="text-hitam hover:text-kuning dark:text-background dark:hover:text-kuning">
                            <Link to="contact" smooth={true} duration={500}>
                              Contact
                            </Link>
                            </li>
                            <li className="text-hitam hover:text-kuning dark:text-background dark:hover:text-kuning">
                                <div><DarkModeToggle /></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
