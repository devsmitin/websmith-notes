import React, { useEffect, useState } from "react";
import { useAppContext, useSearchContext } from "../app-context";

import InputControl from "./InputControl";

function Search() {
  const [searchTerm, updateSearchTerm] = useState("");

  const context = useAppContext();
  let { notes } = context;

  const searchContext = useSearchContext();
  let { searchResHandler } = searchContext;

  const inputHandler = (e) => {
    updateSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (notes.length && searchTerm !== "") {
      const filteredNotes = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm) ||
          note.details.toLowerCase().includes(searchTerm)
      );
      searchResHandler(filteredNotes);
    } else {
      searchResHandler(null);
    }
  }, [notes, searchResHandler, searchTerm]);

  return (
    <div className="bg-slate-300 dark:bg-slate-800 pt-5 border-b border-black">
      <div className="mx-auto container py-10 px-6 w-11/12 md:w-2/3 max-w-lg">
        <div className="flex justify-start items-center relative">
          <InputControl
            name="search"
            type="text"
            className="text-sm leading-none text-left px-4 py-3 w-full rounded-md bg-white dark:bg-transparent text-gray-600 dark:text-gray-100 outline-none border border-gray-800 dark:border-gray-500 shadow-md"
            value={searchTerm}
            onChange={inputHandler}
            maxLength="20"
            placeholder="Search"
          />
          {/* <input
            className="text-sm leading-none text-left px-4 py-3 w-full rounded-md bg-white dark:bg-transparent text-gray-600 dark:text-gray-100 outline-none border border-gray-800 dark:border-gray-500 shadow-md"
            type="text"
            placeholder="Search"
          /> */}
          <span className="absolute right-3 z-10">
            <svg
              className=""
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                stroke="#4B5563"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L15 15"
                stroke="#4B5563"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
