
"use client";

import { useState } from "react";

const movies = [
  {
    title: "The Last Voyage",
    year: "2024",
    rating: "8.5",
    genre: "Adventure",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    description:
      "การเดินทางครั้งสุดท้ายสู่โลกแห่งการผจญภัย เรื่องราวที่เต็มไปด้วยความลึกลับและความตื่นเต้น",
  },
  {
    title: "Inside Dream",
    year: "2023",
    rating: "8.2",
    genre: "Romance",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    description:
      "เรื่องราวความรักและความทรงจำที่แสนงดงาม",
  },
  {
    title: "Shadow World",
    year: "2024",
    rating: "8.7",
    genre: "Action",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600",
    description:
      "โลกที่เต็มไปด้วยความลับและการต่อสู้เพื่อความอยู่รอด",
  },
  {
    title: "Love in Time",
    year: "2023",
    rating: "8.3",
    genre: "Romance",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
    description:
      "ความรักที่ก้าวข้ามผ่านกาลเวลาและอุปสรรค",
  },
];

const categories = [
  "ทั้งหมด",
  "Action",
  "Adventure",
  "Romance",
  "Drama",
];

export default function Home() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("ทั้งหมด");
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredMovies = movies.filter((movie) => {
    const matchCategory =
      category === "ทั้งหมด" || movie.genre === category;

    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const toggleFavorite = (title: string) => {
    setFavorites((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const navItems = [
    { id: "home", icon: "⌂", label: "หน้าหลัก" },
    { id: "search", icon: "⌕", label: "ค้นหา" },
    { id: "saved", icon: "▣", label: "รายการโปรด" },
    { id: "profile", icon: "♙", label: "โปรไฟล์" },
  ];

  return (
    <main className="min-h-[882px] min-h-[100dvh] w-full bg-[#030914] text-white selection:bg-blue-500 overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full" />
      </div>

      {/* MOBILE CONTAINER 390 x 882 */}
      <div className="relative w-full max-w-[390px] min-h-[882px] min-h-[100dvh] mx-auto px-5 pt-4 pb-28">

        {/* HEADER */}
        <header className="flex items-center justify-between mb-6">

          <div
            onClick={() => setPage("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
              🎬
            </div>

            <div>
              <h1 className="text-xl font-black tracking-tight">
                Movie<span className="text-blue-400">Hub</span>
              </h1>

              <p className="text-[9px] text-gray-500 tracking-[2px]">
                MOVIE STREAMING
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => setPage("search")}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 transition"
            >
              ⌕
            </button>

            <button className="w-9 h-9 rounded-full bg-white/5 border border-white/10">
              ♧
            </button>

            <button
              onClick={() => setPage("profile")}
              className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-400/40"
            >
              ♙
            </button>

          </div>
        </header>

        {/* HOME PAGE */}
        {page === "home" && (
          <>

            {/* HERO BANNER */}
            <section className="relative overflow-hidden rounded-2xl h-[285px] border border-white/10 group">

              <img
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600"
                alt="Featured movie"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/75 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-transparent" />

              <div className="relative z-10 p-5 h-full flex flex-col justify-end">

                <span className="text-blue-400 text-[9px] font-bold tracking-[2px] mb-3">
                  ✦ MOVIE OF THE DAY
                </span>

                <h2 className="text-[30px] font-black mb-2 leading-tight">
                  AVENGERS
                  <br />
                  <span className="text-blue-400">
                    ENDGAME
                  </span>
                </h2>

                <div className="flex gap-2 text-[9px] text-gray-300 mb-3 flex-wrap">
                  <span className="text-yellow-400">
                    ★ 9.0
                  </span>
                  <span>2024</span>
                  <span>Action</span>
                  <span>2 ชม. 15 นาที</span>
                </div>

                <p className="text-gray-300 text-[10px] leading-5 mb-4">
                  สัมผัสประสบการณ์ภาพยนตร์สุดยิ่งใหญ่
                  กับการผจญภัยที่คุณไม่ควรพลาด
                  รับชมเรื่องราวสุดพิเศษได้ที่ MovieHub
                </p>

                <div className="flex gap-2">

                  <button
                    onClick={() => {
                      setSelectedMovie(movies[0]);
                      setPage("detail");
                    }}
                    className="px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-[10px] font-bold shadow-lg shadow-blue-600/30 transition"
                  >
                    ▶ รับชมภาพยนตร์
                  </button>

                  <button
                    onClick={() => toggleFavorite("AVENGERS ENDGAME")}
                    className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-[10px]"
                  >
                    ♡ รายการโปรด
                  </button>

                </div>
              </div>
            </section>

            {/* CATEGORIES */}
            <section className="mt-6">

              <div className="flex justify-between items-center mb-3">
                <h2 className="text-base font-bold">
                  หมวดหมู่
                </h2>

                <button
                  onClick={() => setPage("search")}
                  className="text-blue-400 text-[10px]"
                >
                  ดูทั้งหมด →
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">

                {[
                  { name: "Action", icon: "🎬", label: "แอ็กชัน" },
                  { name: "Adventure", icon: "🏆", label: "ผจญภัย" },
                  { name: "Drama", icon: "🎭", label: "ดราม่า" },
                  { name: "Romance", icon: "♥", label: "โรแมนติก" },
                ].map((item) => (

                  <button
                    key={item.name}
                    onClick={() => {
                      setCategory(item.name);
                      setPage("search");
                    }}
                    className="rounded-xl p-3 bg-[#101d30] border border-white/5 hover:border-blue-400/60 transition text-center"
                  >
                    <div className="text-2xl mb-2">
                      {item.icon}
                    </div>

                    <div className="text-[9px] font-bold">
                      {item.label}
                    </div>
                  </button>

                ))}

              </div>
            </section>

            {/* NEW MOVIES */}
            <section className="mt-6">

              <div className="flex justify-between items-center mb-3">
                <h2 className="text-base font-bold">
                  หนังมาใหม่
                </h2>

                <button
                  onClick={() => setPage("search")}
                  className="text-blue-400 text-[10px]"
                >
                  ดูทั้งหมด →
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3">

                {movies.map((movie) => (
                  <MovieCard
                    key={movie.title}
                    movie={movie}
                    favorite={favorites.includes(movie.title)}
                    onFavorite={() => toggleFavorite(movie.title)}
                    onClick={() => {
                      setSelectedMovie(movie);
                      setPage("detail");
                    }}
                  />
                ))}

              </div>
            </section>

          </>
        )}

        {/* SEARCH PAGE */}
        {page === "search" && (
          <section className="min-h-[650px]">

            <h2 className="text-2xl font-black mb-2">
              ค้นหาภาพยนตร์
            </h2>

            <p className="text-gray-500 text-xs mb-5">
              ค้นพบภาพยนตร์เรื่องโปรดของคุณ
            </p>

            {/* SEARCH INPUT */}
            <div className="relative mb-5">

              <span className="absolute left-4 top-3 text-xl text-blue-400">
                ⌕
              </span>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ค้นหาชื่อภาพยนตร์..."
                className="w-full bg-[#101d30] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-xs outline-none focus:border-blue-500"
              />

            </div>

            {/* CATEGORY FILTER */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">

              {categories.map((item) => (

                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-[10px] transition ${
                    category === item
                      ? "bg-blue-600 text-white"
                      : "bg-[#152238] text-gray-400 hover:bg-blue-900"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

            {/* MOVIE LIST */}
            <div className="space-y-3">

              {filteredMovies.map((movie) => (

                <div
                  key={movie.title}
                  className="flex gap-3 bg-[#101d30] p-2 rounded-xl border border-white/5"
                >

                  <button
                    onClick={() => {
                      setSelectedMovie(movie);
                      setPage("detail");
                    }}
                  >
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-[95px] h-[95px] object-cover rounded-lg"
                    />
                  </button>

                  <div className="flex-1 min-w-0">

                    <h3 className="font-bold text-xs mt-1">
                      {movie.title}
                    </h3>

                    <p className="text-[10px] mt-2">
                      <span className="text-yellow-400">
                        ★ {movie.rating}
                      </span>

                      <span className="text-gray-400">
                        {" "} | {movie.year}
                      </span>
                    </p>

                    <p className="text-[9px] text-gray-400 mt-2 leading-4 line-clamp-2">
                      {movie.description}
                    </p>

                    <button
                      onClick={() => {
                        setSelectedMovie(movie);
                        setPage("detail");
                      }}
                      className="text-blue-400 text-[9px] mt-2"
                    >
                      ดูรายละเอียด →
                    </button>

                  </div>

                  <button
                    onClick={() => toggleFavorite(movie.title)}
                    className="text-lg self-start p-1"
                  >
                    {favorites.includes(movie.title) ? "♥" : "♡"}
                  </button>

                </div>

              ))}

            </div>

            {filteredMovies.length === 0 && (
              <p className="text-center text-gray-500 py-20 text-sm">
                ไม่พบภาพยนตร์ที่ค้นหา
              </p>
            )}

          </section>
        )}

        {/* DETAIL PAGE */}
        {page === "detail" && (
          <section className="max-w-5xl mx-auto">

            <button
              onClick={() => setPage("home")}
              className="text-blue-400 text-xs mb-5"
            >
              ← กลับหน้าหลัก
            </button>

            <div className="relative h-[250px] rounded-2xl overflow-hidden">

              <img
                src={selectedMovie.image}
                alt={selectedMovie.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030914] to-transparent" />

              <button
                onClick={() => alert("Prototype: ตัวอย่างการเล่นวิดีโอ")}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-blue-600/90 text-2xl shadow-xl shadow-blue-600/40"
              >
                ▶
              </button>

            </div>

            <div className="mt-5">

              <h2 className="text-2xl font-black mb-3">
                {selectedMovie.title}
              </h2>

              <div className="flex gap-3 text-xs text-gray-400 mb-4">

                <span className="text-yellow-400">
                  ★ {selectedMovie.rating}
                </span>

                <span>{selectedMovie.year}</span>

                <span>{selectedMovie.genre}</span>

              </div>

              <p className="text-gray-300 text-xs leading-7 mb-6">
                {selectedMovie.description}
              </p>

              <button
                onClick={() => toggleFavorite(selectedMovie.title)}
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-xs transition"
              >
                {favorites.includes(selectedMovie.title)
                  ? "♥ เพิ่มในรายการโปรดแล้ว"
                  : "♡ เพิ่มในรายการโปรด"}
              </button>

            </div>

          </section>
        )}

        {/* FAVORITES PAGE */}
        {page === "saved" && (
          <section className="min-h-[600px]">

            <h2 className="text-2xl font-black mb-3">
              รายการโปรด ♥
            </h2>

            <p className="text-gray-500 text-xs mb-6">
              ภาพยนตร์ที่คุณบันทึกไว้
            </p>

            <div className="grid grid-cols-3 gap-3">

              {movies
                .filter((movie) => favorites.includes(movie.title))
                .map((movie) => (

                  <MovieCard
                    key={movie.title}
                    movie={movie}
                    favorite={true}
                    onFavorite={() => toggleFavorite(movie.title)}
                    onClick={() => {
                      setSelectedMovie(movie);
                      setPage("detail");
                    }}
                  />

                ))}

            </div>

            {favorites.length === 0 && (
              <div className="text-center py-24 text-gray-500">

                <div className="text-5xl mb-4">
                  ♡
                </div>

                <p className="text-sm">
                  ยังไม่มีภาพยนตร์ในรายการโปรด
                </p>

                <button
                  onClick={() => setPage("home")}
                  className="mt-5 text-blue-400 text-xs"
                >
                  กลับไปเลือกภาพยนตร์ →
                </button>

              </div>
            )}

          </section>
        )}

        {/* PROFILE PAGE */}
        {page === "profile" && (
          <section className="max-w-xl mx-auto min-h-[600px]">

            {/* USER PROFILE */}
            <div className="bg-[#101d30] border border-white/10 rounded-2xl p-5 text-center">

              <div className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500 overflow-hidden mb-3">

                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

              </div>

              <h2 className="text-xl font-bold">
                Siranya
              </h2>

              <p className="text-gray-500 text-xs mt-1">
                👑 Member of MovieHub
              </p>

              {/* STATISTICS */}
              <div className="grid grid-cols-3 gap-2 mt-6">

                <div className="bg-[#192b44] rounded-xl p-3">

                  <div className="text-xl text-blue-400">
                    ▶
                  </div>

                  <p className="font-bold text-sm mt-2">
                    24
                  </p>

                  <p className="text-[9px] text-gray-500">
                    รับชม
                  </p>

                </div>

                <div className="bg-[#192b44] rounded-xl p-3">

                  <div className="text-xl text-blue-400">
                    ♥
                  </div>

                  <p className="font-bold text-sm mt-2">
                    {favorites.length}
                  </p>

                  <p className="text-[9px] text-gray-500">
                    รายการโปรด
                  </p>

                </div>

                <div className="bg-[#192b44] rounded-xl p-3">

                  <div className="text-xl text-blue-400">
                    ◷
                  </div>

                  <p className="font-bold text-sm mt-2">
                    48 ชม.
                  </p>

                  <p className="text-[9px] text-gray-500">
                    เวลารับชม
                  </p>

                </div>

              </div>

            </div>

            {/* PROFILE MENU */}
            <div className="mt-5 bg-[#101d30] border border-white/10 rounded-2xl p-4">

              {[
                "♡ รายการโปรด",
                "◷ ประวัติการรับชม",
                "⚙ การตั้งค่า",
                "♧ ช่วยเหลือและคำถามที่พบบ่อย",
                "ⓘ เกี่ยวกับ MovieHub",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() => {
                    if (item.includes("รายการโปรด")) {
                      setPage("saved");
                    }
                  }}
                  className="w-full flex justify-between py-4 border-b border-white/5 text-gray-300 text-xs hover:text-blue-400 transition"
                >
                  {item}
                  <span>›</span>
                </button>

              ))}

            </div>

            <button
              onClick={() => setPage("home")}
              className="w-full mt-4 rounded-full bg-[#192b44] border border-white/10 py-3 text-xs"
            >
              ⇥ ออกจากระบบ
            </button>

          </section>
        )}

        {/* BOTTOM NAVIGATION */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-50 bg-[#07111f]/95 backdrop-blur-xl border-t border-white/10">

          <div className="flex justify-around py-3">

            {navItems.map((item) => (

              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`flex flex-col items-center gap-1 min-w-16 transition ${
                  page === item.id
                    ? "text-blue-400"
                    : "text-gray-500 hover:text-white"
                }`}
              >

                <span className="text-xl leading-5">
                  {item.icon}
                </span>

                <span className="text-[9px]">
                  {item.label}
                </span>

                {page === item.id && (
                  <span className="w-5 h-0.5 bg-blue-400 rounded-full" />
                )}

              </button>

            ))}

          </div>

        </nav>

        <div className="h-10" />

        {/* FOOTER */}
        <footer className="text-center text-gray-600 text-[10px] py-5">

          © 2026 MovieHub. All Rights Reserved.

          <p className="mt-2">
            Your Movie Experience Starts Here.
          </p>

        </footer>

      </div>

      {/* MOVIE CARD STYLE */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          background: #030914;
        }

        body {
          margin: 0;
          background: #030914;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          scrollbar-width: none;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }

        img {
          user-select: none;
        }
      `}</style>

    </main>
  );
}

/* MOVIE CARD COMPONENT */
function MovieCard({
  movie,
  favorite,
  onFavorite,
  onClick,
}: {
  movie: (typeof movies)[number];
  favorite: boolean;
  onFavorite: () => void;
  onClick: () => void;
}) {

  return (

    <div className="group min-w-0">

      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#101d30]">

        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <button
          onClick={onFavorite}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur text-base hover:bg-blue-600 transition"
        >
          {favorite ? "♥" : "♡"}
        </button>

        <button
          onClick={onClick}
          className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-400 shadow-lg transition text-[10px]"
        >
          ▶
        </button>

        <div className="absolute bottom-2 left-2">

          <span className="text-yellow-400 text-[9px]">
            ★ {movie.rating}
          </span>

        </div>

      </div>

      <button
        onClick={onClick}
        className="text-left mt-2 w-full"
      >

        <h3 className="font-bold text-[10px] group-hover:text-blue-400 transition truncate">
          {movie.title}
        </h3>

        <p className="text-gray-500 text-[9px] mt-1">
          {movie.year} · {movie.genre}
        </p>

      </button>

    </div>

  );
}
