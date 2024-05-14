import Head from "next/head";
import Image from "next/image";
import logo from "../assets/images/rahaa-logo.png";
import Raha from "../assets/images/Rahaa.png";
import background from "../assets/images/background.png";

import line from "../assets/icons/circle.png";
import icon1 from "../assets/icons/icon-1.png";
import icon2 from "../assets/icons/icon-2.png";
import icon3 from "../assets/icons/icon-3.png";
import icon4 from "../assets/icons/icon-4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raha Pay</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="items-center bg-image justify-center m-0 h-[100vh] w-[100vw] overflow-hidden absolute">
        <div className="flex justify-center items-center">
          <div className="bg-[#CBC5E0] p-2 w-full flex justify-between  items-center md:mt-5 lg:mt-7 lg:rounded-2xl shadow-lg lg:w-3/6 md:w-3/6 h-11">
            <Image src={logo} width={120} height={90} alt="Raha Pay Logo" />
            <button className="bg-[#4C2BD3] text-white lg:py-1 lg:px-4 rounded focus:outline-none focus:shadow-outline h-7   font-poppins text-[6px] lg:text-[9px] md:text-[7px] sm:text-[3px] p-2 leading-16.35 text-left">
              JOIN THE WAITLIST COMMUNITY
            </button>
          </div>
        </div>
        <div className="lg:mt-10 mt-10 md:mt-16 text-white">
          <h2 className="font-inter lg:text-3xl md:text-2xl text-xl font-weight-[600] leading-16  text-center">
            Your Financial Future Starts
          </h2>
          <h2 className="lg:text-3xl md:text-2sxl text-xl text-center text-[#D9DD2B] font-weight-[600] md:p-2 p-1">
            Here
          </h2>

          <p className="lg:text-sm md:text-sm text-xs leading-[20px] text-center">
            Reserve your spot on our wait list for exclusive access to Raha Pay.
          </p>

          <p className="w-text-p lg:text-sm md:text-sm text-xs leading-[20px] text-center">
            Join us and reap benefits
          </p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <input
            type="text"
            className="px-2 py-0 mr-[-4] rounded-tl-[9px] rounded-bl-[9px] border border-gray-300 focus:outline-none lg:w-[220px] md:w-[220px] w-[180px] lg:h-8 md:h-8 h-6 font-poppins text-[10px] font-normal leading-none"
            placeholder="Email address"
          />
          <button className="lg:px-4 py-2 lg:p-3  rounded-tr-[7px] rounded-br-[7px]  focus:outline-none w-24 lg:h-8 md:h-8 h-6 rounded-l-lg font-poppins text-[10px] font-bold leading-none text-center text-white bg-[#4C2BD3]">
            Subscribe
          </button>
        </div>
        <div className="flex justify-between absolute lg:top-36 lg:left-10 md:top-40 md:left-8 top-28 sm:left-5">
          <div className="w-[44vw]"></div>
          <div>
            <Image
              src={line}
              width={120}
              height={120}
              alt="line"
              className=" lg:w-24 md:w-24 md:h-300 w-20"
            />
          </div>
          <div className="w-[45.9vw]"></div>
        </div>

        <div className="flex justify-between footer">
          <div className="w-8"></div>
          <div className="pl-0">
            <div className="flex lg:pl-6 md:pt-44 lg:pt-[260px] mb-5 footer-icons">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="text-white h-[19px]  pr-4"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white h-[19px] pr-4"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white h-[19px] mr-0"
              />
            </div>
            <p className="text-[8px] text-white text-center lg:pl-1">
              &copy; 2014 Raha. All right reserved.
            </p>
          </div>

          <Image
            src={Raha}
            width={346}
            height={422}
            alt="Raha Pay Logo"
            className="lg:w-[600px] lg:mt-2 md:mt-6 mb-0"
          />
          <div className="lg:w-1/4 md:w-1/4"></div>
        </div>
      </div>
    </>
  );
}
