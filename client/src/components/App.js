import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
