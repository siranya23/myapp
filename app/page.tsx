
"use client";

import { useMemo, useState } from "react";

const movies = [
  {
    id: 1,
    title: "The Last Voyage",
    year: "2024",
    rating: "8.5",
    genre: "Adventure",
    duration: "2 ชม. 15 นาที",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700",
    description: "การเดินทางครั้งยิ่งใหญ่ที่เต็มไปด้วยความลึกลับ การผจญภัย และเรื่องราวที่ไม่มีวันลืม",
  },
  {
    id: 2,
    title: "Inside Dream",
    year: "2023",
    rating: "8.2",
    genre: "Romance",
    duration: "1 ชม. 48 นาที",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700",
    description: "เรื่องราวความรักและความทรงจำที่แสนงดงาม ท่ามกลางความฝันและความจริง",
  },
  {
    id: 3,
    title: "Shadow World",
    year: "2024",
    rating: "8.7",
    genre: "Action",
    duration: "2 ชม. 05 นาที",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=700",
    description: "โลกแห่งเงามืดที่เต็มไปด้วยปริศนาและการต่อสู้เพื่อความอยู่รอด",
  },
  {
    id: 4,
    title: "Love in Time",
    year: "2023",
    rating: "8.3",
    genre: "Romance",
    duration: "1 ชม. 55 นาที",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=700",
    description: "ความรักที่เดินทางผ่านกาลเวลาและความทรงจำ",
  },
  {
    id: 5,
    title: "Beyond Space",
    year: "2024",
    rating: "9.1",
    genre: "Adventure",
    duration: "2 ชม. 10 นาที",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700",
    description: "การผจญภัยในห้วงอวกาศอันกว้างใหญ่",
  },
  {
    id: 6,
    title: "Dark Night",
    year: "2022",
    rating: "8.4",
    genre: "Action",
    duration: "1 ชม. 50 นาที",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=700",
    description: "เรื่องราวการต่อสู้ท่ามกลางค่ำคืนอันมืดมิด",
  },
];

type Movie = (typeof movies)[number];
type ModalType = "player" | "notifications" | "settings" | "about" | "help" | null;

const categories = ["ทั้งหมด", "Action", "Adventure", "Romance", "Drama"];

const icons = {
  home: "⌂",
  search: "⌕",
  saved: "♡",
  profile: "♙",
};

