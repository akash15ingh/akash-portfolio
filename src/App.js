import "./App.css";
import Contact from "./Components/Contact";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";

import Projects from "./Components/Projects";
// import ScrollEffect from "./Components/ScrollEffect";

function App() {
  return (
    <div>
      <NavBar />
      {/* <ScrollEffect /> */}
      <Main />
      <Explore />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
