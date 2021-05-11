import ReactDOM from "react-dom";
import Homepage from "./components/Pages/HomePage";
import Upload from "./components/Upload/Upload";
import App from "./components/App";

if (window.location.pathname === "/") {
    ReactDOM.render(<Homepage />, document.querySelector("main"));
} else if (window.location.pathname === "/upload") {
    ReactDOM.render(<Upload />, document.querySelector("main"));
} else {
    ReactDOM.render(<App />, document.querySelector("main"));
}
