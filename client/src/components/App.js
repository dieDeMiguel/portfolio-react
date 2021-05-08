import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";

function App() {
    return (
        <BrowserRouter>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </BrowserRouter>
    );
}

export default App;
