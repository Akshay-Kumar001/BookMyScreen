"use client";

interface MovieFiltersProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

const filters = [
  { label: "All Movies", value: "all" },
  { label: "Now Showing", value: "now_showing" },
  { label: "Coming Soon", value: "coming_soon" },
];

export default function MovieFilters({
  selectedStatus,
  onStatusChange,
}: MovieFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onStatusChange(filter.value)}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
            selectedStatus === filter.value
              ? "bg-[#E63946] text-white"
              : "border border-gray-200 bg-white text-gray-600 hover:border-[#E63946] hover:text-[#E63946]"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}