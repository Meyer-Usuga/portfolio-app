import Navbar from "../components/Navbar";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";

export function Portfolio() {
    return (
        <main className="portfolio-container">
            <Navbar />
            <div className="portfolio-content">
                <About />
                <TechStack />
                <Projects />
            </div>
        </main>
    )
}

export default Portfolio; 