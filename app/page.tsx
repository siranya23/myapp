
"use client";

import { useEffect, useMemo, useState } from "react";

type Movie = {
  id: number;
  title: string;
  titleTH: string;
  year: number;
  rating: number;
  genre: string;
  duration: string;
  image: string;
  description: string;
  country: "ไทย" | "ต่างประเทศ";
  type: "Movie" | "Series";
  featured?: boolean;
  video?: string;
};

const movies: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    titleTH: "ดูน ภาคสอง",
    year: 2024,
    rating: 8.6,
    genre: "Sci-Fi",
    duration: "2h 46m",
    country: "ต่างประเทศ",
    type: "Movie",
    featured: true,
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description: "พอล อะเทรดีส ออกเดินทางร่วมกับชาวเฟรเมน เพื่อเปลี่ยนแปลงชะตากรรมของจักรวาล",
  },
  {
    id: 2,
    title: "Inside Out 2",
    titleTH: "มหัศจรรย์อารมณ์อลเวง 2",
    year: 2024,
    rating: 8.0,
    genre: "Animation",
    duration: "1h 36m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://www.disney.co.th/movies/inside-out-2.jpg",
    description: "ไรลีย์เติบโตขึ้นและต้องพบกับอารมณ์ใหม่ ๆ ที่เข้ามาเปลี่ยนแปลงชีวิต",
  },
  {
    id: 3,
    title: "Deadpool & Wolverine",
    titleTH: "เดดพูล และ วูล์ฟเวอรีน",
    year: 2024,
    rating: 8.1,
    genre: "Action",
    duration: "2h 08m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    description: "การผจญภัยสุดป่วนของสองฮีโร่ที่ต้องร่วมมือกันเพื่อภารกิจสำคัญ",
  },
  {
    id: 4,
    title: "Kung Fu Panda 4",
    titleTH: "กังฟูแพนด้า 4",
    year: 2024,
    rating: 7.2,
    genre: "Animation",
    duration: "1h 34m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    description: "โปต้องออกเดินทางเพื่อค้นหาผู้สืบทอดตำแหน่งนักรบมังกร",
  },
  {
    id: 5,
    title: "Godzilla x Kong",
    titleTH: "ก็อดซิลล่า ปะทะ คอง",
    year: 2024,
    rating: 7.5,
    genre: "Action",
    duration: "1h 55m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuqZ5w.jpg",
    description: "สองไททันยักษ์ต้องเผชิญหน้ากับภัยคุกคามครั้งใหม่",
  },
  {
    id: 6,
    title: "The Batman",
    titleTH: "เดอะ แบทแมน",
    year: 2022,
    rating: 7.8,
    genre: "Action",
    duration: "2h 56m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description: "แบทแมนสืบสวนคดีปริศนาที่นำไปสู่ความลับของเมืองก็อตแธม",
  },
  {
    id: 7,
    title: "Spider-Man: Across the Spider-Verse",
    titleTH: "สไปเดอร์แมน ผงาดข้ามจักรวาลแมงมุม",
    year: 2023,
    rating: 8.6,
    genre: "Animation",
    duration: "2h 20m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5XjapHYO.jpg",
    description: "ไมลส์เดินทางข้ามจักรวาลและพบกับเหล่าสไปเดอร์แมนจากหลายโลก",
  },
  {
    id: 8,
    title: "Oppenheimer",
    titleTH: "ออพเพนไฮเมอร์",
    year: 2023,
    rating: 8.3,
    genre: "Drama",
    duration: "3h 00m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    description: "เรื่องราวของนักฟิสิกส์ผู้มีบทบาทสำคัญในการพัฒนาอาวุธนิวเคลียร์",
  },
  {
    id: 9,
    title: "Wonka",
    titleTH: "วองก้า",
    year: 2023,
    rating: 7.2,
    genre: "Fantasy",
    duration: "1h 56m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    description: "เรื่องราวของนักทำช็อกโกแลตผู้มีความฝันและจินตนาการ",
  },
  {
    id: 10,
    title: "Avatar: The Way of Water",
    titleTH: "อวตาร วิถีแห่งสายน้ำ",
    year: 2022,
    rating: 7.6,
    genre: "Sci-Fi",
    duration: "3h 12m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    description: "ครอบครัวซัลลีต้องปกป้องบ้านและผู้คนบนดาวแพนดอร่า",
  },
  {
    id: 11,
    title: "A Quiet Place",
    titleTH: "ดินแดนไร้เสียง",
    year: 2018,
    rating: 7.5,
    genre: "Horror",
    duration: "1h 30m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    description: "ครอบครัวหนึ่งต้องใช้ชีวิตอย่างเงียบที่สุดเพื่อเอาตัวรอด",
  },
  {
    id: 12,
    title: "The Conjuring",
    titleTH: "คนเรียกผี",
    year: 2013,
    rating: 7.5,
    genre: "Horror",
    duration: "1h 52m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    description: "นักสืบเรื่องเหนือธรรมชาติเข้าไปช่วยครอบครัวที่พบเหตุการณ์ประหลาด",
  },
  {
    id: 13,
    title: "Your Name",
    titleTH: "หลับตาฝัน ถึงชื่อเธอ",
    year: 2016,
    rating: 8.5,
    genre: "Romance",
    duration: "1h 46m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    description: "วัยรุ่นสองคนที่ไม่เคยพบกันกลับเชื่อมโยงกันผ่านความฝัน",
  },
  {
    id: 14,
    title: "La La Land",
    titleTH: "นครดารา",
    year: 2016,
    rating: 8.0,
    genre: "Romance",
    duration: "2h 08m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description: "เรื่องราวความรักและความฝันของนักดนตรีกับนักแสดงสาว",
  },
  {
    id: 15,
    title: "The Super Mario Bros. Movie",
    titleTH: "เดอะ ซูเปอร์มาริโอบราเธอร์ส",
    year: 2023,
    rating: 7.7,
    genre: "Animation",
    duration: "1h 32m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    description: "มาริโอออกผจญภัยในโลกมหัศจรรย์เพื่อช่วยเหลือเพื่อนของเขา",
  },
  {
    id: 16,
    title: "Bad Genius",
    titleTH: "ฉลาดเกมส์โกง",
    year: 2017,
    rating: 7.6,
    genre: "Thriller",
    duration: "2h 10m",
    country: "ไทย",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/1Vx0q9q5YxQ7q1xJQ6n3x5.jpg",
    description: "นักเรียนอัจฉริยะเข้าไปพัวพันกับแผนการโกงข้อสอบระดับนานาชาติ",
  },
  {
    id: 17,
    title: "Pee Mak",
    titleTH: "พี่มาก..พระโขนง",
    year: 2013,
    rating: 7.3,
    genre: "Comedy",
    duration: "1h 55m",
    country: "ไทย",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
    description: "เรื่องราวความรักและมิตรภาพที่ผสมผสานความตลกกับตำนานพื้นบ้าน",
  },
  {
    id: 18,
    title: "The Medium",
    titleTH: "ร่างทรง",
    year: 2021,
    rating: 6.6,
    genre: "Horror",
    duration: "2h 11m",
    country: "ไทย",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/1X6F9N7p3g9Yq5z1q6z7X9p.jpg",
    description: "สารคดีติดตามครอบครัวหนึ่งที่มีความเชื่อเกี่ยวกับพิธีกรรมท้องถิ่น",
  },
  {
    id: 19,
    title: "How to Make Millions Before Grandma Dies",
    titleTH: "หลานม่า",
    year: 2024,
    rating: 8.1,
    genre: "Drama",
    duration: "2h 05m",
    country: "ไทย",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/4l0W3fVnQZ2j7x3K5u9N6p.jpg",
    description: "เรื่องราวความสัมพันธ์ของหลานชายและคุณยายที่ทำให้เข้าใจความหมายของครอบครัว",
  },
  {
    id: 20,
    title: "Fast & Furious 7",
    titleTH: "เร็ว...แรงทะลุนรก 7",
    year: 2015,
    rating: 7.1,
    genre: "Action",
    duration: "2h 17m",
    country: "ต่างประเทศ",
    type: "Movie",
    image: "https://image.tmdb.org/t/p/w500/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
    description: "ทีมครอบครัวต้องร่วมมือกันรับมือกับศัตรูที่ตามล้างแค้น",
  },
];

