"use client";

import { ChevronDown, Globe, PcCase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Filter({ data }) {
  const genres = [...new Set(data.map((d) => d.genre))].sort();
  const platforms = [...new Set(data.map((d) => d.platform))].sort();

  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [hasil, setHasil] = useState([])

  console.log(genre);
  console.log(platform);
  console.log(hasil);

  async function dataNew() {
    const resF = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/games?platform=${platform}&category=${genre}&sort-by=release-date`,
      {
        next: {
          revalidate: 30,
        },
      },
    );
    const genreG = await resF.json();
    setHasil(genreG)
  }

  useEffect(() => {
    dataNew();
  }, [genre,platform]);

  return (
    <div className="">
      <div className="px-5 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-white text-2xl font-bold">Filter</p>
        <div className="flex gap-3">
          <div className="relative flex-1 md:flex-none">
            <select
              onChange={(e) => setGenre(e.target.value)}
              name="genre"
              id="genre-filter"
              className="w-full md:w-auto appearance-none bg-[#1E1E1E] text-white text-sm border border-slate-700 rounded-xl px-4 py-2.5 md:py-2 pr-9 cursor-pointer outline-none hover:border-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>

          <div className="relative flex-1 md:flex-none">
            <select
              onChange={(e) => setPlatform(e.target.value)}
              name="platform"
              id="platform-filter"
              className="w-full md:w-auto appearance-none bg-[#1E1E1E] text-white text-sm border border-slate-700 rounded-xl px-4 py-2.5 md:py-2 pr-9 cursor-pointer outline-none hover:border-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
            >
              <option value="">All Platforms</option>
                <option value="pc">PC</option>
                <option value="browser">Web Browser</option>
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

      </div>
      <div className="px-5 p-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 text-white gap-2 bg-[#131313]">
        {Array.isArray(hasil) && hasil.map((hasil) => (
          <Link
            href={`/search/${hasil.id}`}
            key={hasil.id}
            className="p-2 bg-[#1E1E1E] border border-slate-700 rounded-2xl flex flex-col h-full hover:border-slate-500 transition-colors"
          >
            <Image
              src={hasil.thumbnail}
              width={350}
              height={350}
              alt="gambar"
              className="rounded-xl w-full object-cover"
            />

            <div className="flex-grow">
              <h3 className="text-xl font-semibold my-2">{hasil.title}</h3>
            </div>

            <div className="flex items-center justify-between mt-auto pt-2">
              <p className="border rounded-lg py-1 px-2 text-sm border-slate-700 max-w-max">
                {hasil.genre}
              </p>
              {hasil.platform === "PC (Windows)" ? (
                <div className="text-blue-500 border rounded-lg flex items-center gap-3 p-1 border-slate-700 max-w-max">
                  <PcCase />
                </div>
              ) : (
                <div className="text-green-500 border rounded-lg flex items-center gap-3 p-1 border-slate-700 max-w-max">
                  <Globe />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
