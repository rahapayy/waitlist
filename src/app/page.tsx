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
          <div className="bg-[#CBC5E0] p-2 w-full flex justify-between  items-center md:mt-5 lg:mt-9 lg:rounded-2xl shadow-lg lg:w-2/3 md:w-2/3 h-11">
            <Image src={logo} width={120} height={90} alt="Raha Pay Logo" />
            <button className="bg-[#4C2BD3] text-white lg:py-1 lg:px-4 rounded focus:outline-none focus:shadow-outline h-7 font-poppins text-[9px] font-extrabold leading-16.35 text-left">
              JOIN THE WAITLIST COMMUNITY
            </button>
          </div>
        </div>
        <div className="mt-10 text-white">
          <h2 className="font-inter lg:text-6xl md:text-4xl text-2xl font-weight-[600] leading-16  text-center">
            Your Financial Future Starts
          </h2>
          <h2 className="lg:text-6xl md:text-4xl text-2xl text-center text-[#D9DD2B] font-weight-[600] p-4">
            Here
          </h2>

          <p className="w-text-p lg:text-2xl md:text-xl text-xs leading-[20px] text-center pt-2 ">
            Reserve your spot on our wait list for exclusive access to Raha Pay.
          </p>

          <p className="w-text-p lg:text-2xl md:text-xl text-xs leading-[20px] text-center pt-2 ">
            Join us and reap benefits
          </p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <input
            type="text"
            className="px-2 py-0 mr-[-4] rounded-tl-[9px] rounded-bl-[9px] border border-gray-300 focus:outline-none lg:w-[420px] md:w-[400px] w-[300px] lg:h-16 md:h-14 h-12 font-poppins text-[10px] font-normal leading-none"
            placeholder="Email address"
          />
          <button className="lg:px-4 py-2 p-6  rounded-tr-[7px] rounded-br-[7px]  focus:outline-none w-40 h-16 rounded-l-lg font-poppins text-[10px] font-bold leading-none text-left text-white bg-[#4C2BD3]">
            Subscribe
          </button>
        </div>
        <div className="flex justify-between absolute lg:top-44 lg:left-12 md:top-36 md:left-7 top-28 sm:left-5">
          <div className="w-[44vw]"></div>
          <div>
            <Image
              src={line}
              width={220}
              height={220}
              alt="line"
              className=" lg:w-44 md:w-36 md:h-300 w-32"
            />
          </div>
          <div className="w-[45.9vw]"></div>
        </div>

        <div className="flex justify-between footer">
          <div className="w-8"></div>
          <div className="pl-0">
            <div className="flex lg:pl-6 pt-48 lg:pt-[360px] mb-5 footer-icons">
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
            width={546}
            height={822}
            alt="Raha Pay Logo"
            className="lg:w-[856px] lg:mt-2"
          />
          <div className="lg:w-1/4 md:w-1/4"></div>
        </div>
      </div>
    </>
  );
}
