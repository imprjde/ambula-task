import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Todos from "./components/TodoTask/Todos";
import ShoppingCart from "./components/CartTask/ShoppingCart";
import HomePage from "./components/RoutingTask/HomePage";
import AboutPage from "./components/RoutingTask/AboutPage";
import ContactPage from "./components/RoutingTask/ContactPage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todolist-task" element={<Todos />} />
            <Route path="/shoppingCart-task" element={<ShoppingCart />} />
            <Route path="/routingTask/home" element={<HomePage />} />
            <Route path="/routingTask/about" element={<AboutPage />} />
            <Route path="/routingTask/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
