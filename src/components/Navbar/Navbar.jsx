import { Gamepad2 } from "lucide-react";
import React from "react";
import Input from "./Input";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="bg-[#131313] border-b-2 flex-col text-white flex justify-between items-center px-5 py-3 md:flex-row">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Gamepad2 />
          <h1 className="text-xl">Games</h1>
        </Link>
        <Input />
      </div>
    </header>
  );
};

export default Navbar;
