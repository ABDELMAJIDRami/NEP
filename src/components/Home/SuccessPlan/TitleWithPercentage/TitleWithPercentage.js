import {Typography} from "@material-ui/core";

import colors from "../../../../theme/colors";


const TitleWithPercentage = ({percentage, title}) => {
    return (
        <div style={{backgroundColor: colors.white, height: '38px', display: 'flex'}}>
            <div
                style={{
                    backgroundColor: colors.green,
                    color: colors.white,
                    width: '58px',
                    margin: '2px',
                    paddingLeft: '4px',
                    fontSize: '24px',
                    fontWeight: 'bold'
                }}
            >
                {percentage}%
            </div>
            <Typography
                variant='h4'
                align='center'
                style={{
                    width: '136px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {title}
            </Typography>
        </div>
    );
}

export default TitleWithPercentage;