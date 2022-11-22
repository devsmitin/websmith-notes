import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();
export const ModalContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function useModalContext() {
  return useContext(ModalContext);
}

export function AppContextProvider({ children }) {
  const [notes, updateNotes] = useState([]);
  const [modalOpen, modalStateHandler] = useState(false);
  const [editData, editDataHandler] = useState(null);

  useEffect(() => {
    document.title = "Websmith Notes";
    let defaultNotes = localStorage.getItem("my_notes");

    if (
      defaultNotes !== "" &&
      defaultNotes !== "[]" &&
      defaultNotes !== undefined &&
      defaultNotes !== "undefined"
    ) {
      defaultNotes = JSON.parse(defaultNotes);
      console.log("Local notes fetched...", defaultNotes);
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
      <ModalContext.Provider value={{ modalOpen, modalStateHandler }}>
        {children}
      </ModalContext.Provider>
    </AppContext.Provider>
  );
}
