import Game from "@/components/GameDesc/Game";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/game?id=${id}`,
  );
  const data = await res.json();

  return (
    <>
    <Navbar/>
    <Game data={data}/>
    </>
  );
};

export default page;
