import logo from "./logo.svg";
import "./App.css";

const App = () => (
    <>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div style={{ display: "flex", width: "100px", height: "100px" }}>
                <div id={"bars" + i}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        ))}
    </>
);

export default App;
