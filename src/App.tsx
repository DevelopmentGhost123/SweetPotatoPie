import About from "./componens/About/About";
import { Header } from "./componens/Header/Header";
import { Home } from "./componens/Home/Home";
import Partnerships from "./componens/Partnerships/Partnerships";
import "./App.css";
import "./fonts.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Partnerships />
      <About />
    </>
  );
}

export default App;
