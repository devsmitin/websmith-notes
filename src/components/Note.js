import React from "react";
import { useAppContext, useModalContext } from "../app-context";

function Note(props) {
  const context = useAppContext();
  let { notes, updateNotes, editDataHandler } = context;

  const modalContext = useModalContext();
  let { modalStateHandler } = modalContext;

  let { note } = props;

  let colorClass;

  switch (note.color) {
    case "Pink":
      colorClass = "bg-pink-300 border-pink-300";
      break;
    case "Blue":
      colorClass = "bg-blue-300 border-blue-300";
      break;
    case "Red":
      colorClass = "bg-red-300 border-red-300";
      break;
    case "Yellow":
      colorClass = "bg-yellow-300 border-yellow-300";
      break;
    default:
      colorClass =
        "bg-white border-gray-400 dark:bg-gray-800 dark:border-gray-700";
      break;
  }

  const removeNote = (id) => {
    let updatedNotes = notes.filter((note) => note.date !== id);
    updateNotes(updatedNotes);
  };

  const editNote = (id) => {
    modalStateHandler(true);
    let dataToEdit = notes.find((note) => note.date === id);
    editDataHandler(dataToEdit);
    //   const updatedNotes = notes.map((note) =>
    //     note.date === id ? { ...note, ...formvalues } : note
    //   );
    //   updateNotes(updatedNotes);
  };

  return (
    <div
      className={`w-full min-h-fit flex flex-col justify-between rounded-lg border lg:mb-6 py-5 px-4 ${colorClass}`}
    >
      <div>
        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
          {note.title}
        </h4>
        <p className="text-gray-800 dark:text-gray-100 text-sm mb-5 whitespace-pre-wrap">
          {note.details}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-end text-gray-800 dark:text-gray-100">
          <p className="text-sm mr-auto">
            {note.date && new Date(note.date).toLocaleDateString()}
          </p>
          <button
            type="button"
            className="w-8 h-8 ml-4 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center"
            onClick={() => editNote(note.date)}
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

          <button
            type="button"
            className="w-8 h-8 ml-4 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center"
            onClick={() => removeNote(note.date)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Close"
              className="icon icon-tabler icon-tabler-x"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
