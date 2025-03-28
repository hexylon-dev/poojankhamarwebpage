
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Blogs from './pages/PoojanSir/blogs';
import BlogPost from './pages/PoojanSir/blog-post';
import { Headers } from './components/Headers';
import HomePage from "./pages/home/index";
import AboutPage from "./pages/about/index";
import InnovationPage from "./pages/innovation/index";
import ContactPage from "./pages/contact/index";
import { HelmetProvider } from "react-helmet-async";
import IdeaPage from "./components/idea";
import Team from './pages/team/index';
import Footer from './components/Footer';


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
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-poojan-khamar" element={<AboutPage />} />
        <Route path="/innovations" element={<InnovationPage />} />
        <Route path="/ideas" element={<IdeaPage />} />
        {/* <Route path="/team" element={<Team />} /> */}
        <Route path="/creative-team" element={<Team />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;