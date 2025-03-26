import { Home as HomeIcon, Disc, Flame, FileText, Target, Phone, Linkedin, Instagram } from "lucide-react"
import '../../styles/animations.css'
import '../../styles/ShimmerButton.css'
import Page1 from "./Page1"
import JourneyPage from "./JourneyPage"
import LatestLab from "./LatestLab"
import ReadyShapeFuture from "./ReadyShapeFuture"
function Home() {
  return (
    <>
      <Page1 />
      <JourneyPage />
      <LatestLab />
      <ReadyShapeFuture />
    </>
  )
}

export default Home