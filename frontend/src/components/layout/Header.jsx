import React, { useState } from "react";
import Logo from "../../images/logo.png";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { IoBagCheckOutline } from "react-icons/io5";
// import { GiShoppingCart } from "react-icons/gi";
// import { VscAccount } from "react-icons/vsc";
// import { IoIosArrowDropdown } from "react-icons/io";
// import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const toggleAboutUsDropdown = () => {
    setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
  };

  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <header>
      <div className="flex justify-between bg-gray-100 py-3 xl:px-24 sm:px-10 px-4">
        <div className=" sm:block hidden">
          <p className="text-sm text-gray-600">
            Welcome to Crafty Commerce!{" "}
            <Link className=" text-primary ml-1" to={"/login"}>
              Login
            </Link>{" "}
            or{" "}
            <Link className=" text-primary" to={"/register"}>
              Register
            </Link>
          </p>
        </div>

        <div className="flex items-center sm:justify-end justify-between text-sm md:divide-x-2 divide-gray-300  text-gray-600 md:w-auto w-full">
          <motion.div
            className="relative cursor-pointer"
            onClick={toggleAccountDropdown}
          >
            <a
              className={`flex items-center sm:px-4 whitespace-nowrap ${
                isAccountDropdownOpen ? "text-primary" : "text-gray-600"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Hi! Sumit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-caret-down-fill h-3 w-3 ml-1"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </a>
            {isAccountDropdownOpen && (
              <>
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{
                    type: "slide",
                    bounce: 0.4,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className={`absolute rounded bg-white border w-full shadow mt-2 text-base overflow-hidden z-40`}
                >
                  <Link
                    className="hover:bg-gray-100 transition-colors duration-300 ease-in-out p-2 rounded-t text-sm block"
                    to={"/"}
                  >
                    Your Profile
                  </Link>
                  <Link
                    className="hover:bg-gray-100 transition-colors duration-300 ease-in-out p-2 rounded-t text-sm block"
                    to={"/login"}
                  >
                    Login
                  </Link>
                  <Link
                    className="hover:bg-gray-100 transition-colors duration-300 ease-in-out p-2 text-sm block"
                    to={"/register"}
                  >
                    Register
                  </Link>
                  <Link
                    className="hover:bg-gray-100 transition-colors duration-300 ease-in-out p-2 rounded-b text-sm block"
                    to={"/"}
                  >
                    Your Orders
                  </Link>
                  <Link
                    className="hover:bg-gray-100 transition-colors duration-300 ease-in-out p-2 rounded-b text-sm block"
                    href={"/"}
                  >
                    Logout
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.3,
                  }}
                  onClick={toggleAccountDropdown}
                  className="cursor-default bg-backdropBlur z-20 px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
                />
              </>
            )}
          </motion.div>

          <div className="sm:px-4 flex items-center space-x-6">
            <a
              className=" text-gray-600"
              href="https://twitter.com/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-twitter h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>

            <a
              className=" text-gray-600"
              href="https://facebook.com/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-facebook h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>

            <a
              className=" text-gray-600"
              href="https://google.com/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-google h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>

            <a
              className=" text-gray-600"
              href="https://instagram.com/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-instagram h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>

            <a
              className=" text-gray-600"
              href="https://youtube.com/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-youtube w-3 h-3"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-6 xl:px-24 sm:px-10 px-4">
        <div className="w-[250px] h-max">
          <Link to={"/"}>
            <img src={Logo} alt="Crafty Commerce Logo" />
          </Link>
        </div>

        <div className="w-full sm:px-8 px-2 flex items-center">
          <input
            className=" w-full p-2 rounded-l border-r-0 px-4 text-sm border text-gray-600 outline-none focus:border-b-[3px] focus:border-b-secondary"
            type="text"
            placeholder="Search the store"
          />
          <button
            className="sm:px-6 p-2 bg-primary hover:bg-primaryDarkShade text-white font-bold rounded-r
          transition-all duration-500 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="h-25 bg-primary flex items-center justify-between xl:px-24 sm:px-10 px-4">
        <div className="h-full">
          <button
            className="h-full p-2 rounded bg-primaryDarkShade lg:hidden inline-block"
            onClick={toggleSideBar}
          >
            <span className="h-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
          {isSideBarOpen && (
            <>
              <motion.div
                initial={{ x: "-100%", duration: 0.5 }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: "100%",
                }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                className={`fixed z-50 top-0 left-0 bg-white shadow-2xl w-72 h-screen uppercase overflow-y-auto}`}
              >
                <div className="p-2 my-4 mx-0 flex items-center justify-end">
                  <motion.span
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="w-7 h-7 text-primary cursor-pointer hover:text-gray-600"
                    onClick={toggleSideBar}
                  >
                    <VscChromeClose className="w-full h-full" />
                  </motion.span>
                </div>
                <div className={`space-x-6 text-xs font-semibold w-full`}>
                  <ul className="w-full tracking-wider">
                    <li className="duration-300 hover:shadow border-b border-t py-4 px-10 cursor-pointer">
                      <a href="#">HOME</a>
                    </li>
                    <li className="duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 relative cursor-pointer">
                      <a href="#">
                        New products
                        <span className="absolute z-20 top-3 right-2 mr-1 p-1 rounded bg-purple-700 text-xs capitalize px-4 text-white hover:text-white">
                          New
                        </span>
                        <span className="absolute top-5 right-16 p-1 bg-purple-700 h-2 w-2 transform rotate-45"></span>
                      </a>
                    </li>
                    <li className="duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 relative cursor-pointer">
                      <a href="#">
                        Best sales
                        <span className="absolute z-20 top-3 right-2 mr-1 p-1 rounded bg-ternary text-xs capitalize px-5 text-white hover:text-white">
                          Hot
                        </span>
                        <span className="absolute top-5 right-16 p-1 bg-ternary h-2 w-2 mr-1 transform rotate-45"></span>
                      </a>
                    </li>
                    <li className="duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 cursor-pointer">
                      <a href="#">Shop</a>
                    </li>
                    <li className="duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 cursor-pointer">
                      <a href="#">CONTACT</a>
                    </li>
                    <li className="duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 cursor-pointer">
                      <a href="#">FAQ</a>
                    </li>
                    <li className="duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 cursor-pointer">
                      <a href="#">Terms & condition</a>
                    </li>
                    <li className="duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 cursor-pointer">
                      <a href="#">Privacy & policy</a>
                    </li>
                    <li className="duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 cursor-pointer">
                      <a href="#">LogIn</a>
                    </li>
                    <li className="duration-300 hover:tracking-widest hover:shadow border-b py-4 px-10 cursor-pointer">
                      <a href="#">Register</a>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.3,
                }}
                onClick={toggleSideBar}
                className="bg-backdropBlur z-40 px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
              />
            </>
          )}
          <ul className="h-full hidden text-white font-bold lg:flex items-center text-sm">
            <li className="h-full">
              <a
                className="p-[11px] relative after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-[4px] after:bottom-0 after:left-0 after:bg-secondary after:origin-bottom-right
                after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100
                hover:after:origin-bottom-left"
                href="#"
              >
                HOME
              </a>
            </li>
            <li className=" relative">
              <a
                className="p-[11px] relative after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-[4px] after:bottom-0 after:left-0 after:bg-secondary after:origin-bottom-right
                after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100
                hover:after:origin-bottom-left"
                href="#"
              >
                NEW PRODUCTS
                <span className=" absolute z-20 -top-7 right-0 p-1 rounded bg-purple-700 text-xs capitalize px-4">
                  New
                </span>
                <span className="absolute -top-3 right-6 p-1 bg-purple-700 h-3 w-3 transform rotate-45"></span>
              </a>
            </li>
            <li className=" relative">
              <a
                className="p-[11px] relative after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-[4px] after:bottom-0 after:left-0 after:bg-secondary after:origin-bottom-right
                after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100
                hover:after:origin-bottom-left"
                href="#"
              >
                BEST SALES
                <span className=" absolute z-20 -top-7 right-0 p-1 rounded bg-ternary text-xs capitalize px-4 ">
                  Hot
                </span>
                <span className="absolute -top-3 right-6 p-1 bg-ternary h-3 w-3 transform rotate-45"></span>
              </a>
            </li>
            <li>
              <a
                className="p-[11px] relative after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-[4px] after:bottom-0 after:left-0 after:bg-secondary after:origin-bottom-right
                after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100
                hover:after:origin-bottom-left"
                href="#"
              >
                SHOP
              </a>
            </li>
            <motion.li
              className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-[4px] after:bottom-0 after:left-0 after:bg-secondary after:origin-bottom-right
                after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100
                hover:after:origin-bottom-left"
              onMouseEnter={toggleAboutUsDropdown}
              onMouseLeave={toggleAboutUsDropdown}
            >
              <button className="p-2.5 flex items-center font-bold text-sm uppercase">
                ABOUT US
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              {isAboutUsDropdownOpen && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 200, opacity: 0 }}
                  transition={{
                    type: "spring",
                    bounce: 0.5,
                    duration: 0.7,
                  }}
                  className={`absolute bg-white border w-52 rounded shadow text-sm text-black overflow-hidden font-normal z-50`}
                >
                  <a
                    className=" block hover:bg-gray-100 text-sm px-4 p-3 border-b tracking-widest"
                    href="#"
                  >
                    Frequently Asked Questions (FAQ)
                  </a>
                  <a
                    className=" block hover:bg-gray-100 text-sm px-4 p-3 border-b tracking-widest"
                    href="#"
                  >
                    Terms & conditions
                  </a>
                  <a
                    className=" block hover:bg-gray-100 text-sm px-4 p-3 tracking-widest"
                    href="#"
                  >
                    Privacy & policy
                  </a>
                </motion.div>
              )}
            </motion.li>
            <li>
              <a
                className="p-[11px] relative after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-[4px] after:bottom-0 after:left-0 after:bg-secondary after:origin-bottom-right
                after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100
                hover:after:origin-bottom-left"
                href="#"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>

        <motion.div
          className="relative h-full"
          onMouseEnter={toggleCartDropdown}
          onMouseLeave={toggleCartDropdown}
        >
          <button className="h-full text-white flex items-center space-x-2 font-bold relative uppercase p-2.5 lg:p-2 bg-primaryDarkShade">
            <span className="h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="lg:hidden absolute z-20 top-0 left-9 h-5 w-5 rounded-full box-border flex items-center justify-center bg-black text-xs text-white">
                0
              </span>
            </span>
            <div className="lg:flex hidden items-center space-x-2">
              <span>My Cart -</span>
              <span className=" font-normal">$0.00</span>
            </div>
          </button>

          {isCartDropdownOpen && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 0.7,
              }}
              className={`bg-white shadow-xl absolute -left-56 lg:-left-8 right-0 top-10 border p-5 rounded z-50 flex items-center justify-center h-40 w-72 cursor-pointer
         `}
            >
              <ul>
                <li>Your cart is empty</li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