export default function MovieHub() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("ทั้งหมด");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);
  const [modal, setModal] = useState<ModalType>(null);
  const [toast, setToast] = useState("");
  const [history, setHistory] = useState<number[]>([]);
  const [playing, setPlaying] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchCategory =
        category === "ทั้งหมด" || movie.genre === category;

      const matchSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [category, search]);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2300);
  };

  const navigate = (target: string) => {
    setPage(target);
    setActiveTab(target);
    setSearch("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    setPage("detail");
    setActiveTab("detail");
    setPlaying(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFavorite = (movie: Movie) => {
    const exists = favorites.includes(movie.id);

    setFavorites((prev) =>
      exists
        ? prev.filter((id) => id !== movie.id)
        : [...prev, movie.id]
    );

    notify(
      exists
        ? "นำออกจากรายการโปรดแล้ว"
        : "เพิ่มลงรายการโปรดแล้ว ♥"
    );
  };

  const playMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    setHistory((prev) =>
      [movie.id, ...prev.filter((id) => id !== movie.id)].slice(0, 10)
    );
    setPlaying(true);
    setModal("player");
  };

  const goBack = () => {
    setModal(null);
    setPage("home");
    setActiveTab("home");
  };

  return (
    <main className={`${darkMode ? "bg-[#050b17] text-white" : "bg-slate-100 text-slate-900"} min-h-screen w-full transition-colors duration-300`}>

      <div className="relative mx-auto w-full max-w-[390px] min-h-[882px] overflow-hidden">

        {/* BACKGROUND */}
        <div className="fixed pointer-events-none inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 px-5 pt-5 pb-28">

          {/* HEADER */}
          <header className="flex items-center justify-between mb-6">

            <button
              onClick={() => navigate("home")}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-xl shadow-lg shadow-blue-500/30 group-active:scale-90 transition">
                🎬
              </div>

              <div className="text-left">
                <h1 className="text-xl font-black tracking-tight">
                  Movie<span className="text-blue-400">Hub</span>
                </h1>
                <p className="text-[8px] tracking-[2px] opacity-50">
                  MOVIE STREAMING
                </p>
              </div>
            </button>

            <div className="flex gap-2">

              <button
                onClick={() => navigate("search")}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/30 transition text-lg"
                aria-label="ค้นหา"
              >
                ⌕
              </button>

              <button
                onClick={() => setModal("notifications")}
                className="relative w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/30 transition"
                aria-label="แจ้งเตือน"
              >
                ♧
                {notificationsEnabled && (
                  <span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full" />
                )}
              </button>

            </div>
          </header>

          {/* HOME */}
          {page === "home" && (
            <div className="page-animation">

              {/* HERO */}
              <section className="relative h-[285px] rounded-[22px] overflow-hidden border border-white/10 shadow-2xl shadow-blue-950/30">

                <img
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1000"
                  alt="Featured movie"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#030914]/65 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-red-600 px-2 py-1 rounded text-[8px] font-bold">
                    FEATURED
                  </span>
                  <span className="text-[9px] text-white/70">
                    MOVIE OF THE DAY
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">

                  <p className="text-blue-400 text-[9px] tracking-[3px] font-bold">
                    EXCLUSIVE COLLECTION
                  </p>

                  <h2 className="text-[29px] font-black leading-tight mt-1">
                    AVENGERS
                    <br />
                    <span className="text-blue-400">ENDGAME</span>
                  </h2>

                  <div className="flex gap-3 text-[9px] text-slate-300 mt-2">
                    <span className="text-yellow-400">★ 9.0</span>
                    <span>2024</span>
                    <span>Action</span>
                    <span>2 ชม. 15 นาที</span>
                  </div>

                  <p className="text-[10px] text-slate-300 leading-5 mt-2 line-clamp-2">
                    สัมผัสประสบการณ์ภาพยนตร์สุดยิ่งใหญ่
                    กับการผจญภัยที่คุณไม่ควรพลาด
                  </p>

                  <div className="flex gap-2 mt-3">

                    <button
                      onClick={() => playMovie(movies[0])}
                      className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full px-4 py-2.5 text-[10px] font-bold shadow-lg shadow-blue-500/30 active:scale-95 transition"
                    >
                      ▶ รับชมเลย
                    </button>

                    <button
                      onClick={() => toggleFavorite(movies[0])}
                      className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2.5 text-[10px] active:scale-95 transition"
                    >
                      {favorites.includes(1) ? "♥ บันทึกแล้ว" : "♡ บันทึก"}
                    </button>

                  </div>
                </div>
              </section>

              {/* CATEGORY */}
              <section className="mt-7">

                <SectionTitle
                  title="หมวดหมู่"
                  subtitle="เลือกแนวหนังที่คุณชอบ"
                  action="ทั้งหมด"
                  onAction={() => navigate("search")}
                />

                <div className="grid grid-cols-4 gap-2 mt-4">

                  {[
                    { icon: "⚔", name: "แอ็กชัน", genre: "Action" },
                    { icon: "🌌", name: "ผจญภัย", genre: "Adventure" },
                    { icon: "🎭", name: "ดราม่า", genre: "Drama" },
                    { icon: "♡", name: "โรแมนติก", genre: "Romance" },
                  ].map((item) => (

                    <button
                      key={item.genre}
                      onClick={() => {
                        setCategory(item.genre);
                        navigate("search");
                      }}
                      className="bg-gradient-to-b from-[#152641] to-[#0d192b] border border-white/5 rounded-2xl py-4 flex flex-col items-center gap-2 hover:border-blue-400/50 hover:-translate-y-1 transition duration-300"
                    >
                      <span className="text-2xl text-blue-300">
                        {item.icon}
                      </span>
                      <span className="text-[9px] font-medium">
                        {item.name}
                      </span>
                    </button>

                  ))}

                </div>
              </section>

              {/* NEW MOVIES */}
              <section className="mt-7">

                <SectionTitle
                  title="หนังมาใหม่"
                  subtitle="ภาพยนตร์ที่กำลังได้รับความนิยม"
                  action="ดูทั้งหมด"
                  onAction={() => navigate("search")}
                />

                <div className="grid grid-cols-3 gap-3 mt-4">

                  {movies.slice(0, 3).map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      favorite={favorites.includes(movie.id)}
                      onFavorite={() => toggleFavorite(movie)}
                      onClick={() => openMovie(movie)}
                    />
                  ))}

                </div>
              </section>

              {/* POPULAR */}
              <section className="mt-7">

                <SectionTitle
                  title="ยอดนิยม"
                  subtitle="หนังที่ไม่ควรพลาด"
                  action="ดูทั้งหมด"
                  onAction={() => navigate("search")}
                />

                <div className="space-y-3 mt-4">

                  {movies.slice(3, 6).map((movie) => (
                    <MovieRow
                      key={movie.id}
                      movie={movie}
                      favorite={favorites.includes(movie.id)}
                      onFavorite={() => toggleFavorite(movie)}
                      onClick={() => openMovie(movie)}
                    />
                  ))}

                </div>
              </section>

            </div>
          )}

          {/* SEARCH */}
          {page === "search" && (
            <div className="page-animation">

              <PageHeading
                title="ค้นหาภาพยนตร์"
                subtitle="ค้นพบเรื่องราวที่คุณชื่นชอบ"
              />

              <div className="relative mt-6">

                <span className="absolute left-4 top-3 text-blue-400 text-xl">
                  ⌕
                </span>

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ค้นหาชื่อภาพยนตร์..."
                  className="w-full bg-[#101e32] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-xs outline-none focus:border-blue-500 transition placeholder:text-slate-500"
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-3 text-slate-400"
                  >
                    ✕
                  </button>
                )}

              </div>

              <p className="text-xs font-bold mt-6 mb-3">
                ประเภทภาพยนตร์
              </p>

              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`shrink-0 rounded-full px-4 py-2 text-[10px] transition ${
                      category === item
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                        : "bg-[#15243a] text-slate-400 border border-white/5"
                    }`}
                  >
                    {item}
                  </button>
                ))}

              </div>

              <div className="flex justify-between items-center mt-5 mb-3">
                <h3 className="font-bold text-sm">ผลการค้นหา</h3>
                <span className="text-[10px] text-slate-500">
                  {filteredMovies.length} เรื่อง
                </span>
              </div>

              <div className="space-y-3">

                {filteredMovies.map((movie) => (
                  <MovieRow
                    key={movie.id}
                    movie={movie}
                    favorite={favorites.includes(movie.id)}
                    onFavorite={() => toggleFavorite(movie)}
                    onClick={() => openMovie(movie)}
                  />
                ))}

                {filteredMovies.length === 0 && (
                  <EmptyState
                    icon="⌕"
                    title="ไม่พบภาพยนตร์"
                    description="ลองค้นหาด้วยชื่อเรื่องอื่น"
                    button="ล้างการค้นหา"
                    onClick={() => {
                      setSearch("");
                      setCategory("ทั้งหมด");
                    }}
                  />
                )}

              </div>
            </div>
          )}

          {/* MOVIE DETAIL */}
          {page === "detail" && (
            <div className="page-animation">

              <button
                onClick={() => navigate("home")}
                className="text-slate-400 text-xs mb-4 hover:text-blue-400 transition"
              >
                ← กลับหน้าหลัก
              </button>

              <div className="relative h-[300px] rounded-[22px] overflow-hidden">

                <img
                  src={selectedMovie.image}
                  alt={selectedMovie.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050b17] via-black/10 to-black/20" />

                <button
                  onClick={() => playMovie(selectedMovie)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-600/90 border border-white/30 shadow-xl shadow-blue-600/40 text-xl hover:scale-110 transition"
                >
                  ▶
                </button>

                <button
                  onClick={() => toggleFavorite(selectedMovie)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur border border-white/20"
                >
                  {favorites.includes(selectedMovie.id) ? "♥" : "♡"}
                </button>

                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 rounded-full px-3 py-1 text-[9px]">
                    {selectedMovie.genre}
                  </span>
                </div>

              </div>

              <div className="mt-5">

                <h2 className="text-2xl font-black">
                  {selectedMovie.title}
                </h2>

                <div className="flex gap-3 text-[10px] text-slate-400 mt-3">
                  <span className="text-yellow-400">
                    ★ {selectedMovie.rating}
                  </span>
                  <span>{selectedMovie.year}</span>
                  <span>{selectedMovie.duration}</span>
                </div>

                <div className="h-px bg-white/10 my-5" />

                <h3 className="font-bold text-sm mb-3">
                  เรื่องย่อ
                </h3>

                <p className="text-xs text-slate-400 leading-7">
                  {selectedMovie.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6">

                  <button
                    onClick={() => playMovie(selectedMovie)}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl py-3 text-xs font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition"
                  >
                    ▶ รับชมตัวอย่าง
                  </button>

                  <button
                    onClick={() => toggleFavorite(selectedMovie)}
                    className="bg-[#15243a] border border-white/10 rounded-xl py-3 text-xs font-bold active:scale-95 transition"
                  >
                    {favorites.includes(selectedMovie.id)
                      ? "♥ บันทึกแล้ว"
                      : "♡ เพิ่มรายการโปรด"}
                  </button>

                </div>

              </div>

              <section className="mt-8">

                <SectionTitle
                  title="คุณอาจชอบ"
                  subtitle="ภาพยนตร์แนะนำ"
                  action="ดูทั้งหมด"
                  onAction={() => navigate("search")}
                />

                <div className="grid grid-cols-3 gap-3 mt-4">

                  {movies
                    .filter((m) => m.id !== selectedMovie.id)
                    .slice(0, 3)
                    .map((movie) => (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        favorite={favorites.includes(movie.id)}
                        onFavorite={() => toggleFavorite(movie)}
                        onClick={() => openMovie(movie)}
                      />
                    ))}

                </div>
              </section>

            </div>
          )}

          {/* FAVORITES */}
          {page === "saved" && (
            <div className="page-animation">

              <PageHeading
                title="รายการโปรด"
                subtitle="ภาพยนตร์ที่คุณบันทึกไว้"
              />

              <div className="flex justify-between items-center mt-6 mb-4">
                <span className="text-xs text-slate-400">
                  บันทึกไว้ {favorites.length} เรื่อง
                </span>

                {favorites.length > 0 && (
                  <button
                    onClick={() => {
                      setFavorites([]);
                      notify("ล้างรายการโปรดทั้งหมดแล้ว");
                    }}
                    className="text-[10px] text-red-400"
                  >
                    ล้างทั้งหมด
                  </button>
                )}
              </div>

              {favorites.length > 0 ? (
                <div className="grid grid-cols-3 gap-3">
                  {movies
                    .filter((movie) => favorites.includes(movie.id))
                    .map((movie) => (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        favorite={true}
                        onFavorite={() => toggleFavorite(movie)}
                        onClick={() => openMovie(movie)}
                      />
                    ))}
                </div>
              ) : (
                <EmptyState
                  icon="♡"
                  title="ยังไม่มีรายการโปรด"
                  description="เพิ่มภาพยนตร์ที่คุณชื่นชอบไว้ที่นี่"
                  button="ค้นหาภาพยนตร์"
                  onClick={() => navigate("search")}
                />
              )}

            </div>
          )}

          {/* PROFILE */}
          {page === "profile" && (
            <div className="page-animation">

              <PageHeading
                title="โปรไฟล์ของฉัน"
                subtitle="จัดการข้อมูลบัญชีของคุณ"
              />

              <div className="mt-6 rounded-[22px] bg-gradient-to-br from-[#18365c] to-[#0c1728] border border-blue-400/20 p-5">

                <div className="flex items-center gap-4">

                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                  />

                  <div>
                    <h2 className="font-bold text-lg">Siranya</h2>
                    <p className="text-[10px] text-blue-300 mt-1">
                      ✦ MovieHub Member
                    </p>
                    <p className="text-[9px] text-slate-400 mt-1">
                      สมาชิกตั้งแต่ปี 2026
                    </p>
                  </div>

                  <button
                    onClick={() => notify("ข้อมูลโปรไฟล์ตัวอย่าง")}
                    className="ml-auto text-blue-300 text-lg"
                  >
                    ✎
                  </button>

                </div>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-2 mt-4">

                {[
                  ["▶", String(history.length), "รับชม"],
                  ["♥", String(favorites.length), "รายการโปรด"],
                  ["◷", "48 ชม.", "เวลารับชม"],
                ].map(([icon, value, label]) => (

                  <div
                    key={label}
                    className="bg-[#111f33] border border-white/5 rounded-2xl py-4 text-center"
                  >
                    <p className="text-blue-400 text-lg">{icon}</p>
                    <p className="font-bold text-sm mt-1">{value}</p>
                    <p className="text-[9px] text-slate-500 mt-1">{label}</p>
                  </div>

                ))}

              </div>

              {/* MENU */}
              <div className="mt-7">

                <p className="text-[10px] text-slate-500 font-bold tracking-widest mb-3">
                  ACCOUNT
                </p>

                <div className="bg-[#101d30] rounded-2xl border border-white/5 px-4">

                  <ProfileButton
                    icon="♡"
                    title="รายการโปรด"
                    subtitle="ภาพยนตร์ที่บันทึกไว้"
                    onClick={() => navigate("saved")}
                  />

                  <ProfileButton
                    icon="◷"
                    title="ประวัติการรับชม"
                    subtitle="ภาพยนตร์ที่เคยรับชม"
                    onClick={() => notify(
                      history.length
                        ? `คุณเคยรับชม ${history.length} เรื่อง`
                        : "ยังไม่มีประวัติการรับชม"
                    )}
                  />

                  <ProfileButton
                    icon="⚙"
                    title="การตั้งค่า"
                    subtitle="ปรับแต่งแอปพลิเคชัน"
                    onClick={() => setModal("settings")}
                  />

                  <ProfileButton
                    icon="?"
                    title="ช่วยเหลือ"
                    subtitle="คำถามที่พบบ่อย"
                    onClick={() => setModal("help")}
                  />

                  <ProfileButton
                    icon="ⓘ"
                    title="เกี่ยวกับ MovieHub"
                    subtitle="ข้อมูลแอปพลิเคชัน"
                    onClick={() => setModal("about")}
                  />

                </div>

              </div>

              <button
                onClick={() => {
                  setFavorites([]);
                  setHistory([]);
                  navigate("home");
                  notify("ออกจากโหมดทดลองแล้ว");
                }}
                className="w-full mt-6 rounded-xl py-3 bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold hover:bg-red-500/20 transition"
              >
                ⇥ ออกจากระบบทดลอง
              </button>

            </div>
          )}

        </div>

        {/* BOTTOM NAVIGATION */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-40 bg-[#081426]/95 backdrop-blur-xl border-t border-white/10">

          <div className="grid grid-cols-4 px-2 py-3">

            {[
              ["home", "⌂", "หน้าหลัก"],
              ["search", "⌕", "ค้นหา"],
              ["saved", "♡", "รายการโปรด"],
              ["profile", "♙", "โปรไฟล์"],
            ].map(([id, icon, label]) => (

              <button
                key={id}
                onClick={() => navigate(id)}
                className={`relative flex flex-col items-center gap-1 transition ${
                  page === id
                    ? "text-blue-400"
                    : "text-slate-500 hover:text-white"
                }`}
              >

                <span className={`text-xl transition ${page === id ? "scale-110" : ""}`}>
                  {icon}
                </span>

                <span className="text-[9px]">
                  {label}
                </span>

                {page === id && (
                  <span className="absolute -bottom-3 w-7 h-[2px] rounded-full bg-blue-400 shadow-[0_0_10px_#3b82f6]" />
                )}

              </button>

            ))}

          </div>
        </nav>

        {/* MODALS */}
        {modal && (
          <div
            className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm flex items-center justify-center p-5"
            onClick={() => {
              setModal(null);
              setPlaying(false);
            }}
          >

            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[350px] rounded-3xl bg-[#101d30] border border-white/10 p-5 shadow-2xl modal-animation"
            >

              <div className="flex justify-between items-center mb-5">

                <h2 className="font-bold text-base">
                  {modal === "player" && "Movie Player"}
                  {modal === "notifications" && "การแจ้งเตือน"}
                  {modal === "settings" && "การตั้งค่า"}
                  {modal === "about" && "เกี่ยวกับ MovieHub"}
                  {modal === "help" && "ศูนย์ช่วยเหลือ"}
                </h2>

                <button
                  onClick={() => {
                    setModal(null);
                    setPlaying(false);
                  }}
                  className="w-8 h-8 rounded-full bg-white/10 text-slate-300"
                >
                  ✕
                </button>

              </div>

              {modal === "player" && (
                <div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">

                    <img
                      src={selectedMovie.image}
                      alt={selectedMovie.title}
                      className="w-full h-full object-cover opacity-50"
                    />

                    <button
                      onClick={() => setPlaying(!playing)}
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-blue-600 text-xl"
                    >
                      {playing ? "Ⅱ" : "▶"}
                    </button>

                    <span className="absolute bottom-3 left-3 text-[9px]">
                      DEMO PLAYER
                    </span>

                  </div>

                  <h3 className="font-bold mt-4 text-sm">
                    {selectedMovie.title}
                  </h3>

                  <p className="text-[10px] text-slate-400 mt-2">
                    {playing
                      ? "กำลังเล่นตัวอย่างในโหมด Prototype"
                      : "หยุดเล่นชั่วคราว"}
                  </p>

                  <div className="h-1 bg-white/10 rounded-full mt-4">
                    <div className="h-full w-1/3 bg-blue-500 rounded-full" />
                  </div>

                  <p className="text-[9px] text-slate-500 mt-3 text-center">
                    ระบบเล่นวิดีโอจริงยังไม่เชื่อมต่อ
                  </p>

                </div>
              )}

              {modal === "notifications" && (
                <div className="space-y-3">

                  <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                    <p className="text-xs font-bold text-blue-300">
                      ✦ ยินดีต้อนรับสู่ MovieHub
                    </p>
                    <p className="text-[10px] text-slate-400 mt-2">
                      พบกับภาพยนตร์เรื่องใหม่และประสบการณ์การรับชมที่ยอดเยี่ยม
                    </p>
                  </div>

                  <button
                    onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                    className="w-full p-3 bg-white/5 rounded-xl text-xs flex justify-between"
                  >
                    การแจ้งเตือน
                    <span className="text-blue-400">
                      {notificationsEnabled ? "เปิดอยู่" : "ปิดอยู่"}
                    </span>
                  </button>

                </div>
              )}

              {modal === "settings" && (
                <div className="space-y-3">

                  <SettingRow
                    title="โหมดมืด"
                    subtitle="ปรับเปลี่ยนธีมของแอป"
                    enabled={darkMode}
                    onClick={() => setDarkMode(!darkMode)}
                  />

                  <SettingRow
                    title="การแจ้งเตือน"
                    subtitle="รับข่าวสารภาพยนตร์"
                    enabled={notificationsEnabled}
                    onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  />

                  <button
                    onClick={() => {
                      setCategory("ทั้งหมด");
                      setSearch("");
                      notify("คืนค่าตัวกรองเรียบร้อย");
                    }}
                    className="w-full text-left bg-white/5 p-3 rounded-xl text-xs"
                  >
                    ↻ คืนค่าการค้นหา
                  </button>

                </div>
              )}

              {modal === "about" && (
                <div className="text-center py-3">

                  <div className="text-5xl mb-4">🎬</div>

                  <h3 className="text-xl font-black">
                    Movie<span className="text-blue-400">Hub</span>
                  </h3>

                  <p className="text-xs text-slate-400 mt-3">
                    Your Cinematic World
                  </p>

                  <p className="text-[10px] text-slate-500 mt-4">
                    Version 1.0.0 · Prototype 2026
                  </p>

                </div>
              )}

              {modal === "help" && (
                <div className="space-y-3">

                  {[
                    ["ค้นหาภาพยนตร์อย่างไร?", "เข้าเมนูค้นหาและพิมพ์ชื่อภาพยนตร์"],
                    ["บันทึกหนังอย่างไร?", "กดปุ่มรูปหัวใจบนภาพยนตร์"],
                    ["ดูรายการโปรดที่ไหน?", "เลือกเมนูรายการโปรดด้านล่าง"],
                    ["เล่นหนังได้จริงไหม?", "ขณะนี้เป็นระบบจำลองสำหรับ Prototype"],
                  ].map(([q, a]) => (
                    <div key={q} className="bg-white/5 rounded-xl p-3">
                      <p className="text-xs font-bold">{q}</p>
                      <p className="text-[10px] text-slate-400 mt-2">{a}</p>
                    </div>
                  ))}

                </div>
              )}

            </div>
          </div>
        )}

        {/* TOAST */}
        {toast && (
          <div className="fixed z-[80] bottom-24 left-1/2 -translate-x-1/2 w-max max-w-[90%] bg-[#172b45] border border-blue-400/30 shadow-xl rounded-full px-5 py-3 text-xs text-white toast-animation">
            <span className="text-blue-400 mr-2">✓</span>
            {toast}
          </div>
        )}

        <footer className="relative text-center text-[9px] text-slate-600 py-5">
          © 2026 MovieHub · Your Cinematic World
        </footer>

      </div>

      {/* GLOBAL STYLE */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: #050b17;
        }

        body {
          margin: 0;
          background: #050b17;
        }

        button {
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        button:active {
          transform: scale(.96);
        }

        input {
          color: white;
        }

        .page-animation {
          animation: pageIn .3s ease-out;
        }

        .modal-animation {
          animation: modalIn .25s ease-out;
        }

        .toast-animation {
          animation: toastIn .25s ease-out;
        }

        @keyframes pageIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(.94) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes toastIn {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>

    </main>
  );
}

/* SECTION TITLE */
function SectionTitle({
  title,
  subtitle,
  action,
  onAction,
}: {
  title: string;
  subtitle: string;
  action: string;
  onAction: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-bold text-base">{title}</h2>
        <p className="text-[9px] text-slate-500 mt-1">{subtitle}</p>
      </div>

      <button
        onClick={onAction}
        className="text-[10px] text-blue-400 hover:text-blue-300"
      >
        {action} →
      </button>
    </div>
  );
}

/* PAGE HEADING */
function PageHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="text-[10px] text-slate-500 mt-2">{subtitle}</p>
    </div>
  );
}

/* MOVIE CARD */
function MovieCard({
  movie,
  favorite,
  onFavorite,
  onClick,
}: {
  movie: Movie;
  favorite: boolean;
  onFavorite: () => void;
  onClick: () => void;
}) {
  return (
    <div className="group min-w-0">

      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#14243a]">

        <button onClick={onClick} className="w-full h-full block">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </button>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <button
          onClick={onFavorite}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur text-sm hover:bg-blue-600 transition"
        >
          {favorite ? "♥" : "♡"}
        </button>

        <button
          onClick={onClick}
          className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] shadow-lg"
        >
          ▶
        </button>

        <span className="absolute bottom-2 left-2 text-[9px] text-yellow-400 pointer-events-none">
          ★ {movie.rating}
        </span>

      </div>

      <button onClick={onClick} className="text-left w-full mt-2">
        <h3 className="text-[10px] font-bold truncate hover:text-blue-400 transition">
          {movie.title}
        </h3>

        <p className="text-[9px] text-slate-500 mt-1">
          {movie.year} · {movie.genre}
        </p>
      </button>

    </div>
  );
}

/* MOVIE ROW */
function MovieRow({
  movie,
  favorite,
  onFavorite,
  onClick,
}: {
  movie: Movie;
  favorite: boolean;
  onFavorite: () => void;
  onClick: () => void;
}) {
  return (
    <div className="flex gap-3 bg-[#101d30] border border-white/5 rounded-2xl p-2.5">

      <button onClick={onClick} className="shrink-0">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-[95px] h-[105px] rounded-xl object-cover"
        />
      </button>

      <div className="flex-1 min-w-0 py-1">

        <button onClick={onClick} className="text-left">
          <h3 className="text-xs font-bold truncate">
            {movie.title}
          </h3>
        </button>

        <p className="text-[10px] mt-2">
          <span className="text-yellow-400">★ {movie.rating}</span>
          <span className="text-slate-500"> · {movie.year}</span>
        </p>

        <p className="text-[9px] text-slate-400 mt-2 leading-4 line-clamp-2">
          {movie.description}
        </p>

        <div className="flex gap-3 mt-2">

          <button
            onClick={onClick}
            className="text-[9px] text-blue-400"
          >
            ดูรายละเอียด →
          </button>

          <button
            onClick={onFavorite}
            className="text-[9px] text-slate-400"
          >
            {favorite ? "♥" : "♡"}
          </button>

        </div>

      </div>
    </div>
  );
}

/* EMPTY STATE */
function EmptyState({
  icon,
  title,
  description,
  button,
  onClick,
}: {
  icon: string;
  title: string;
  description: string;
  button: string;
  onClick: () => void;
}) {
  return (
    <div className="text-center py-20">

      <div className="text-5xl text-blue-400 mb-5">{icon}</div>

      <h3 className="font-bold text-sm">{title}</h3>

      <p className="text-[10px] text-slate-500 mt-2">
        {description}
      </p>

      <button
        onClick={onClick}
        className="mt-5 px-5 py-3 rounded-full bg-blue-600 text-[10px] font-bold"
      >
        {button}
      </button>

    </div>
  );
}

/* PROFILE BUTTON */
function ProfileButton({
  icon,
  title,
  subtitle,
  onClick,
}: {
  icon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 py-4 border-b border-white/5 text-left hover:bg-white/5 transition"
    >

      <span className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg">
        {icon}
      </span>

      <span className="flex-1">
        <span className="block text-xs font-bold">{title}</span>
        <span className="block text-[9px] text-slate-500 mt-1">
          {subtitle}
        </span>
      </span>

      <span className="text-slate-500">›</span>

    </button>
  );
}

/* SETTING ROW */
function SettingRow({
  title,
  subtitle,
  enabled,
  onClick,
}: {
  title: string;
  subtitle: string;
  enabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center bg-white/5 rounded-xl p-3 text-left"
    >

      <span>
        <span className="block text-xs font-bold">{title}</span>
        <span className="block text-[9px] text-slate-500 mt-1">
          {subtitle}
        </span>
      </span>

      <span
        className={`w-10 h-5 rounded-full p-0.5 transition ${
          enabled ? "bg-blue-600" : "bg-slate-600"
        }`}
      >
        <span
          className={`block w-4 h-4 bg-white rounded-full transition ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>

    </button>
  );
}
