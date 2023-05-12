import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import About from "./pages/AboutPage/About";
import Error404 from "./pages/Error404Page/Error404";
import Lodging from "./pages/LodgingPage/Lodging";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging:lodgingID" element={<Lodging />} />
        {/* Redirection to page 404 for all others routes */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
