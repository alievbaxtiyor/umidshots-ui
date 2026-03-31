import './App.css'
import LightRays from './LightRays'
import Navbar from './Navbar'
import { ThreeDCardDemo } from './components/ThreeDCardDemo'
import { useTheme } from './context/ThemeContext'

function App() {
  const { isDark } = useTheme();

  return (
    <>
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor={isDark ? "#ffffff" : "#000000"}
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <Navbar />

      <div className="content">
        <ThreeDCardDemo />
      </div>
    </>
  )
}

export default App
