# 🎮 Free Games Explorer

Aplikasi web modern untuk menjelajahi dan mencari katalog game *free-to-play* terlengkap menggunakan **FreeToGame API**, dibangun dengan **Next.js 16**, **React 19**, dan **Tailwind CSS**.

---

## ✨ Fitur Utama

- 🕹️ **Katalog Game Lengkap**: Menampilkan daftar game gratis dengan tampilan kartu yang responsif dan rapi.
- 🔍 **Detail Game (`/search/[id]`)**: Halaman detail lengkap untuk setiap game termasuk deskripsi, screenshot, dan spesifikasi sistem.
- 🎯 **Filter Berdasarkan Genre & Platform**: Memudahkan pencarian game berdasarkan genre favorit serta platform (PC / Web Browser).
- 📄 **Pagination**: Navigasi halaman yang lancar dan ringan saat menjelajahi ratusan judul game.
- 🌙 **Modern Dark Theme**: Desain elegan bernuansa *dark mode* dengan aksen modern dan ikon interaktif dari Lucide Icons.
- 📱 **Responsif**: Tampilan optimal di berbagai perangkat, mulai dari smartphone hingga desktop layar lebar.

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library UI**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **API Source**: [FreeToGame API](https://www.freetogame.com/api-doc)

---

## 📂 Struktur Direktori

```text
├── public/               # Asset statis
├── src/
│   ├── app/
│   │   ├── layout.jsx    # Root layout & metadata
│   │   ├── page.jsx      # Halaman utama (Home / Explorer)
│   │   └── search/
│   │       └── [id]/     # Halaman dinamis detail game
│   ├── components/
│   │   ├── FilterGames/  # Komponen dropdown filter genre & platform
│   │   ├── GameDesc/     # Komponen detail & deskripsi game
│   │   ├── GameList/     # Komponen grid daftar game & paginasi
│   │   └── Navbar/       # Komponen navbar & input search
│   └── stores/           # Global state management (Zustand)
├── .env                  # Variabel environment
├── next.config.mjs
├── package.json
└── README.md
