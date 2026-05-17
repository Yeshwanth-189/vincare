import "./App.css";
import Vincare from "./components/Vincare";
import Products from "./components/Products";
import ProductDetailsPage from "./components/ProductDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Vincare />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
