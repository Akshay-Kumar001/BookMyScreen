
import { notFound } from "next/navigation";
import Image from "next/image";

import { movies } from "@/data/movies";

interface MovieDetailsPageProps {
  params: Promise<{
    movieId: string;
  }>;
}

export default async function MovieDetailsPage({
  params,
}: MovieDetailsPageProps) {
  const { movieId } = await params;

  const movie = movies.find(
    (item) => item.id === Number(movieId)
  );

  if (!movie) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F5F7] px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[300px_1fr]">

          <div className="relative aspect-[2/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={movie.poster}
              alt={movie.title}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#E63946]">
              {movie.status === "now_showing"
                ? "Now Showing"
                : "Coming Soon"}
            </p>

            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
              {movie.title}
            </h1>

            <p className="mt-4 text-gray-500">
              {movie.genre}
            </p>

            {movie.rating && (
              <p className="mt-5 font-semibold text-gray-800">
                ★ {movie.rating}/10
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({movie.votes} votes)
                </span>
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              {movie.duration && (
                <span className="rounded-lg bg-white px-4 py-2 text-sm text-gray-700">
                  {movie.duration}
                </span>
              )}

              {movie.language && (
                <span className="rounded-lg bg-white px-4 py-2 text-sm text-gray-700">
                  {movie.language}
                </span>
              )}

              {movie.certificate && (
                <span className="rounded-lg bg-white px-4 py-2 text-sm text-gray-700">
                  {movie.certificate}
                </span>
              )}
            </div>

            <p className="mt-8 max-w-2xl leading-7 text-gray-600">
              {movie.description || "Movie description coming soon."}
            </p>

            {movie.status === "now_showing" && (
              <button
                type="button"
                className="mt-8 w-fit rounded-xl bg-[#E63946] px-8 py-3.5 font-semibold text-white transition hover:bg-[#cf2937]"
              >
                Book Tickets
              </button>
            )}

            {movie.status === "coming_soon" && movie.releaseDate && (
              <p className="mt-8 font-semibold text-gray-800">
                Release: {movie.releaseDate}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
