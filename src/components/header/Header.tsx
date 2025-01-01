// import React from "react";
// import SvgIcon from "../../shared/svg-icon/SvgIcon";
// import Bhivelogo from '../../assets/logo.png'

// const Header: React.FC = () => {
//     return (
//         <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//             <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 sm:p-6">
//                 <div className="flex items-center">
//                     <img
//                         src={Bhivelogo}
//                         alt="Logo"
//                         // className="h-8 w-auto sm:h-10"
//                         className="w-[125px] h-[40px] absolute top-[25px] left-[120px] opacity-100"
//                     />
//                 </div>
//                 <button
//                     className="p-1 sm:p-2 rounded-md border border-button-primary-main"
//                     aria-label="Menu"
//                 >
//                     <SvgIcon size={24} color="#FFBB00">
//                         <path d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1083 5.271 12.2583 4.363 10.225C3.455 8.19167 3.00067 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z" />
//                     </SvgIcon>
//                 </button>
//             </div>
//         </header>
//     );
// };

// export default Header;

import React from "react";
import SvgIcon from "../../shared/svg-icon/SvgIcon";
import Bhivelogo from '../../assets/logo.png';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 sm:p-6">
                <div className="flex items-center">
                    <img
                        src={Bhivelogo}
                        alt="Logo"
                        className="w-[100px] sm:w-[125px] md:w-[125px] h-auto opacity-100"
                    />
                </div>
                <button
                    className="p-1 sm:p-2 rounded-md border border-button-primary-main"
                    aria-label="Menu"
                >
                    <SvgIcon size={24} color="#FFBB00">
                        <path d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1083 5.271 12.2583 4.363 10.225C3.455 8.19167 3.00067 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z" />
                    </SvgIcon>
                </button>
            </div>
        </header>
    );
};

export default Header;
