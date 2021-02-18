import { Grid, Typography } from "@material-ui/core";

import GroupOfPeople from "../../../assets/images/group-of-people.png";
import colors from "../../../theme/colors";


const Intro = () => {
    return (
        <Grid container style={{paddingBottom: '150px'}}>
            <Grid item xs={6} style={{paddingRight: '54px'}}>
                <Typography variant='h1' style={{paddingBottom: '18px'}}>
                    NEP2.0: Edition 2020
                </Typography>
                <Typography variant='body1'>
                    The 2020 edition of NEP is a 9-month program designed to develop Emirati technical leaders
                    who will shape the future of 25 industry sectors critical to the UAE.
                </Typography>
                <br/>
                <Typography variant='body1'>
                    Built with agility, health, and safety in mind, the hybrid program will include both online
                    and onsite sessions based on the latest in learning strategy, mentoring by UAE sector leaders,
                    immersive learning experiences, sector-specific learning, and an individual Capstone Project
                    addressing a major challenge in each sector.
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <div style={{width: '536px', height: '340px', position: 'relative', backgroundColor: colors.grey}}>
                    <img src={GroupOfPeople} alt="group-of-people"/>
                    <div
                        style={{
                            position: 'absolute',
                            zIndex: '-10',
                            height: '100%',
                            width: 'calc(50vw - 92px)',
                            top: '38px',
                            left: '92px',
                            backgroundColor: colors.black
                        }}
                    />
                </div>
            </Grid>
        </Grid>
    );
};

export default Intro;