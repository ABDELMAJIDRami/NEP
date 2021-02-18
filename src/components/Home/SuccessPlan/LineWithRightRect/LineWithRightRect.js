import colors from "../../../../theme/colors";

const LineWithRightRect = () => {
    return (
        <div style={{position: "relative"}}>
            <hr style={{border: `1px solid ${colors.white}`}}/>
            <div
                style={{
                    position: "absolute",
                    width: "6px",
                    height: "6px",
                    right: "0px",
                    top: "-2px",
                    backgroundColor: colors.white
                }}
            />
        </div>
    );
}

export default LineWithRightRect;