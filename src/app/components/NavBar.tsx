import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.png";

function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 w-full fixed top-0 left-0 z-50">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={150} height={50} />
      </div>
      <Button className="py-2 px-4 md:py-4 md:px-6 bg-[#000] text-white">
        Join Our Community
      </Button>
    </nav>
  );
}

export default NavBar;
