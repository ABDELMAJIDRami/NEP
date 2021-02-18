import {Typography} from "@material-ui/core";

import colors from "../../../../theme/colors";


const TypographyWithNumber = ({number, content}) => {
    return <Typography variant='h5' style={{margin: "10px 0px"}}>
        <span style={{color: colors.white, marginRight: "4px"}}>{number}</span> {content}
    </Typography>;
}

export default TypographyWithNumber;