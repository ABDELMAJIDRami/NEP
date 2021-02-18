import {Typography, withStyles} from "@material-ui/core";

import colors from "../../../../theme/colors";


const CustomTypography = withStyles((theme) => ({
    root: {
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight,
        color: theme.palette.primary.main,
        backgroundColor: colors.grey,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '18px',
        marginBottom: '30px',
        padding: '20px 12px',
        height: '40px',
        width: '186px'
    }
}))(Typography);

export default CustomTypography;