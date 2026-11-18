
"use client";

import { useMemo, useState } from "react";

type Movie = {
  id: number;
  title: string;
  titleTH: string;
  year: number;
  rating: string;
  genre: string;
  duration: string;
  image: string;
  description: string;
  country: string;
  featured?: boolean;
};

const movies: Movie[] = [
  {
    id: 1,
    title: "The Last Voyage",
    titleTH: "การเดินทางครั้งสุดท้าย",
    year: 2026,
    rating: "8.9",
    genre: "Action",
    duration: "2h 10m",
    image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    description: "การผจญภัยครั้งยิ่งใหญ่ที่เปลี่ยนชะตาของโลก เมื่อความหวังสุดท้ายอยู่ในมือของคนธรรมดา",
    country: "International",
    featured: true,
  },
  {
    id: 2,
    title: "Inside Dream",
    titleTH: "มหัศจรรย์โลกแห่งฝัน",
    year: 2025,
    rating: "8.5",
    genre: "Animation",
    duration: "1h 45m",
    image: "https://image.tmdb.org/t/p/w500/4JpH9j8j2z9a1Yx3m0v7n5.jpg",
    description: "เรื่องราวการเดินทางในโลกแห่งจินตนาการและความทรงจำ",
    country: "International",
  },
  {
    id: 3,
    title: "Shadow World",
    titleTH: "โลกเงามืด",
    year: 2026,
    rating: "8.7",
    genre: "Horror",
    duration: "1h 58m",
    image: "https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    description: "ความลับที่ซ่อนอยู่ในเมืองเล็ก ๆ กำลังจะถูกเปิดเผย",
    country: "International",
  },
  {
    id: 4,
    title: "Love in Time",
    titleTH: "รักข้ามเวลา",
    year: 2025,
    rating: "8.2",
    genre: "Romance",
    duration: "1h 52m",
    image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    description: "ความรักที่ต้องเดินทางผ่านกาลเวลาเพื่อค้นหาคำตอบ",
    country: "International",
  },
  {
    id: 5,
    title: "Beyond Space",
    titleTH: "เหนือจักรวาล",
    year: 2026,
    rating: "9.1",
    genre: "Sci-Fi",
    duration: "2h 20m",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description: "การเดินทางสู่ดินแดนอันไกลโพ้นที่มนุษย์ไม่เคยค้นพบ",
    country: "International",
  },
  {
    id: 6,
    title: "Dark Night",
    titleTH: "คืนปริศนา",
    year: 2025,
    rating: "8.4",
    genre: "Thriller",
    duration: "1h 48m",
    image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    description: "คืนเดียวที่เต็มไปด้วยปริศนาและเหตุการณ์ไม่คาดฝัน",
    country: "International",
  },
  {
    id: 7,
    title: "Thai Story",
    titleTH: "เรื่องเล่าจากเมืองไทย",
    year: 2026,
    rating: "8.6",
    genre: "Drama",
    duration: "1h 55m",
    image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    description: "เรื่องราวชีวิต ความฝัน และความผูกพันของผู้คนในสังคมไทย",
    country: "Thailand",
  },
  {
    id: 8,
    title: "Bangkok Mystery",
    titleTH: "ปริศนากรุงเทพ",
    year: 2025,
    rating: "8.3",
    genre: "Thriller",
    duration: "1h 50m",
    image: "https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    description: "คดีปริศนาที่นำไปสู่ความจริงที่ไม่มีใครคาดคิด",
    country: "Thailand",
  },
  {
    id: 9,
    title: "Funny Day",
    titleTH: "วันวุ่น ๆ",
    year: 2026,
    rating: "8.0",
    genre: "Comedy",
    duration: "1h 40m",
    image: "https://image.tmdb.org/t/p/w500/4JpH9j8j2z9a1Yx3m0v7n5.jpg",
    description: "เรื่องราวสุดป่วนที่เต็มไปด้วยเสียงหัวเราะ",
    country: "Thailand",
  },
  {
    id: 10,
    title: "Adventure Life",
    titleTH: "ชีวิตนักผจญภัย",
    year: 2025,
    rating: "8.8",
    genre: "Adventure",
    duration: "2h 05m",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description: "การผจญภัยครั้งใหม่ที่เต็มไปด้วยความท้าทาย",
    country: "International",
  },
];

