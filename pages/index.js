import Image from "next/image";
import Link from "next/link.js";
import WhyUs from "../components/WhyUs/WhyUs";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import React from "react";

export default function index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                <h1 className="mb-1 font-mono text-4xl text-black-100 md:text-6xl">
                  welcome to <br className="block md:hidden" />
                  <span className=" inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                    NeedU
                  </span>
                  <span className="  bg-black box-border inline-block w-1 h-10 ml-2 -mb-2 md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
                </h1>
              </h2>
              <div className="mt-4 text-xs leading-relaxed text-blueGray-500">
                Our system is designed to assist independent contractors
                (electricians, plumbers, masons, waste removal, cleaners, and
                other &quot;handy&quot; workers) who work hard every day. The system is
                designed to help them keep track of their work schedule, find
                additional work during their free time &quot;windows&quot;, ensure the
                quality of the service they provide on one hand, and on the
                other hand ensure that the customer receives reliable,
                professional, courteous, and high-quality service! That&apos;ss why we
                came up with the idea to help independent contractors manage the
                schedule of their employees, their tasks, document the
                performance of tasks, engage in reports, and more.
              </div>
              <div className="mt-12">
                <Link
                  href="/Login/login"
                  className="get-started text-white font-bold px-6 py-4 rounded bg-[#2d2828]  hover:bg-[gray] outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-[#212020] uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute b-auto right-6 pt-16 sm:w-5/12 -mt-48 sm:mt-0 w-6/12 md:w-5/12 lg:w-6/12 xl:w-6/12 z-1 "
          src="/img/handyman.png"
          alt="..."
          width={500}
          height={500}
        />
      </section>

      <WhyUs />
    </>
  );
}
