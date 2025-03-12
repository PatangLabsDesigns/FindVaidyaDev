import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
