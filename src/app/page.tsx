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
          <div className="bg-[#CBC5E0] p-2 w-full flex justify-between  items-center md:mt-5 lg:mt-3 lg:rounded-2xl shadow-lg lg:w-2/3 md:w-2/3 h-9">
            <Image src={logo} width={90} height={90} alt="Raha Pay Logo" />
            <button className="bg-[#4C2BD3] text-white lg:py-1 lg:px-4 rounded focus:outline-none focus:shadow-outline h-6 font-poppins text-[7px] font-extrabold leading-16.35 text-left">
              JOIN THE WAITLIST COMMUNITY
            </button>
          </div>
        </div>
        <div className="w-text mt-12 text-white">
          <h2 className="font-inter text-2xl font-semibold leading-16  text-center">
            Your Financial Future Starts
          </h2>
          <h2 className="text-3xl text-center text-yellow-500 p-1">Here</h2>

          <p className="w-text-p text-xs text-center pt-2">
            Reserve your spot on our wait list for exclusive access to Raha Pay.
            <br />
            Join us and reap benefits
          </p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <input
            type="text"
            className="lg:px-2 py-0 mr-[-4] rounded-tl-[4px] rounded-bl-[4px] border border-gray-300 focus:outline-none w-52 h-8 font-poppins text-[10px] font-normal leading-none"
            placeholder="Email address"
          />
          <button className="lg:px-4 py-2 p-6  rounded-tr-[4px] rounded-br-[4px]  focus:outline-none w-24 h-8 rounded-l-lg font-poppins text-[10px] font-bold leading-none text-left text-white bg-[#4C2BD3]">
            Subscribe
          </button>
        </div>
        <div className="flex justify-between line">
          <div className="w-[44vw]"></div>
          <div>
            <Image src={line} width={90} height={90} alt="line" />
          </div>
          <div className="w-[45.9vw]"></div>
        </div>

        <div className="flex justify-between footer">
          <div className="w-8"></div>
          <div className="pl-0">
            <div className="flex lg:pl-6 pt-40 mb-3 footer-icons">
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
            width={200}
            height={300}
            alt="Raha Pay Logo"
            className=" lg:mt-9"
          />
          <div className="lg:w-[300px]"></div>
          <div className="flex justify-between icon1">
            <div className="lg:w-[26vw] w-[7vw]"></div>
            <div>
              <Image src={icon1} width={70} height={70} alt="icon1" />
            </div>
            <div className="lg:w-[26vw] w-[7vw]"></div>
          </div>
          <div className="flex justify-between icon2">
            <div className="lg:w-[31vw] w-[4vw]"></div>
            <div>
              <Image src={icon2} width={70} height={70} alt="icon2" />
            </div>
            <div className="w-[45.9vw]"></div>
          </div>
          <div className="flex justify-between icon3">
            <div className="w-[64vw]"></div>
            <div>
              <Image src={icon3} width={70} height={70} alt="icon3" />
            </div>
            <div className="w-[45.9vw]"></div>
          </div>
          <div className="flex justify-between icon4">
            <div className="w-[60vw]"></div>
            <div>
              <Image src={icon4} width={70} height={70} alt="icon4" />
            </div>
            <div className="w-[45.9vw]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
