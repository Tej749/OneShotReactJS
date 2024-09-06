import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
