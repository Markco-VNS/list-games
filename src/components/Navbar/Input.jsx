import { Search } from "lucide-react";
import React from "react";

const Input = () => {
  return (
    <div className="flex items-center relative text-black w-full md:w-64">
      <input type="text" className="bg-white rounded p-1 w-full " />
      <button className="absolute top-1 right-1">
        <Search />
      </button>
    </div>
  );
};

export default Input;
