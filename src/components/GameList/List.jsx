"use client";

import { Globe, PcCase, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ITEMS_PER_PAGE = 10;

const List = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) start = Math.max(1, end - maxVisible + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <main>
      <div className="flex items-center justify-between px-5 mt-4">
        <h1 className="text-white text-2xl font-bold">Explore Games</h1>
        <span className="text-slate-400 text-sm">
          {data.length} games &bull; Page {currentPage} of {totalPages}
        </span>
      </div>

      <div className="px-5 p-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 text-white gap-2">
        {paginatedData.map((game) => (
          <Link
            href={`/search/${game.id}`}
            key={game.id}
            className="p-2 bg-[#1E1E1E] border border-slate-700 rounded-2xl flex flex-col h-full hover:border-slate-500 transition-colors"
          >
            <Image
              src={game.thumbnail}
              width={350}
              height={350}
              alt="gambar"
              className="rounded-xl w-full object-cover"
            />

            <div className="flex-grow">
              <h3 className="text-xl font-semibold my-2">{game.title}</h3>
            </div>

            <div className="flex items-center justify-between mt-auto pt-2">
              <p className="border rounded-lg py-1 px-2 text-sm border-slate-700 max-w-max">
                {game.genre}
              </p>
              {game.platform === "PC (Windows)" ? (
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 py-8 px-5 flex-wrap">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-4 py-2.5 md:px-3 md:py-2 rounded-lg bg-[#1E1E1E] border border-slate-700 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-slate-500 hover:bg-[#2a2a2a] transition-all text-base md:text-sm"
          >
            <ChevronLeft size={18} className="md:w-4 md:h-4" />
            Prev
          </button>

          {getPageNumbers()[0] > 1 && (
            <>
              <button
                onClick={() => goToPage(1)}
                className="w-11 h-11 md:w-9 md:h-9 rounded-lg bg-[#1E1E1E] border border-slate-700 text-white hover:border-slate-500 hover:bg-[#2a2a2a] transition-all text-base md:text-sm"
              >
                1
              </button>
              {getPageNumbers()[0] > 2 && (
                <span className="text-slate-500">…</span>
              )}
            </>
          )}

          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-11 h-11 md:w-9 md:h-9 rounded-lg border text-base md:text-sm transition-all ${
                page === currentPage
                  ? "bg-blue-600 border-blue-500 text-white font-semibold"
                  : "bg-[#1E1E1E] border-slate-700 text-white hover:border-slate-500 hover:bg-[#2a2a2a]"
              }`}
            >
              {page}
            </button>
          ))}

          {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
            <>
              {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                <span className="text-slate-500">…</span>
              )}
              <button
                onClick={() => goToPage(totalPages)}
                className="w-11 h-11 md:w-9 md:h-9 rounded-lg bg-[#1E1E1E] border border-slate-700 text-white hover:border-slate-500 hover:bg-[#2a2a2a] transition-all text-base md:text-sm"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-4 py-2.5 md:px-3 md:py-2 rounded-lg bg-[#1E1E1E] border border-slate-700 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-slate-500 hover:bg-[#2a2a2a] transition-all text-base md:text-sm"
          >
            Next
            <ChevronRight size={18} className="md:w-4 md:h-4" />
          </button>
        </div>
      )}
    </main>
  );
};

export default List;
