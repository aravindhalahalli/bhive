import './App.css'
import DownloadApp from './components/download/DownloadApp'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
// import HeroSection from './components/hero-section/HeroSection'
// import Features from './components/workspace-features/Features'

function App() {
  return (
    <div className='bg-[#F9FAFF] min-h-screen'>
      <Header />
      {/* <HeroSection />
      <Features /> */}
      {/* Space overview */}
      {/* Download the app */}
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default App