const categories = [
  "ทั้งหมด",
  "หนังไทย",
  "Action",
  "Horror",
  "Romance",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Animation",
  "Adventure",
  "Thriller",
];

const navItems = [
  { id: "home", label: "หน้าหลัก", icon: "⌂" },
  { id: "search", label: "ค้นหา", icon: "⌕" },
  { id: "favorites", label: "รายการโปรด", icon: "♡" },
  { id: "profile", label: "โปรไฟล์", icon: "◉" },
];

export default function MovieHub() {
  const [page, setPage] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [category, setCategory] = useState("ทั้งหมด");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showPlayer, setShowPlayer] = useState(false);
  const [toast, setToast] = useState("");

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchCategory =
        category === "ทั้งหมด" ||
        (category === "หนังไทย"
          ? movie.country === "Thailand"
          : movie.genre === category);

      const matchSearch =
        movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie.titleTH.includes(search);

      return matchCategory && matchSearch;
    });
  }, [category, search]);

  const favoriteMovies = movies.filter((movie) =>
    favorites.includes(movie.id)
  );

  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
    setToast(
      favorites.includes(id)
        ? "นำออกจากรายการโปรดแล้ว"
        : "เพิ่มในรายการโปรดแล้ว"
    );
    setTimeout(() => setToast(""), 2200);
  }

  function openMovie(movie: Movie) {
    setSelectedMovie(movie);
    setPage("detail");
  }

  function MovieCard({ movie }: { movie: Movie }) {
    return (
      <div className="movie-card">
        <div className="poster-wrap" onClick={() => openMovie(movie)}>
          <img src={movie.image} alt={movie.titleTH} />
          <span className="rating">★ {movie.rating}</span>
          <span className="poster-play">▶</span>
        </div>
        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(movie.id)}
          aria-label="เพิ่มรายการโปรด"
        >
          {favorites.includes(movie.id) ? "♥" : "♡"}
        </button>
        <div className="movie-info" onClick={() => openMovie(movie)}>
          <h3>{movie.titleTH}</h3>
          <p>{movie.year} · {movie.genre}</p>
        </div>
      </div>
    );
  }

  function MovieSection({
    title,
    items,
  }: {
    title: string;
    items: Movie[];
  }) {
    return (
      <section className="section">
        <div className="section-heading">
          <h2>{title}</h2>
          <button onClick={() => setPage("search")}>ดูทั้งหมด →</button>
        </div>
        <div className="movie-grid">
          {items.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <main className="app">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #070b16;
          color: white;
          font-family: 'Kanit', sans-serif;
        }

        button { font-family: inherit; cursor: pointer; }

        .app {
          min-height: 100vh;
          max-width: 1200px;
          margin: auto;
          padding-bottom: 90px;
          background: #080d1b;
        }

        .topbar {
          height: 75px;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(8,13,27,.95);
          position: sticky;
          top: 0;
          z-index: 20;
          border-bottom: 1px solid #202943;
          backdrop-filter: blur(15px);
        }

        .logo {
          font-size: 27px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .logo span { color: #4d9fff; }

        .top-actions { display: flex; gap: 12px; }

        .icon-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #29334d;
          background: #121b30;
          color: white;
          font-size: 19px;
        }

        .content { padding: 25px 5%; }

        .hero {
          min-height: 380px;
          border-radius: 25px;
          padding: 45px;
          display: flex;
          align-items: end;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(5,10,25,.98), rgba(5,10,25,.3)),
            url('https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg')
            center/cover;
          border: 1px solid #283958;
        }

        .hero-content { max-width: 520px; position: relative; z-index: 1; }

        .tag {
          display: inline-block;
          background: #267cf4;
          padding: 5px 13px;
          border-radius: 20px;
          font-size: 12px;
          margin-bottom: 15px;
        }

        .hero h1 { font-size: clamp(32px, 5vw, 52px); margin: 0 0 8px; }

        .hero p { color: #d0d8e8; line-height: 1.7; }

        .primary-btn {
          border: 0;
          color: white;
          background: linear-gradient(135deg, #2588ff, #6258ed);
          padding: 12px 25px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          margin-top: 12px;
        }

        .section { margin-top: 38px; }

        .section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .section-heading h2 { font-size: 21px; margin: 0; }

        .section-heading button {
          color: #6eacff;
          border: 0;
          background: none;
        }

        .movie-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 17px;
        }

        .movie-card { position: relative; min-width: 0; }

        .poster-wrap {
          position: relative;
          aspect-ratio: 2/3;
          overflow: hidden;
          border-radius: 13px;
          cursor: pointer;
          background: #17243d;
        }

        .poster-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .3s;
        }

        .poster-wrap:hover img { transform: scale(1.07); }

        .rating {
          position: absolute;
          top: 8px;
          left: 8px;
          padding: 4px 8px;
          border-radius: 7px;
          background: rgba(0,0,0,.75);
          color: #ffd45a;
          font-size: 11px;
        }

        .poster-play {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          opacity: 0;
          background: rgba(0,0,0,.35);
          font-size: 30px;
          transition: opacity .2s;
        }

        .poster-wrap:hover .poster-play { opacity: 1; }

        .favorite-btn {
          position: absolute;
          right: 8px;
          top: 8px;
          width: 30px;
          height: 30px;
          border: 0;
          border-radius: 50%;
          background: rgba(0,0,0,.65);
          color: #ff5b83;
          font-size: 18px;
          z-index: 2;
        }

        .movie-info { cursor: pointer; padding-top: 9px; }

        .movie-info h3 {
          font-size: 14px;
          font-weight: 500;
          margin: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .movie-info p { color: #8996ae; font-size: 11px; margin: 3px 0; }

        .category-list {
          display: flex;
          gap: 9px;
          overflow-x: auto;
          padding-bottom: 10px;
          scrollbar-width: none;
        }

        .category {
          flex-shrink: 0;
          padding: 9px 18px;
          border: 1px solid #293650;
          border-radius: 30px;
          color: #c0cce0;
          background: #111a2d;
          font-size: 13px;
        }

        .category.active {
          background: #287cf0;
          border-color: #287cf0;
          color: white;
        }

        .search-box {
          width: 100%;
          padding: 14px 18px;
          border-radius: 13px;
          border: 1px solid #293650;
          background: #111a2d;
          color: white;
          outline: none;
          font-family: inherit;
          margin-bottom: 22px;
        }

        .detail {
          display: grid;
          grid-template-columns: 270px 1fr;
          gap: 35px;
          align-items: start;
          padding-top: 25px;
        }

        .detail img {
          width: 100%;
          border-radius: 18px;
        }

        .detail h1 { font-size: 34px; margin: 0 0 8px; }

        .detail p { color: #aab6ca; line-height: 1.8; }

        .back-btn {
          background: none;
          color: #8bbaff;
          border: 0;
          font-size: 15px;
          padding: 10px 0;
        }

        .empty {
          text-align: center;
          color: #91a0b9;
          padding: 70px 15px;
        }

        .empty div { font-size: 45px; margin-bottom: 12px; }

        .profile-card {
          padding: 25px;
          border: 1px solid #283650;
          border-radius: 18px;
          background: #111a2d;
          text-align: center;
        }

        .avatar {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          background: linear-gradient(135deg,#2588ff,#7657e9);
          display: grid;
          place-items: center;
          margin: auto auto 12px;
          font-size: 30px;
        }

        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(100%, 1200px);
          display: flex;
          justify-content: space-around;
          padding: 12px 8px calc(12px + env(safe-area-inset-bottom));
          background: rgba(9,15,29,.96);
          border-top: 1px solid #26314a;
          z-index: 30;
          backdrop-filter: blur(15px);
        }

        .nav-item {
          border: 0;
          background: none;
          color: #8592a9;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          font-size: 11px;
        }

        .nav-item span { font-size: 23px; }

        .nav-item.active { color: #55a2ff; }

        .toast {
          position: fixed;
          bottom: 90px;
          left: 50%;
          transform: translateX(-50%);
          background: #1d3150;
          border: 1px solid #3c6599;
          border-radius: 10px;
          padding: 10px 20px;
          z-index: 50;
        }

        .modal {
          position: fixed;
          inset: 0;
          z-index: 60;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(0,0,0,.85);
        }

        .modal-box {
          width: min(500px, 100%);
          background: #111a2d;
          border: 1px solid #34415c;
          border-radius: 20px;
          padding: 25px;
          text-align: center;
        }

        .player-screen {
          aspect-ratio: 16/9;
          background: #050912;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-size: 42px;
          margin-bottom: 15px;
        }

        .muted { color: #91a0b9; font-size: 13px; }

        @media (max-width: 850px) {
          .movie-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        @media (max-width: 600px) {
          .app { max-width: 100%; }
          .topbar { height: 62px; padding: 0 17px; }
          .logo { font-size: 23px; }
          .content { padding: 18px 16px; }
          .hero { min-height: 310px; padding: 25px; border-radius: 18px; }
          .hero h1 { font-size: 32px; }
          .movie-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
          .movie-info h3 { font-size: 12px; }
          .detail { grid-template-columns: 115px 1fr; gap: 17px; }
          .detail h1 { font-size: 22px; }
          .detail p { font-size: 13px; }
          .primary-btn { padding: 10px 17px; }
        }

        @media (max-width: 360px) {
          .movie-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>

      <header className="topbar">
        <div className="logo">
          Movie<span>Hub</span>
        </div>
        <div className="top-actions">
          <button
            className="icon-button"
            onClick={() => setPage("search")}
            aria-label="ค้นหา"
          >
            ⌕
          </button>
          <button
            className="icon-button"
            onClick={() => setPage("favorites")}
            aria-label="รายการโปรด"
          >
            ♡
          </button>
        </div>
      </header>

      <div className="content">
        {page === "home" && (
          <>
            <section className="hero">
              <div className="hero-content">
                <span className="tag">MOVIEHUB ORIGINAL</span>
                <h1>ค้นพบโลกแห่งภาพยนตร์</h1>
                <p>
                  รวมความบันเทิงจากหนังไทยและต่างประเทศ
                  ค้นพบเรื่องโปรดของคุณได้ทุกวัน
                </p>
                <button
                  className="primary-btn"
                  onClick={() => openMovie(movies[0])}
                >
                  ▶ สำรวจภาพยนตร์
                </button>
              </div>
            </section>

            <section className="section">
              <div className="section-heading">
                <h2>หมวดหมู่ภาพยนตร์</h2>
              </div>
              <div className="category-list">
                {categories.map((item) => (
                  <button
                    key={item}
                    className={`category ${category === item ? "active" : ""}`}
                    onClick={() => {
                      setCategory(item);
                      setPage("search");
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            <MovieSection title="🔥 ภาพยนตร์แนะนำ" items={movies.slice(0, 5)} />
            <MovieSection title="🇹🇭 ภาพยนตร์ไทย" items={movies.filter(m => m.country === "Thailand")} />
            <MovieSection title="⭐ คะแนนยอดนิยม" items={[...movies].sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 5)} />
            <MovieSection title="🆕 เพิ่มเข้ามาใหม่" items={movies.filter(m => m.year === 2026)} />
          </>
        )}

        {page === "search" && (
          <>
            <h1>ค้นหาภาพยนตร์</h1>
            <p className="muted">ค้นหาหนังเรื่องโปรดของคุณ</p>
            <input
              className="search-box"
              placeholder="ค้นหาชื่อหนัง..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="category-list">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`category ${category === item ? "active" : ""}`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <MovieSection title="ผลการค้นหา" items={filteredMovies} />
            {filteredMovies.length === 0 && (
              <div className="empty">
                <div>🎬</div>
                ไม่พบภาพยนตร์ที่ค้นหา
              </div>
            )}
          </>
        )}

        {page === "favorites" && (
          <>
            <h1>♡ รายการโปรด</h1>
            <p className="muted">ภาพยนตร์ที่คุณบันทึกไว้</p>
            {favoriteMovies.length > 0 ? (
              <MovieSection title="หนังที่บันทึกไว้" items={favoriteMovies} />
            ) : (
              <div className="empty">
                <div>♡</div>
                ยังไม่มีรายการโปรด
                <p>กดหัวใจบนโปสเตอร์เพื่อบันทึกหนังที่ชอบ</p>
              </div>
            )}
          </>
        )}

        {page === "profile" && (
          <>
            <h1>โปรไฟล์ของฉัน</h1>
            <div className="profile-card">
              <div className="avatar">👤</div>
              <h2>MovieHub Member</h2>
              <p className="muted">สมาชิก MovieHub</p>
              <p>รายการโปรด {favorites.length} เรื่อง</p>
            </div>
            <section className="section">
              <h2>เกี่ยวกับแอปพลิเคชัน</h2>
              <p className="muted">
                MovieHub แพลตฟอร์มค้นพบภาพยนตร์
                ที่รวมเรื่องราวจากหลากหลายหมวดหมู่ไว้ในที่เดียว
              </p>
            </section>
          </>
        )}

        {page === "detail" && selectedMovie && (
          <>
            <button
              className="back-btn"
              onClick={() => setPage("home")}
            >
              ← กลับหน้าหลัก
            </button>
            <div className="detail">
              <img src={selectedMovie.image} alt={selectedMovie.titleTH} />
              <div>
                <span className="tag">{selectedMovie.country === "Thailand" ? "หนังไทย" : "ภาพยนตร์"}</span>
                <h1>{selectedMovie.titleTH}</h1>
                <p>{selectedMovie.title}</p>
                <p>
                  ★ {selectedMovie.rating} · {selectedMovie.year} ·{" "}
                  {selectedMovie.genre} · {selectedMovie.duration}
                </p>
                <p>{selectedMovie.description}</p>
                <button
                  className="primary-btn"
                  onClick={() => setShowPlayer(true)}
                >
                  ▶ รับชมภาพยนตร์
                </button>
                <button
                  className="primary-btn"
                  style={{ marginLeft: 8, background: "#253650" }}
                  onClick={() => toggleFavorite(selectedMovie.id)}
                >
                  {favorites.includes(selectedMovie.id) ? "♥ บันทึกแล้ว" : "♡ รายการโปรด"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <nav className="bottom-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${page === item.id ? "active" : ""}`}
            onClick={() => setPage(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {toast && <div className="toast">{toast}</div>}

      {showPlayer && (
        <div className="modal" onClick={() => setShowPlayer(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="player-screen">▶</div>
            <h2>MovieHub Player</h2>
            <p className="muted">
              หน้านี้เป็นตัวอย่างเครื่องเล่นภาพยนตร์
              ต้องเชื่อมต่อวิดีโอจากผู้ให้บริการที่ได้รับอนุญาตก่อนจึงจะรับชมได้
            </p>
            <button
              className="primary-btn"
              onClick={() => setShowPlayer(false)}
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
