import Head from "next/head";
import Image from "next/image";
import logo from "../assets/images/rahaa-logo.png";
import Raha from "../assets/images/Rahaa.png";

import line from "../assets/icons/circle.png";

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
      </Head>
      <div className="items-center pg-body justify-center m-0 h-[100vh] w-[100vw] overflow-y-hidden">
        <div className="pg-body2 bg-white p-2 flex justify-between  items-center rounded-lg shadow-lg  md:ml-24 lg:w-2/3 h-10">
          <Image src={logo} width={80} height={80} alt="Raha Pay Logo" />
          <button className="nav-bt bg-indigo-600 hover:bg-blue-700 text-white lg:py-2 lg:px-4 rounded focus:outline-none focus:shadow-outline text-xs h-6">
            Join the wait list Community
          </button>
        </div>
        <div className="w-text mt-12">
          <h2 className="w-text-p text-xl text-center">
            Your Financial Future Starts
          </h2>
          <h2 className="text-3xl text-center text-yellow-500 p-1">Here</h2>

          <p className="w-text-p text-xs text-center pt-4">
            Reserve your spot on our wait list for exclusive access to Raha Pay.
            <br />
            Join us and reap benefits
          </p>
        </div>
        <div className="flex justify-center items-center lg:w-1/3 mt-8 lg:mt-4  md:ml-24 lg:ml-80 ">
          <input
            type="text"
            className="i-text w-16 lg:px-2 py-0 mr-[-4] rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 s-text  p-2"
            placeholder="email address"
          />
          <button className="lg:px-4 py-2 p-6  text-white rounded-md  focus:outline-none s-btn">
            Subscribe
          </button>
        </div>
        <div className="flex justify-between line">
          <div className="w-[44vw]"></div>
          <div>
            <Image src={line} width={110} height={110} alt="line" />
          </div>
          <div className="w-[45.9vw]"></div>
        </div>

        <div className="flex justify-between footer">
          <div className="pl-2">
            <div className="flex lg:pl-6 pt-44 lg:pt-44 footer-icons">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="text-blue-500 icon pr-4"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-blue-500 icon pr-4"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-blue-500 icon mr-0"
              />
            </div>
            <p className="footer-text text-center lg:pl-6">
              &copy; 2014 Raha. All right reserved.
            </p>
          </div>

          <Image
            src={Raha}
            width={320}
            height={320}
            alt="Raha Pay Logo"
            className=" lg:mt-5"
          />
          <div className="w-24"></div>
        </div>
      </div>
    </>
  );
}
