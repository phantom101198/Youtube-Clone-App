import React from "react";
import { SOFTWARE_ENGINEER_CATEGORIES } from "./CategoryList";

const CategoryBar = () => {
  //     const categories = [
  //   "All",
  //   "Gaming",
  //   "Music",
  //   "Web Development",
  //   "Data Structures",
  //   "MERN",
  //   "Angular",
  //   "Java",
  //   "Ruby On Rails",
  //   "Python",
  //   "C++",
  //   "Algorithms",
  //   "DSA",
  //   "Binary Search",
  //   "BFS & DFS",
  //   "Sliding Window",
  //   "Arrays",
  //   "Hashing",
  //   "String Manipulation",
  // ];

  const list = SOFTWARE_ENGINEER_CATEGORIES;
  console.log(list);
  return (
    <div className="w-full min-w-0 flex bg-cyan-400 px-6 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth">
      {list.map((item) => (
        <div className="bg-yellow-200 flex" key={item}>
          <span className="bg-pink-400 my-3 mr-3 px-4 py-2 w-fit whitespace-nowrap rounded-2xl hover:bg-gray-400">
            {item}
          </span>
        </div>
      ))}
      {/* <div className='bg-yellow-200 flex'>
            <span className='bg-pink-400 my-3 mr-3 px-3'>All</span>
        </div>
        <div className=''>
            <span className='bg-pink-400'>All</span>
        </div>
        <div className=''>
            <span className='bg-pink-400'>All</span>
        </div>
        <div className=''>
            <span className='bg-pink-400'>All</span>
        </div>
        <div className=''>
            <span className='bg-pink-400'>All</span>
        </div> */}
    </div>
  );
};

export default CategoryBar;
