import "./Bars.css";
import "./Loader.css";

const styles = {
    flexCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        width: "100%",
        height: "10%",
    },
};

export default function Bars() {
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "#f9f9fa" }}>
            {/* <div className="spinners" style={{ display: "flex", flex: 1, flexDirection: "column", height: "100%" }}>
                <div className="row" style={{ ...styles.flexCenter, ...styles.row }}>
                    <div className="spinner spinner-bounce-bottom"></div>
                </div>
                <div className="row" style={{ ...styles.flexCenter, ...styles.row }}>
                    <div className="spinner spinner-bounce-top"></div>
                </div>
                <div className="row" style={{ ...styles.flexCenter, ...styles.row }}>
                    <div className="spinner spinner-bounce-middle"></div>
                </div>
                <div className="row" style={{ ...styles.flexCenter, ...styles.row }}>
                    <div className="spinner spinner-blink"></div>
                </div>

                <div className="row" style={{ ...styles.flexCenter, ...styles.row }}>
                    <div className="spinner spinner-bounce-text"></div>
                </div>
                <div className="row" style={{ ...styles.flexCenter, ...styles.row }}>
                    <div className="spinner text-spinner spinner-text-fast"></div>
                </div>
            </div> */}
            <div style={{ flex: 1, height: "100%", ...styles.flexCenter }}>
                <div style={{ width: "160px", height: "160px", ...styles.flexCenter }}>
                    <div style={{ display: "flex", flexDirection: "column", height: "80px" }}>
                        <div className="loader-before"></div>
                        <div style={{ width: "16px", height: "16px" }}></div>
                    </div>
                    <div className="loader"></div>
                    <div style={{ display: "flex", flexDirection: "column", height: "80px" }}>
                        <div style={{ width: "16px", height: "16px" }}></div>
                        <div className="loader-after"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
