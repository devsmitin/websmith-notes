import { useEffect, useState } from "react";
import Search from "./components/Search";
import Notes from "./components/Notes";
import Fab from "./components/Fab";
import { AppContext, appData } from "./app-context";

import "./App.css";

function App() {
  const [data, updateData] = useState(appData);

  useEffect(() => {
    document.title = `Notes app!`;
    // let database = localStorage.getItem("data") || [];
    // updateData(database);
  }, []);

  return (
    <AppContext.Provider value={{ data, updateData }}>
      <Search />
      <Fab />
      <Notes />
    </AppContext.Provider>
  );
}

export default App;
