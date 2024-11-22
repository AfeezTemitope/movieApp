import { useState } from 'react';
import LogoIcon from '../assets/LogoIcon.png'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <nav className="bg-purple-700 text-white flex justify-between items-center sticky top-0 w-full h-16 px-4">
            <div className="flex items-center">
                <img
                    className="h-10"
                    src={LogoIcon}
                    alt="MovieDB Logo"
                />
                <h1 className="ml-2 text-lg">MovieDB</h1>
            </div>
          
            <button
                className="md:hidden p-2 ml-auto focus:outline-none"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
            </button>

            {/* Menu items */}
            <div
                className={`md:flex md:justify-end space-x-5 md:ml-auto ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-purple-700 md:static md:bg-transparent z-10`}>
                <p className="p-2 hover:bg-purple-600">Free Movies</p>
                <p className="p-2 hover:bg-purple-600">Hub Movies</p>
                <p className="p-2 hover:bg-purple-600">Nice Movie</p>
            </div>
        </nav>
    );
};

export default NavBar;

// import { useState } from 'react';
//
// const NavBar = () => {
//     // State to manage the visibility of the menu
//     const [isOpen, setIsOpen] = useState(false);
//
//     // Function to toggle the menu
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };
//
//     return (
//         <nav className="bg-purple-700 text-white flex justify-between items-center sticky top-0 w-full h-16 px-4">
//             <div className="flex items-center">
//                 <img
//                     className="h-10"
//                     src="https://res-console.cloudinary.com/dgvjxhqjd/thumbnails/v1/image/upload/v1732266052/MThkZWJkZTgtM2RmYS00YThiLTk2NzItOTViZjY5NGZhZDc1X2ltbW81cQ==/drilldown"
//                     alt="MovieDB Logo"
//                 />
//                 <h1 className="ml-2 text-lg">MovieDB</h1>
//             </div>
//             {/* Toggle button for smaller screens */}
//             <button
//                 className="md:hidden p-2 focus:outline-none"
//                 onClick={toggleMenu}
//             >
//                 <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//             </button>
//
//             {/* Menu items */}
//             <div className={`md:flex space-x-5 ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-purple-700 md:static md:bg-transparent`}>
//                 <p className="p-2">Free Movies</p>
//                 <p className="p-2">Hub Movies</p>
//                 <p className="p-2">Nice Movie</p>
//             </div>
//         </nav>
//     );
// };
//
// export default NavBar;