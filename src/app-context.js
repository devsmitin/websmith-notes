import { createContext } from "react";

export const appData = {
  notes: [{
    title: "Hello World",
    details: "This is the default note",
    color: "Blue"
  }],
};

export const AppContext = createContext();