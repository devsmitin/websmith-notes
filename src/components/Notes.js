import React from "react";
import Note from "./Note";
import { useAppContext } from "../app-context";

function Notes() {
  const context = useAppContext();
  let { notes } = context;

  return (
    <div className="mx-auto container pt-10 pb-32 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {notes && notes.length ? (
          notes.map((note) => <Note note={note} key={note.date} />)
        ) : (
          <div className="w-full dark:text-gray-100 font-bold">
            Add a note to get started...
          </div>
        )}
      </div>
    </div>
  );
}

export default Notes;
