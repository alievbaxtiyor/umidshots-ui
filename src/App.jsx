import './App.css'
import { HeroSection } from './components/HeroSectionNew'
import { AboutSection } from './components/AboutSectionTranslated'
import { ExpertiseSection } from './components/ExpertiseSection'
import { LanguageSwitcher } from './components/LanguageSwitcher'

function App() {
  return (
    <div className="portfolio-app">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <LanguageSwitcher />
    </div>
  )
}

export default App
