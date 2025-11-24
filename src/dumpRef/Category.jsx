import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const categories = [
  "All",
  "Gaming",
  "Music",
  "Web Development",
  "Data Structures",
  "MERN",
  "Angular",
  "Java",
  "Ruby On Rails",
  "Python",
  "C++",
  "Algorithms",
  "DSA",
  "Binary Search",
  "BFS & DFS",
  "Sliding Window",
  "Arrays",
  "Hashing",
  "String Manipulation",
];

export default function CategoryList() {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center w-full shadow-md">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-white shadow-md rounded-full p-2 hidden md:flex"
      >
        <FaAngleLeft className="w-5 h-5" />
      </button>

      {/* Scrollable List */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto overflow-y-hidden no-scrollbar py-2 px-12 scroll-smooth whitespace-nowrap"
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-2xl text-sm font-medium ${
              index === 0
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 bg-white shadow-md rounded-full p-2 hidden md:flex"
      >
        <FaAngleRight className="w-5 h-5" />
      </button>
    </div>
  );
}
