import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// components

import IndexDropdown from "/components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-[#ffffff] shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              NeedU{" "}
            </Link>

            <button
              className=" bg-black opacity-70 text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              menu
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <Link
                  href="/"
                  className="hover:text-blueGray-500 	 text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i className="text-black  text-lg leading-lg " />
                  <Image
                    src="/img/f-icon.png"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />

                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/"
                >
                  <i className="text-black text-lg leading-lg ">
                    <Image
                      src="/img/i-icon.png"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                  </i>
                  <span className="lg:hidden inline-block ml-2 text-black ">
                    {" "}
                    instagram
                  </span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  href="/"
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
                  <Image
                    src="/img/t-icon.png"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />
                  <span className="lg:hidden inline-block ml-2">Telegram</span>
                </Link>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-[#92fc58] hover:bg-[#64b50d] text-white active:bg-[#64b50d] text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-300"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i>
                  <Link href={"/Login/login"}>Login</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
