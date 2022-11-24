import React from "react";
import { useAppContext, useSearchContext } from "../app-context";
import Note from "./Note";

function Notes() {
  const context = useAppContext();
  let { notes } = context;

  const searchContext = useSearchContext();
  let { searchRes } = searchContext;

  const noteList = (data, emptyMsg) => {
    let list = data.length ? (
      data.map((note) => <Note note={note} key={note.date} />)
    ) : (
      <div className="w-full dark:text-gray-100 font-bold">{emptyMsg}</div>
    );
    return list;
  };

  return (
    <div className="mx-auto container pt-10 pb-32 px-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-8">
        {searchRes
          ? noteList(searchRes, "No results found...")
          : noteList(notes, "Add a note to get started...")}
      </div>
    </div>
  );
}

export default Notes;
