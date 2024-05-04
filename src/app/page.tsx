import Head from "next/head";
import Image from "next/image";
import logo from "../assets/images/rahaa-logo.png";
import Raha from "../assets/images/Rahaa.png";

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
      <div className="text-white bg-indigo-600 justify-center items-center h-screen w-screen pg-body">
        <div className="text-center">
          <div className="bg-white p-2 flex justify-between items-center rounded-lg shadow-lg mt-0.1 lg:mt-1  md:ml-24 lg:w-2/3">
            <Image src={logo} width={40} height={40} alt="Raha Pay Logo" />
            <button className="bg-indigo-600 hover:bg-blue-700 text-white lg:py-2 lg:px-4 rounded focus:outline-none focus:shadow-outline text-xs">
              Join the waitlist Community
            </button>
          </div>
          <h1 className="text-xl mt-5">Your Financial Future starts</h1>
          <h1 className="text-3xl font-bold text-yellow-500">Here</h1>
          <p className="text-xs">
            Reserve your spot on our wait list for exclusive access to Raha Pay.
            <br />
            Join us and reap benefits
          </p>

          <div className="flex ml-11 justify-center items-center lg:w-1/3 mt-8 lg:mt-4  md:ml-24 lg:ml-80">
            <input
              type="text"
              className="lg:px-4 py-2 mr-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="email address"
            />
            <button className="lg:px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex mr-0">
          <div className="pt-52 pl-2">
            <div className="flex">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="text-blue-500 icon pr-2"
              />

              <FontAwesomeIcon
                icon={faTwitter}
                className="text-blue-500 icon pr-2"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-blue-500 icon mr-0"
              />
            </div>
            <p className="footer-text ">
              &copy; 2014 Raha. All right reserved.
            </p>
          </div>
          <Image
            src={Raha}
            width={400}
            height={500}
            alt="Raha Pay Logo"
            className="mt-8 lg:mt-5 w-2/3"
          />
        </div>
      </div>
    </>
  );
}
