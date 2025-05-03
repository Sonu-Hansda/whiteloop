import Hero from "./components/Hero"
import Integration from "./components/Integration"
import Navbar from "./components/Navbar"
import Partners from "./components/Partners"

function App() {

  return (
    <main className="text-[16px] py-4 px-20">
     <Navbar/>
     <Hero/>
     <Partners/>
     <Integration/>
    </main>
  )
}

export default App