const categories = [
  "ทั้งหมด",
  "หนังไทย",
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Animation",
  "Fantasy",
  "Thriller",
];

const navItems = [
  { id: "home", label: "หน้าหลัก", icon: "⌂" },
  { id: "search", label: "ค้นหา", icon: "⌕" },
  { id: "favorites", label: "รายการโปรด", icon: "♡" },
  { id: "history", label: "ประวัติ", icon: "◷" },
  { id: "profile", label: "โปรไฟล์", icon: "◉" },
];

export default function MovieHub() {
  const [page, setPage] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [category, setCategory] = useState("ทั้งหมด");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [watchLater, setWatchLater] = useState<number[]>([]);
  const [history, setHistory] = useState<number[]>([]);
  const [showPlayer, setShowPlayer] = useState(false);
  const [toast, setToast] = useState("");
  const [sort, setSort] = useState("popular");
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    try {
      setFavorites(JSON.parse(localStorage.getItem("mh_favorites") || "[]"));
      setWatchLater(JSON.parse(localStorage.getItem("mh_watchlater") || "[]"));
      setHistory(JSON.parse(localStorage.getItem("mh_history") || "[]"));
    } catch {
      // ใช้ค่าเริ่มต้นหากข้อมูลในเครื่องอ่านไม่ได้
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mh_favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("mh_watchlater", JSON.stringify(watchLater));
  }, [watchLater]);

  useEffect(() => {
    localStorage.setItem("mh_history", JSON.stringify(history));
  }, [history]);

  const featuredMovies = movies.filter((movie) => movie.featured);
  const heroMovie = featuredMovies[heroIndex % featuredMovies.length];

  const filteredMovies = useMemo(() => {
    const result = movies.filter((movie) => {
      const matchesCategory =
        category === "ทั้งหมด" ||
        (category === "หนังไทย"
          ? movie.country === "ไทย"
          : movie.genre === category);

      const keyword = search.toLowerCase().trim();

      const matchesSearch =
        !keyword ||
        movie.title.toLowerCase().includes(keyword) ||
        movie.titleTH.toLowerCase().includes(keyword) ||
        movie.genre.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sort === "newest") {
      result.sort((a, b) => b.year - a.year);
    }

    return result;
  }, [category, search, sort]);

  const favoriteMovies = movies.filter((movie) =>
    favorites.includes(movie.id)
  );

  const laterMovies = movies.filter((movie) =>
    watchLater.includes(movie.id)
  );

  const historyMovies = history
    .map((id) => movies.find((movie) => movie.id === id))
    .filter((movie): movie is Movie => Boolean(movie));

  const randomMovie = () => {
    const random = movies[Math.floor(Math.random() * movies.length)];
    setSelectedMovie(random);
    setPage("detail");
  };

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }

  function toggleFavorite(id: number) {
    const exists = favorites.includes(id);

    setFavorites((old) =>
      exists ? old.filter((item) => item !== id) : [...old, id]
    );

    notify(exists ? "นำออกจากรายการโปรดแล้ว" : "เพิ่มในรายการโปรดแล้ว");
  }

  function toggleLater(id: number) {
    const exists = watchLater.includes(id);

    setWatchLater((old) =>
      exists ? old.filter((item) => item !== id) : [...old, id]
    );

    notify(exists ? "นำออกจากดูภายหลังแล้ว" : "เพิ่มในดูภายหลังแล้ว");
  }

  function openMovie(movie: Movie) {
    setSelectedMovie(movie);
    setHistory((old) => [movie.id, ...old.filter((id) => id !== movie.id)].slice(0, 20));
    setPage("detail");
  }

  function MovieCard({ movie }: { movie: Movie }) {
    return (
      <article className="movie-card">
        <div className="poster-wrap" onClick={() => openMovie(movie)}>
          <img src={movie.image} alt={movie.titleTH} loading="lazy" />
          <span className="rating">★ {movie.rating.toFixed(1)}</span>
          <span className="poster-play">▶</span>
          <span className="movie-type">{movie.type}</span>
        </div>

        <button
          className={`heart ${favorites.includes(movie.id) ? "liked" : ""}`}
          onClick={() => toggleFavorite(movie.id)}
          aria-label="รายการโปรด"
        >
          {favorites.includes(movie.id) ? "♥" : "♡"}
        </button>

        <div className="movie-info" onClick={() => openMovie(movie)}>
          <h3>{movie.titleTH}</h3>
          <p>{movie.year} · {movie.genre}</p>
        </div>
      </article>
    );
  }

  function MovieSection({
    title,
    items,
    more = true,
  }: {
    title: string;
    items: Movie[];
    more?: boolean;
  }) {
    if (!items.length) return null;

    return (
      <section className="section">
        <div className="section-heading">
          <h2>{title}</h2>
          {more && (
            <button
              onClick={() => {
                setCategory("ทั้งหมด");
                setSearch("");
                setPage("search");
              }}
            >
              ดูทั้งหมด →
            </button>
          )}
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
          max-width: 1300px;
          margin: auto;
          padding-bottom: 100px;
          background: #080d1b;
        }

        .topbar {
          height: 72px;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(8,13,27,.96);
          position: sticky;
          top: 0;
          z-index: 20;
          border-bottom: 1px solid #202943;
          backdrop-filter: blur(15px);
        }

        .logo { font-size: 27px; font-weight: 700; letter-spacing: -1px; }
        .logo span { color: #4d9fff; }
        .top-actions { display: flex; gap: 10px; }

        .icon-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #29334d;
          background: #121b30;
          color: white;
          font-size: 20px;
        }

        .content { padding: 25px 5%; }

        .hero {
          min-height: 420px;
          border-radius: 25px;
          padding: 45px;
          display: flex;
          align-items: end;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(5,10,25,.98), rgba(5,10,25,.15)),
            url('https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg')
            center/cover;
          border: 1px solid #283958;
        }

        .hero-content { max-width: 540px; position: relative; z-index: 1; }
        .tag {
          display: inline-block;
          background: #267cf4;
          padding: 5px 13px;
          border-radius: 20px;
          font-size: 12px;
          margin-bottom: 14px;
        }

        .hero h1 { font-size: clamp(32px, 5vw, 52px); margin: 0 0 8px; }
        .hero p { color: #d0d8e8; line-height: 1.8; }

        .primary-btn {
          border: 0;
          color: white;
          background: linear-gradient(135deg, #2588ff, #6258ed);
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          margin-top: 12px;
        }

        .secondary-btn {
          background: #263650;
          color: white;
          border: 1px solid #3b4c6b;
          padding: 11px 17px;
          border-radius: 12px;
          margin: 12px 7px 0 0;
        }

        .hero-dots { display: flex; gap: 7px; margin-top: 20px; }
        .hero-dots button {
          width: 8px;
          height: 8px;
          border: 0;
          border-radius: 10px;
          background: #6c7890;
          padding: 0;
        }
        .hero-dots button.active { width: 25px; background: #4d9fff; }

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
          grid-template-columns: repeat(6, minmax(0, 1fr));
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
          background: rgba(0,0,0,.78);
          color: #ffd45a;
          font-size: 11px;
        }

        .movie-type {
          position: absolute;
          bottom: 8px;
          left: 8px;
          padding: 3px 7px;
          border-radius: 5px;
          background: rgba(0,0,0,.7);
          font-size: 10px;
        }

        .poster-play {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          opacity: 0;
          background: rgba(0,0,0,.4);
          font-size: 30px;
          transition: opacity .2s;
        }

        .poster-wrap:hover .poster-play { opacity: 1; }

        .heart {
          position: absolute;
          right: 8px;
          top: 8px;
          width: 30px;
          height: 30px;
          border: 0;
          border-radius: 50%;
          background: rgba(0,0,0,.7);
          color: white;
          font-size: 18px;
          z-index: 2;
        }

        .heart.liked { color: #ff5b83; }
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
          margin: 12px 0 20px;
        }

        .sort-select {
          padding: 10px 14px;
          border: 1px solid #293650;
          border-radius: 10px;
          background: #111a2d;
          color: white;
          font-family: inherit;
        }

        .detail {
          display: grid;
          grid-template-columns: 270px 1fr;
          gap: 35px;
          align-items: start;
          padding-top: 20px;
        }

        .detail-poster { width: 100%; border-radius: 18px; }
        .detail h1 { font-size: 34px; margin: 0 0 8px; }
        .detail p { color: #aab6ca; line-height: 1.8; }

        .back-btn {
          background: none;
          color: #8bbaff;
          border: 0;
          font-size: 15px;
          padding: 10px 0;
        }

        .empty { text-align: center; color: #91a0b9; padding: 70px 15px; }
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

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 20px;
        }

        .stat {
          padding: 17px 8px;
          border-radius: 13px;
          background: #18243a;
          text-align: center;
        }

        .stat strong { display: block; font-size: 22px; color: #6eb0ff; }
        .stat span { font-size: 11px; color: #aab6ca; }

        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(100%, 1300px);
          display: flex;
          justify-content: space-around;
          padding: 11px 5px calc(11px + env(safe-area-inset-bottom));
          background: rgba(9,15,29,.97);
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
          font-size: 10px;
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
          white-space: nowrap;
        }

        .modal {
          position: fixed;
          inset: 0;
          z-index: 60;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(0,0,0,.88);
        }

        .modal-box {
          width: min(600px, 100%);
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

        @media (max-width: 950px) {
          .movie-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        }

        @media (max-width: 700px) {
          .movie-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .hero { min-height: 350px; }
        }

        @media (max-width: 500px) {
          .topbar { height: 62px; padding: 0 17px; }
          .logo { font-size: 23px; }
          .content { padding: 18px 15px; }
          .hero { min-height: 300px; padding: 23px; border-radius: 18px; }
          .hero h1 { font-size: 31px; }
          .movie-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
          .movie-info h3 { font-size: 12px; }
          .detail { grid-template-columns: 115px 1fr; gap: 16px; }
          .detail h1 { font-size: 22px; }
          .detail p { font-size: 13px; }
          .primary-btn { padding: 10px 16px; }
          .stat-grid { gap: 7px; }
        }

        @media (max-width: 350px) {
          .movie-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .nav-item { font-size: 9px; }
        }
      `}</style>

      <header className="topbar">
        <div className="logo">Movie<span>Hub</span></div>
        <div className="top-actions">
          <button className="icon-button" onClick={() => setPage("search")}>⌕</button>
          <button className="icon-button" onClick={() => setPage("favorites")}>♡</button>
        </div>
      </header>

      <div className="content">
        {page === "home" && (
          <>
            <section
              className="hero"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(5,10,25,.98), rgba(5,10,25,.15)),
                  url('${heroMovie.image.replace("/w500/", "/original/")}')
                `,
              }}
            >
              <div className="hero-content">
                <span className="tag">MOVIEHUB FEATURED</span>
                <h1>{heroMovie.titleTH}</h1>
                <p>
                  ★ {heroMovie.rating} · {heroMovie.year} · {heroMovie.genre}
                </p>
                <p>{heroMovie.description}</p>
                <button className="primary-btn" onClick={() => openMovie(heroMovie)}>
                  ดูรายละเอียด →
                </button>
                <button className="secondary-btn" onClick={randomMovie}>
                  🎲 สุ่มหนังให้ฉัน
                </button>
                <div className="hero-dots">
                  {featuredMovies.map((movie, index) => (
                    <button
                      key={movie.id}
                      className={index === heroIndex ? "active" : ""}
                      onClick={() => setHeroIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="section">
              <div className="section-heading">
                <h2>🎭 หมวดหมู่ภาพยนตร์</h2>
              </div>
              <div className="category-list">
                {categories.map((item) => (
                  <button
                    key={item}
                    className={`category ${category === item ? "active" : ""}`}
                    onClick={() => {
                      setCategory(item);
                      setSearch("");
                      setPage("search");
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            <MovieSection title="🔥 ภาพยนตร์แนะนำ" items={movies.slice(0, 6)} />
            <MovieSection title="🇹🇭 ภาพยนตร์ไทย" items={movies.filter(m => m.country === "ไทย")} />
            <MovieSection title="⭐ คะแนนสูงสุด" items={[...movies].sort((a, b) => b.rating - a.rating).slice(0, 6)} />
            <MovieSection title="🎬 หนังแอ็กชัน" items={movies.filter(m => m.genre === "Action")} />
            <MovieSection title="😂 หนังตลก" items={movies.filter(m => m.genre === "Comedy")} />
            <MovieSection title="👻 หนังสยองขวัญ" items={movies.filter(m => m.genre === "Horror")} />
            <MovieSection title="💖 หนังโรแมนติก" items={movies.filter(m => m.genre === "Romance")} />
            <MovieSection title="✨ แอนิเมชัน" items={movies.filter(m => m.genre === "Animation")} />
            <MovieSection title="🕒 ดูภายหลัง" items={laterMovies} />
            <MovieSection title="▶ ดูต่อจากเดิม" items={historyMovies.slice(0, 6)} />
          </>
        )}

        {page === "search" && (
          <>
            <h1>ค้นหาภาพยนตร์</h1>
            <p className="muted">ค้นหาจากชื่อหนัง ชื่อไทย หรือหมวดหมู่</p>

            <input
              className="search-box"
              placeholder="🔍 พิมพ์ชื่อภาพยนตร์ที่ต้องการ..."
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

            <div className="section-heading" style={{ marginTop: 20 }}>
              <h2>พบ {filteredMovies.length} เรื่อง</h2>
              <select
                className="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="popular">เรียงตามรายการ</option>
                <option value="rating">คะแนนสูงสุด</option>
                <option value="newest">ปีใหม่ที่สุด</option>
              </select>
            </div>

            {filteredMovies.length > 0 ? (
              <div className="movie-grid">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <div>🎬</div>
                ไม่พบภาพยนตร์ที่ค้นหา
                <p>ลองค้นหาด้วยคำอื่นหรือเลือกหมวดหมู่อื่น</p>
              </div>
            )}
          </>
        )}

        {page === "favorites" && (
          <>
            <h1>♡ รายการโปรด</h1>
            <p className="muted">ภาพยนตร์ที่คุณบันทึกไว้</p>
            {favoriteMovies.length ? (
              <div className="movie-grid">
                {favoriteMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <div>♡</div>
                ยังไม่มีรายการโปรด
                <p>กดหัวใจบนโปสเตอร์เพื่อบันทึกหนังที่ชอบ</p>
              </div>
            )}
          </>
        )}

        {page === "history" && (
          <>
            <h1>◷ ประวัติการรับชม</h1>
            <p className="muted">หนังที่คุณเคยเปิดดูรายละเอียด</p>
            {historyMovies.length ? (
              <>
                <button
                  className="secondary-btn"
                  onClick={() => {
                    setHistory([]);
                    notify("ล้างประวัติแล้ว");
                  }}
                >
                  ล้างประวัติ
                </button>
                <div className="movie-grid" style={{ marginTop: 20 }}>
                  {historyMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              </>
            ) : (
              <div className="empty">
                <div>◷</div>
                ยังไม่มีประวัติ
                <p>หนังที่คุณเปิดดูจะแสดงในหน้านี้</p>
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

              <div className="stat-grid">
                <div className="stat">
                  <strong>{favorites.length}</strong>
                  <span>รายการโปรด</span>
                </div>
                <div className="stat">
                  <strong>{history.length}</strong>
                  <span>ประวัติ</span>
                </div>
                <div className="stat">
                  <strong>{watchLater.length}</strong>
                  <span>ดูภายหลัง</span>
                </div>
              </div>
            </div>

            <section className="section">
              <h2>ตั้งค่าแอปพลิเคชัน</h2>
              <button className="secondary-btn" onClick={() => setPage("favorites")}>
                ♡ รายการโปรด
              </button>
              <button className="secondary-btn" onClick={() => setPage("history")}>
                ◷ ประวัติการรับชม
              </button>
              <button className="secondary-btn" onClick={() => setPage("search")}>
                ⌕ ค้นหาภาพยนตร์
              </button>
            </section>

            <section className="section">
              <h2>เกี่ยวกับ MovieHub</h2>
              <p className="muted">
                MovieHub แพลตฟอร์มค้นพบภาพยนตร์ที่รวมหนังไทยและต่างประเทศ
                พร้อมระบบค้นหาและจัดเก็บรายการโปรด
              </p>
              <p className="muted">MovieHub Version 2026 · Prototype</p>
            </section>
          </>
        )}

        {page === "detail" && selectedMovie && (
          <>
            <button className="back-btn" onClick={() => setPage("home")}>
              ← กลับหน้าหลัก
            </button>

            <div className="detail">
              <img className="detail-poster" src={selectedMovie.image} alt={selectedMovie.titleTH} />

              <div>
                <span className="tag">
                  {selectedMovie.country === "ไทย" ? "ภาพยนตร์ไทย" : "ภาพยนตร์ต่างประเทศ"}
                </span>

                <h1>{selectedMovie.titleTH}</h1>
                <p>{selectedMovie.title}</p>
                <p>
                  ★ {selectedMovie.rating.toFixed(1)} · {selectedMovie.year} ·{" "}
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
                  className="secondary-btn"
                  onClick={() => toggleFavorite(selectedMovie.id)}
                >
                  {favorites.includes(selectedMovie.id) ? "♥ บันทึกแล้ว" : "♡ เพิ่มรายการโปรด"}
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => toggleLater(selectedMovie.id)}
                >
                  {watchLater.includes(selectedMovie.id) ? "✓ อยู่ในดูภายหลัง" : "+ ดูภายหลัง"}
                </button>
              </div>
            </div>

            <MovieSection
              title="🎬 เรื่องอื่นที่คุณอาจชอบ"
              items={movies.filter((movie) =>
                movie.id !== selectedMovie.id &&
                movie.genre === selectedMovie.genre
              )}
            />
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
            <h2>{selectedMovie?.titleTH}</h2>
            <p className="muted">
              ตัวอย่างหน้าจอเครื่องเล่นภาพยนตร์
              ต้องเชื่อมต่อวิดีโอจากผู้ให้บริการที่ได้รับอนุญาตก่อนจึงจะรับชมได้จริง
            </p>
            <button className="primary-btn" onClick={() => setShowPlayer(false)}>
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
