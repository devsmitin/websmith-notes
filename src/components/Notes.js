import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../app-context";

function Notes() {
  const context = useContext(AppContext);
  let { notes } = context.data;

  const [notesData, updateData] = useState();

  useEffect(() => {
    console.log('notes', notes);
    updateData(notes);
  }, [notes]);

  return (
    <div className="mx-auto container pt-10 pb-32 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {notesData && notesData.length
          ? notesData.map((note, i) => <Note note={note} key={i} />)
          : "No data"}
      </div>
    </div>
  );
}

function Note(props) {
  let { note } = props;
  let colorClass =
    note.color === "Default"
      ? "bg-white border-gray-400"
      : `bg-${note.color.toLowerCase()}-300 border border-${note.color.toLowerCase()}-300`;
  return (
    <div
      className={`w-full h-64 flex flex-col justify-between rounded-lg border lg:mb-6 py-5 px-4 ${colorClass}`}
    >
      <div>
        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
          {note.title}
        </h4>
        <p className="text-gray-800 dark:text-gray-100 text-sm">
          {note.details}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
          <p className="text-sm">{note.date}</p>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-pencil"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
