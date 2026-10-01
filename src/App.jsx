import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'


function App() {
 

  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    
  )
}



export default App
