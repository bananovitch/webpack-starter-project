import ReactDOM from "react-dom";
import App from "./App";

const arr = [1,2,3];
const IAmJS6 = () => console.log(...arr);
window.IAmJS6 = IAmJS6;

ReactDOM.render(<App/>, document.getElementById("app"))