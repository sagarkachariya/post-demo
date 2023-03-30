import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postDetail/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
