import colors from "../../../../theme/colors";

const LineWithLeftRect = () => {
    return (
        <div style={{position: "relative"}}>
            <hr style={{border: `1px solid ${colors.white}`}}/>
            <div
                style={{
                    position: "absolute",
                    width: "6px",
                    height: "6px",
                    left: "0px",
                    top: "-2px",
                    backgroundColor: colors.white
                }}
            />
        </div>
    );
}

export default LineWithLeftRect;