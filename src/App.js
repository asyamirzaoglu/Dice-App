import "./App.css";
import { Route, Routes } from "react-router-dom";
import DiceRoll from "./components/DiceRoll";
import Win from "./components/Win";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DiceRoll />}></Route>
        <Route path="/win" element={<Win />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
