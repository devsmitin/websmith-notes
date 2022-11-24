import React, { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();
export const ModalContext = createContext();
export const SearchContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function useModalContext() {
  return useContext(ModalContext);
}

export function useSearchContext() {
  return useContext(SearchContext);
}

export function AppContextProvider({ children }) {
  const [notes, updateNotes] = useState([]);
  const [modalOpen, modalStateHandler] = useState(false);
  const [editData, editDataHandler] = useState(null);
  const [searchRes, searchResHandler] = useState(null);

  useEffect(() => {
    document.title = "Smit's Notes App";
    let defaultNotes = localStorage.getItem("my_notes");
    if (!defaultNotes) defaultNotes = "[]";

    if (
      defaultNotes !== "" &&
      defaultNotes !== "[]" &&
      defaultNotes !== undefined &&
      defaultNotes !== "undefined"
    ) {
      defaultNotes = JSON.parse(defaultNotes);
      updateNotes(defaultNotes);
    } else {
      console.log("Local notes fetched, nothing found.");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my_notes", JSON.stringify(notes));
    console.log("Local notes updated...");
  }, [notes]);

  return (
    <AppContext.Provider
      value={{ notes, updateNotes, editData, editDataHandler }}
    >
      <SearchContext.Provider value={{ searchRes, searchResHandler }}>
        <ModalContext.Provider value={{ modalOpen, modalStateHandler }}>
          {children}
        </ModalContext.Provider>
      </SearchContext.Provider>
    </AppContext.Provider>
  );
}
