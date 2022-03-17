import Navbar from "./components/Navbar"
import FirstShowcase from "./components/Showcase/FirstShowcase"
import SecondMainShowcase from "./components/Showcase/SecondMainShowcase"
import ThirdShowcase from "./components/Showcase/ThirdShowcase"
import FourthShowcase from "./components/Showcase/FourthShowcase"
import Sponsors from "./components/sponsor/Sponsors"
import BottomHeroSec from "./components/bottom-hero-sec/BottomHeroSec"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="heroGrid">
        <FirstShowcase />
        <SecondMainShowcase />
        <ThirdShowcase />
        <FourthShowcase />
        
      </div>
      <div>
        <BottomHeroSec />
      </div>
      <Sponsors />
    </div>
  )
}

export default App
