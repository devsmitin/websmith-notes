import React, { useEffect, useState } from "react";
import { useAppContext, useModalContext } from "../app-context";
import InputControl from "./InputControl";

function Modal() {
  const colors = ["Default", "Pink", "Blue", "Red", "Yellow"];

  const context = useAppContext();
  let { notes, updateNotes, editData, editDataHandler } = context;

  const modalContext = useModalContext();
  let { modalOpen, modalStateHandler } = modalContext;

  const [formValues, updateFormValues] = useState({
    title: "",
    details: "",
    color: "Default",
  });

  useEffect(() => {
    if (editData) {
      updateFormValues(editData);
    }
  }, [editData]);

  const modalHandler = (arg) => {
    arg === false &&
      updateFormValues({
        title: "",
        details: "",
        color: "Default",
      });
    editDataHandler(null);
    modalStateHandler(arg);
  };

  const inputHandler = (e) => {
    updateFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    if (!editData) {
      let noteToPush = { ...formValues, date: Date.now() };
      let newNotes = [...notes];
      newNotes.push(noteToPush);
      updateNotes(newNotes);
    } else {
      const updatedNotes = notes.map((note) =>
        note.date === formValues.date ? { ...note, ...formValues } : note
      );
      updateNotes(updatedNotes);
    }
    modalHandler(false);
  };

  return (
    <div>
      <div
        className={`py-12 bg-black bg-opacity-80 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 ${
          modalOpen ? "" : "hidden"
        }`}
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
              Add New Note
            </h1>

            <InputControl
              name="title"
              type="text"
              className={`mb-5 mt-2 text-gray-600 dark:text-gray-100 focus:outline-none font-normal w-full flex items-center py-3 px-3 text-sm border-gray-300 rounded border bg-transparent ${
                formValues.title.length === 60 && " border-yellow-600"
              }`}
              value={formValues.title}
              onChange={inputHandler}
              maxLength="60"
              placeholder="Title"
              label="Title"
            />

            <InputControl
              name="details"
              type="textarea"
              className={`mb-5 mt-2 text-gray-600 dark:text-gray-100 focus:outline-none font-normal w-full flex items-center py-3 px-3 text-sm border-gray-300 rounded border bg-transparent ${
                formValues.details.length === 255 && " border-yellow-600"
              }`}
              value={formValues.details}
              onChange={inputHandler}
              maxLength="255"
              placeholder="Details"
              label="Details"
              rows="4"
            />

            <label className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal">
              Color:
            </label>

            <div className="mt-3 mb-7 flex flex-wrap gap-4">
              {colors.map((color) => (
                <div className="flex items-center" key={color}>
                  <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      type="radio"
                      name="color"
                      className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                      id={color.toLowerCase()}
                      value={color}
                      checked={color === formValues.color}
                      onChange={inputHandler}
                    />
                    <div className="check-icon hidden border-4 border-green-700 rounded-full w-full h-full z-1" />
                  </div>
                  <label
                    htmlFor={color.toLowerCase()}
                    className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
                  >
                    {color}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-start w-full">
              <button
                type="button"
                className="focus:outline-none transition duration-150 ease-in-out hover:bg-green-600 bg-green-700 rounded text-white px-8 py-2 text-sm disabled:cursor-not-allowed disabled:hover:bg-green-700"
                onClick={() => submitHandler(false)}
                disabled={formValues.title === "" || formValues.details === ""}
              >
                {!editData ? "Submit" : "Update"}
              </button>
              <button
                type="button"
                className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={() => modalHandler(false)}
              >
                Cancel
              </button>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
              onClick={() => modalHandler(false)}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
