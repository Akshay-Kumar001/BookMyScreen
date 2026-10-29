
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { recommendedMovies } from "@/data/movies";
import MovieCard from "@/components/home/MovieCard";

export default function MovieSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Recommended Movies
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Movies you don't want to miss
          </p>
        </div>

        <Link
          href="/movies"
          className="flex items-center gap-2 text-sm font-semibold text-[#E63946] transition hover:gap-3"
        >
          See All
          <ArrowRight size={17} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
        {recommendedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
