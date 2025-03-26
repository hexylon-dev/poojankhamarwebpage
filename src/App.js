import './styles/ShimmerButton.css'
import './styles/animations.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/PoojanSir/Home"
import About from './pages/PoojanSir/About'
import Innovation from './pages/PoojanSir/Innovation'
import Idea from './pages/PoojanSir/Idea'
import Collabrate from './pages/PoojanSir/Collaborate'
import Blogs from './pages/PoojanSir/blogs'
import BlogPost from './pages/PoojanSir/blog-post'
import {Headers} from './components/Headers'
import FooterWithTransition from './components/Footer'
function AppContent() {
  const loc = useLocation();
  return (
    <>
      {loc.pathname !== "/" && <Headers />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/innovations" element={<Innovation />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="/contact" element={<Collabrate />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
      </Routes>
      <FooterWithTransition />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;