import {createMuiTheme} from "@material-ui/core";

import colors from "./colors";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.green
        },
        secondary: {
            main: colors.orange
        },
        text: {
            primary: colors.black,
            secondary: colors.white
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '28px',
            fontWeight: '900'
        },
        h2: {
            fontSize: '18px',
            fontWeight: '900'
        },
        h3: {
            fontSize: '18px',
            fontWeight: '700'  // bold
        },
        h4: {
            fontSize: '14px',
            fontWeight: '700'
        },
        h5: {
            fontSize: '14px',
            fontWeight: '500'
        },
        h6: {
            fontSize: '12px',
            fontWeight: '700'
        },
        subtitle1: {
            fontSize: '12px',
            fontWeight: '400'  // normal
        },
        body1: {
            fontSize: '16px',
            fontWeight: '400'
        },
        body2: {
            fontSize: '14px',
            fontWeight: '400'
        },
    }
});

export default theme;