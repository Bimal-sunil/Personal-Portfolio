import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CustomCursor from "./animations/CustomCursor";
import Quote from "./pages/Quote";

function App() {
  return (
    <>
      <CustomCursor />
      <main className="bg-primary min-h-screen relative">
        <Home />
        <About />
        <Career />
        <Projects />
        <Quote />
        <Contact />
      </main>
    </>
  );
}

export default App;
