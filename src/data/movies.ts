
export interface Movie {
  id: number;
  title: string;
  genre: string;
  rating?: number;
  votes?: string;
  poster: string;
  status: "now_showing" | "coming_soon";
  releaseDate?: string;
  description?: string;
  duration?: string;
  language?: string;
  certificate?: string;
}

export const movies: Movie[] = [
 {
  id: 1,
  title: "Dune: Part Two",
  genre: "Sci-Fi / Adventure",
  rating: 8.8,
  votes: "125K",
  poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  status: "now_showing",
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
  duration: "2h 46m",
  language: "English",
  certificate: "UA 13+",
},
  {
    id: 2,
    title: "Oppenheimer",
    genre: "Drama / History",
    rating: 8.3,
    votes: "98K",
    poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    status: "now_showing",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi / Adventure",
    rating: 8.7,
    votes: "210K",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
     status: "coming_soon",
    releaseDate: "December 2026",
  },
  {
    id: 4,
    title: "The Batman",
    genre: "Action / Crime",
    rating: 7.8,
    votes: "85K",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    status: "now_showing",
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    genre: "Action / Adventure",
    rating: 8.2,
    votes: "175K",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
     status: "coming_soon",
    releaseDate: "December 2026",
  },
];
