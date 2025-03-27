// import './styles/ShimmerButton.css'
// import './styles/animations.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Blogs from './pages/PoojanSir/blogs'
import BlogPost from './pages/PoojanSir/blog-post'
import {Headers} from './components/Headers'
// import FooterWithTransition from './components/'
import HomePage from "./pages/home/index";
import AboutPage from "./pages/about/index";
import InnovationPage from "./pages/innovation/index";
import ContactPage from "./pages/contact/index";
import IdeaPage from "./pages/ideas/index";
import { HelmetProvider } from "react-helmet-async";


function App() {
  return (
    <HelmetProvider>
    <Router>
      <AppContent />
      </Router>
      </HelmetProvider>
  );
}

function AppContent() {
  const loc = useLocation();

  return (
    <>
      {loc.pathname !== "/" && <Headers />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/innovations" element={<InnovationPage />} />
        <Route path="/ideas" element={<IdeaPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;
