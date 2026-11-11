
"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import MovieFilters from "@/components/movies/MovieFilters";
import MovieCard from "@/components/home/MovieCard";
import { movies } from "@/data/movies";

export default function MoviesPage() {
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const filteredMovies = movies.filter((movie) => {
        const matchesStatus =
            selectedStatus === "all" || movie.status === selectedStatus;

        const matchesSearch = movie.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        return matchesStatus && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-[#F5F5F7]">
            <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

                {/* Page heading */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                        Explore Movies
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Discover and book tickets for your favourite movies.
                    </p>
                </div>

                {/* Search bar */}
                <div className="relative mb-6 max-w-xl">
                    <Search
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search movies..."
                        className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[#E63946]"
                    />
                </div>

                {/* Movie status filters */}
                <div className="mb-8">
                    <MovieFilters
                        selectedStatus={selectedStatus}
                        onStatusChange={setSelectedStatus}
                    />
                </div>

                {/* Movie count */}
                <p className="mb-5 text-sm text-gray-500">
                    Showing {filteredMovies.length} movies
                </p>

                {/* Movie grid */}
                {filteredMovies.length > 0 ? (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
                        {filteredMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="py-16 text-center">
                        <h2 className="text-xl font-bold text-gray-900">
                            No movies found
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Try selecting another filter.
                        </p>
                    </div>
                )}

            </section>
        </main>
    );
}
