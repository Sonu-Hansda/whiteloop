import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {

  return (
    <>
     <Navbar/>
    <main className="max-w-6xl mx-auto">
     <Hero/>
    </main>
     <Footer/>
    </>
  )
}

export default App
