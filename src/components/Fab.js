import React from "react";
import { useModalContext } from "../app-context";

function Fab() {
  const modalContext = useModalContext();
  let { modalStateHandler } = modalContext;

  return (
    <div className="mx-auto container px-6">
      <div className="fixed bottom-10 lg:bottom-20 right-10 lg:right-20">
        <button
          className="block bg-green-700 transition duration-150 ease-in-out hover:bg-green-600 rounded-full text-white px-6 py-4"
          onClick={() => modalStateHandler(true)}
        >
          + Add New
        </button>
      </div>
    </div>
  );
}

export default Fab;
