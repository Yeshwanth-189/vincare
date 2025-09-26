import "./App.css";
import Vincare from "./components/Vincare";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Vincare />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
