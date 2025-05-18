import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Insight from "./components/Insight"
import Integration from "./components/Integration"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"
import Pricing from "./components/Pricing"

function App() {

  return (
    <main className="text-[16px] py-4 md:px-12">
     <Navbar/>
     <Hero/>
     <Partners/>
     <Integration/>
     <Insight/>
     <Features/>
     <Pricing/>
     <Footer/>
    </main>
  )
}

export default App
