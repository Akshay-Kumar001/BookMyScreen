
import Link from "next/link";
import { Star } from "lucide-react";
import type { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group block min-w-0"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-gray-200">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-1.5">
          <Star size={15} className="fill-[#E63946] text-[#E63946]" />

          <span className="text-sm font-semibold text-gray-900">
            {movie.rating}/10
          </span>

          <span className="text-xs text-gray-500">
            ({movie.votes})
          </span>
        </div>

        <h3 className="mt-2 line-clamp-1 font-bold text-gray-900 transition group-hover:text-[#E63946]">
          {movie.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {movie.genre}
        </p>
      </div>
    </Link>
  );
}
