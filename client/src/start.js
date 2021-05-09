import ReactDOM from "react-dom";
import Homepage from "./components/HomePage";
import App from "./components/App";

if (window.location.pathname === "/") {
    ReactDOM.render(<Homepage />, document.querySelector("main"));
} else {
    ReactDOM.render(<App />, document.querySelector("main"));
}
