import React, { useState } from "react";
import '../components/Navbar.css'
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between h-16 bg-black text-white px-6 md:px-10 z-50">
          
          <h2 className="text-white font-extrabold text-2xl md:text-3xl tracking-wide">
            TrackMyCrypto
          </h2>
  
          
          <div className="flex-grow flex justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center cursor-pointer relative w-10 h-10"
            >
              <motion.span
                className="block w-8 h-1 bg-white absolute"
                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-8 h-1 bg-white absolute"
                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
  
         
          <div className="flex items-center space-x-4">
            <select className="bg-black text-white  p-2 rounded">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>
  
           
            
            
            <button
    className="relative font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-black backdrop-blur-md lg:font-semibold isolation-auto px-4 py-2 overflow-hidden rounded-full group transition-all duration-500"
    type="submit"
  >
    <span className="relative z-10 transition-all duration-500 group-hover:text-black">
      Get Plan
    </span>
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 19"
      className="w-8 h-8 justify-end bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full p-2 rotate-45 transition-all group-hover:rotate-90"
    >
      <path
        className="fill-gray-800 group-hover:fill-black transition-all"
        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      ></path>
    </svg>
  
   
    <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 left-0 rounded-full -z-10"></span>
  </button>
  
  
  
  
  
  
  
          </div>
        </nav>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black text-white flex justify-center items-center z-40 w-full h-full"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ul className="space-y-6 text-2xl">
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </li>
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </li>
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </li>
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };
  
  export default Navbar;
  