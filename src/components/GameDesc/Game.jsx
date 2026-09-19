// src/components/GameDesc/Game.jsx
"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Gamepad2,
  Globe,
  Monitor,
  Sparkles,
  Building2,
  ShieldCheck,
  Zap,
  Play,
  Layers,
  Award,
  Share2,
  Heart,
  Bookmark,
  ChevronRight,
  Star,
  Users,
  Trophy,
} from "lucide-react";

/**
 * Game description page – a premium, cinematic UI.
 *
 * Props:
 *   data: {
 *     title,
 *     thumbnail,
 *     short_description,
 *     game_url,
 *     genre,
 *     platform,
 *     publisher,
 *     developer,
 *     release_date,
 *     freetogame_profile_url,
 *     id,
 *     store_url,   // optional – link for "Play Now"
 *   }
 */
const Game = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState("details"); // details | screenshots | reviews

  const {
    title,
    thumbnail,
    short_description,
    game_url,
    genre,
    platform,
    publisher,
    developer,
    release_date,
    freetogame_profile_url,
    id,
    store_url,
  } = data;

  // Helper to render a meta card
  const MetaCard = ({ icon: Icon, label, value }) => (
    <div className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-blue-500/40 transition">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-indigo-400" />
        <div>
          <p className="text-xs uppercase font-bold text-slate-400">{label}</p>
          <p className="text-sm text-white">{value || "-"}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="relative min-h-screen text-slate-100 overflow-hidden pb-12"
      style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#080810]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Top navigation */}
        <nav className="flex items-center justify-between py-4 mb-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-400 group-hover:-translate-x-1" />
            <span>Kembali</span>
          </Link>
          <div className="flex items-center gap-2">



          </div>
        </nav>

        {/* Main hero layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left – Poster & actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-3xl overflow-hidden bg-[#0f0f1a] border border-white/5 shadow-2xl">
              {/* Neon border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition" />
              <div className="relative aspect-video w-full">
                {thumbnail ? (
                  <Image
                    src={thumbnail}
                    alt={title || "Poster"}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                    priority
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-slate-900">
                    <Gamepad2 className="w-16 h-16 text-slate-700" />
                  </div>
                )}
                {/* Badges */}

                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-600/80 text-white text-xs font-bold border border-indigo-400/30">
                    {genre || "Game"}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-end text-xs text-slate-300">
                  <span className="bg-black/50 px-2 py-1 rounded border border-white/10 flex items-center gap-1">
                    <Monitor className="w-3 h-3" />
                    {platform || "PC"}
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              {store_url && (
                <a
                  href={store_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold hover:from-blue-500 hover:to-purple-500 transition-shadow shadow-md"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
                    <Play className="w-4 h-4" />
                  </div>
                  <span>MAIN SEKARANG</span>
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                </a>
              )}
              {game_url && (
                <a
                  href={game_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center w-full py-2 px-4 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition"
                >
                  <Globe className="w-4 h-4" />
                  <span>Lihat di Game Site</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              )}
              {freetogame_profile_url && (
                <a
                  href={freetogame_profile_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center w-full py-2 px-4 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition"
                >
                  <Globe className="w-4 h-4" />
                  <span>Lihat di FreeToGame</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right – Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-bold uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Sparkles className="w-3.5 h-3.5" /> {genre || "Action"}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-white/5 text-slate-300 border border-white/10">
                <Monitor className="w-3.5 h-3.5" /> {platform || "PC / Web"}
              </span>

            </div>

            {/* Title */}
            <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
              {title}
            </h1>

            {/* Short description */}
            <div className="p-5 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-xl">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {short_description || "Jelajahi petualangan game seru tanpa biaya langsung di platform favorit Anda."}
              </p>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MetaCard icon={Building2} label="Developer" value={developer} />
              <MetaCard icon={Globe} label="Publisher" value={publisher} />
              <MetaCard icon={Calendar} label="Rilis Perdana" value={release_date} />
              <MetaCard icon={Monitor} label="Platform" value={platform} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
