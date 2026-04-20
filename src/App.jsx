import './App.css'
import { HeroSection } from './components/HeroSectionNew'
import { AboutSection } from './components/AboutSectionTranslated'
import { LanguageSwitcher } from './components/LanguageSwitcher'

function App() {
  return (
    <div className="portfolio-app">
      <HeroSection />
      <AboutSection />
      <LanguageSwitcher />
    </div>
  )
}

export default App
