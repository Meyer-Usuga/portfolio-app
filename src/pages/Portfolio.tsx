import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Collaboration from "../components/Collaboration";

export function Portfolio() {
    return (
        <main>
            <Navbar />
            <About />
            <Projects />
            <Collaboration />
        </main>
    )
}

export default Portfolio; 