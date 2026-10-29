
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight, Ticket } from "lucide-react";

import "swiper/css";

const featuredMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    tagline: "Welcome to a world without rules.",
    description: "Experience an unforgettable cinematic journey.",
    genre: "Action · Crime · Drama",
    label: "Featured Movie",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  },
  {
    id: 2,
    title: "Interstellar",
    tagline: "The adventure of a lifetime.",
    description: "Explore the universe through an extraordinary experience.",
    genre: "Sci-Fi · Adventure · Drama",
    label: "Now Showing",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
  },
  {
    id: 3,
    title: "The Lost World",
    tagline: "An adventure beyond imagination.",
    description: "Discover a mysterious world on the big screen.",
    genre: "Adventure · Fantasy",
    label: "Now Showing",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 4,
    title: "The Grand Adventure",
    tagline: "Every journey has a beginning.",
    description: "Discover a new adventure on the big screen.",
    genre: "Adventure · Drama",
    label: "Coming Soon",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
  },
  {
    id: 5,
    title: "Beyond the Stars",
    tagline: "The universe is waiting.",
    description: "Experience an extraordinary journey through space.",
    genre: "Sci-Fi · Adventure",
    label: "Coming Soon",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
  },
];

export default function HeroBanner() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    swiperRef.current?.slidePrev(800);
  };

  const goToNext = () => {
    swiperRef.current?.slideNext(800);
  };

  const goToSlide = (index: number) => {
    swiperRef.current?.slideToLoop(index, 800);
  };

  return (
    <section className="movie-banner-section relative overflow-hidden w-full py-6">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex);
        }}
        onRealIndexChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        slidesPerView={1.12}
        centeredSlides={true}
        centeredSlidesBounds={false}
        spaceBetween={16}
        slidesPerGroup={1}
        loop={true}
        speed={800}
        watchSlidesProgress={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.15,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 24,
          },
        }}
        className="movie-promo-swiper"
      >
        {featuredMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <article
              className="movie-promo-card relative flex min-h-[380px] items-center overflow-hidden rounded-2xl bg-cover bg-center px-6 py-12 text-white md:min-h-[480px] md:px-16"
              style={{
                backgroundImage: `url("${movie.image}")`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />

              <div className="relative z-10 max-w-2xl">
                <span className="inline-block rounded-full bg-[#E63946] px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  {movie.label}
                </span>

                <h2 className="mt-6 text-3xl font-extrabold leading-tight md:text-6xl">
                  {movie.title}
                </h2>

                <p className="mt-3 text-sm font-medium text-red-200 md:text-base">
                  {movie.tagline}
                </p>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-300 md:text-base">
                  {movie.description}
                </p>

                <p className="mt-4 text-xs text-gray-400">
                  {movie.genre}
                </p>

                <Link
                  href={`/movies/${movie.id}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#E63946] px-6 py-3 font-semibold text-white transition hover:bg-[#c92f3b]"
                >
                  <Ticket size={18} />
                  Book Tickets
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Single pair of navigation arrows */}
      <button
        type="button"
        aria-label="Previous movie"
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-[#E63946] md:left-8 md:h-12 md:w-12"
      >
        <ArrowLeft size={21} />
      </button>

      <button
        type="button"
        aria-label="Next movie"
        onClick={goToNext}
        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-[#E63946] md:right-8 md:h-12 md:w-12"
      >
        <ArrowRight size={21} />
      </button>

      {/* Custom pagination */}
      <div className="relative z-20 mt-5 flex justify-center gap-2">
        {featuredMovies.map((movie, index) => (
          <button
            key={movie.id}
            type="button"
            aria-label={`Go to ${movie.title}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-7 bg-[#E63946]"
                : "w-2.5 bg-gray-400 hover:bg-[#E63946]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
