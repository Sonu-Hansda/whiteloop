import Hero from "./components/Hero"
import Insight from "./components/Insight"
import Integration from "./components/Integration"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"

function App() {

  return (
    <main className="text-[16px] py-4 px-12">
     <Navbar/>
     <Hero/>
     <Partners/>
     <Integration/>
     <Insight/>
    </main>
  )
}

export default App
