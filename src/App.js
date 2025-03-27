
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Blogs from './pages/PoojanSir/blogs';
import BlogPost from './pages/PoojanSir/blog-post';
import { Headers } from './components/Headers';
import HomePage from "./pages/home/index";
import AboutPage from "./pages/about/index";
import InnovationPage from "./pages/innovation/index";
import ContactPage from "./pages/contact/index";
import IdeaPage from "./components/idea";
import Footer from './components/Footer';
// You'll need to create this page

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const loc = useLocation();

  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-poojan-khamar" element={<AboutPage />} />
        <Route path="/innovations" element={<InnovationPage />} />
        <Route path="/ideas" element={<IdeaPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;