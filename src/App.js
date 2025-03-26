// import "./styles/ShimmerButton.css";
// import "./styles/animations.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/PoojanSir/Home"
// import About from "./pages/PoojanSir/About";
// import Innovation from "./pages/PoojanSir/Innovation";
// import IdeaPage from "./pages/ideas/index";
// import Collabrate from "./pages/PoojanSir/Collaborate";
// import Idea from "./pages/PoojanSir/Idea";

import HomePage from "./pages/home/index";
import AboutPage from "./pages/about/index";
import InnovationPage from "./pages/innovation/index";
import ContactPage from "./pages/contact/index";
import IdeaPage from "./pages/ideas/index";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Collabrate />} /> */}
        {/* <Route path="/idea" element={<IdeaPage />} /> */}

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/innovations" element={<InnovationPage />} />
        <Route path="/ideas" element={<IdeaPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
