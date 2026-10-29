
import Link from "next/link";
import { MapPin, Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        {/* Brand */}
        <Link href="/" className="shrink-0">
          <span className="text-2xl font-extrabold tracking-tight text-[#E63946]">
            BookMyScreen
          </span>
        </Link>

        {/* Search */}
        <form
          action="/movies"
          method="GET"
          className="relative hidden max-w-xl flex-1 md:block"
        >
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="search"
            name="search"
            placeholder="Search movies, cinemas..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#E63946] focus:bg-white"
          />
        </form>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-5">

          <button
            type="button"
            className="hidden items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-[#E63946] sm:flex"
          >
            <MapPin size={18} strokeWidth={1.8} />
            <span>Select City</span>
            <ChevronDown size={15} />
          </button>

          <Link
            href="/login"
            className="rounded-lg bg-[#E63946] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c92f3b]"
          >
            Sign In
          </Link>

        </div>
      </div>
    </header>
  );
}
