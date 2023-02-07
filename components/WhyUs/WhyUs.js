import React from "react";
import Image from "next/image";
export default function Whyus() {
  return (
    <>
      <div className="container mx-auto px-4 pb-32 pt-48">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <Image
                  src="/img/logo-hamer.gif"
                  alt="whyus"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-3xl font-semibold">Why us?</h3>
              <div className="mt-4 text-lg leading-relaxed text-blueGray-500">
                this platform is the best way To accurately track your business.
                The main goal of the system is to be a &quot;stamp&quot; for
                professionals who are truly performing their work faithfully,
                doing the best job possible, and charging a fair price for what
                is done.
              </div>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"></span>
                      <Image
                        src="/img/V.gif"
                        alt="whyus"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        The system will be able to manage an employee&apos;s
                        tasks according to the schedule set by their work
                        manager, or by themselves.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"></span>
                      <Image
                        src="/img/V.gif"
                        alt="whyus"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div>
                      <h4 className="text-blueGray-500">
                        The system will generate a monthly income report for you
                        every month.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"></span>
                      <Image
                        src="/img/V.gif"
                        alt="whyus"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div>
                      <h4 className="text-blueGray-500">
                        The system will provide evidence of the best possible
                        performance of the task using the camera and
                        documentation.
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <Image
              alt="..."
              className="max-w-full rounded-lg shadow-xl"
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              src="/img/IMG-Handyman-Skills.jpg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
