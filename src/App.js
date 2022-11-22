import { AppContextProvider } from "./app-context";

import Search from "./components/Search";
import Notes from "./components/Notes";
import Fab from "./components/Fab";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-700">
      <AppContextProvider>
        <Search />
        <Fab />
        <Notes />
        <Modal />
      </AppContextProvider>
    </div>
  );
}

export default App;
