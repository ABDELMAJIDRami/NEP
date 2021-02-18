import {Switch, withStyles} from "@material-ui/core";

import colors from "../../../../theme/colors";

const CustomSwitch = withStyles({
    switchBase: {
        color: colors.orange,
        '&$checked': {
            color: colors.green,
        },
        '&$checked + $track': {
            backgroundColor: colors.green,
        },
    },
    checked: {},
    track: {
        backgroundColor: colors.orange
    },
})(Switch);

export default CustomSwitch;