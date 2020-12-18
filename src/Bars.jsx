import "./Bars.css";

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
        <div style={{ width: "100vw", height: "100vh" }}>
            <div className="spinners" style={{ display: "flex", flex: 1, flexDirection: "column", height: "100%" }}>
                {/* <div className="row" style={{ ...styles.flexCenter, ...styles.row }}>
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
                </div> */}
                <div className="row" style={{ ...styles.flexCenter, ...styles.row }}>
                    <div className="spinner spinner-bounce-text"></div>
                </div>
                <div className="row" style={{ ...styles.flexCenter, ...styles.row }}>
                    <div className="spinner text-spinner spinner-text-fast"></div>
                </div>
            </div>
        </div>
    );
}
