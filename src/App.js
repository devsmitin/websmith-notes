import Search from "./components/Search";
import Notes from "./components/Notes";
import Fab from "./components/Fab";
import { AppContextProvider } from "./app-context";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <AppContextProvider>
        <Search />
        <Fab />
        <Notes />
      </AppContextProvider>
    </div>
  );
}

export default App;
