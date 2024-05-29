import About from "./componens/About/About";
import { Header } from "./componens/Header/Header";
import { Home } from "./componens/Home/Home";
import Partnerships from "./componens/Partnerships/Partnerships";
import "./App.css";
import "./fonts.css";
import Contact from "./componens/Contact/Contact";

function App() {
  return (
    <div className="all-project-area">
      <Header />
      <Home />
      <Partnerships />
      <About />
      <Contact />
    </div>
  );
}

export default App;
