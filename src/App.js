import Header from "./components/Header.js"
import Navbar from "./components/Navbar.js"
import About from "./components/About.js"
import Projects from "./components/Projects"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
