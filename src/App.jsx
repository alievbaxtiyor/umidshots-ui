import './App.css'
import { HeroSection } from './components/HeroSectionNew'
import { AboutSection } from './components/AboutSectionTranslated'
import { ExpertiseSection } from './components/ExpertiseSection'
import { PortfolioVideos } from './components/PortfolioVideos'
import { ContactSection } from './components/ContactSection'
import { LanguageSwitcher } from './components/LanguageSwitcher'

function App() {
  return (
    <div className="portfolio-app">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <PortfolioVideos />
      <ContactSection />
      <LanguageSwitcher />
    </div>
  )
}

export default App
