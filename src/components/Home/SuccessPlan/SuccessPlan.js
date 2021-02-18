import {Grid, Typography} from "@material-ui/core";

import colors from "../../../theme/colors";
import LineWithRightRect from "./LineWithRightRect/LineWithRightRect";
import TypographyWithNumber from "./TypographyWithNumber/TypographyWithNumber";
import LineWithLeftRect from "./LineWithLeftRect/LineWithLeftRect";
import TitleWithPercentage from "./TitleWithPercentage/TitleWithPercentage";
import Plan from "../../../assets/images/success-plan.png";


const SuccessPlan = () => {
    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            style={{backgroundColor: colors.green, height: '780px', padding: '38px', marginBottom: '140px'}}
        >
            <Typography variant='h1' color='textSecondary'>
                SUCCESS PLAN
            </Typography>
            <Typography
                variant='body1'
                style={{marginTop: '20px', marginBottom: '74px', textAlign: 'center', padding: '0px 64px'}}
            >
                The overall Success Plan strategy is formative. Evaluation of participants’ learning will take place
                throughout the program as they engage in hands-on activities individually or in small groups. It will
                include self, peer, and faculty review. Evaluation includes the following components:
            </Typography>

            <Grid container item>
                <Grid container justify='flex-end' item xs>
                    <div style={{width: '200px'}}>
                        <TitleWithPercentage title='Capstone Project' percentage='60'/>
                        <TypographyWithNumber number='1' content='Integration of Key principles'/>
                        <LineWithRightRect/>
                        <TypographyWithNumber number='2' content='Oral presentation'/>
                        <LineWithLeftRect/>
                        <TypographyWithNumber number='3' content='Written summary report'/>
                        <LineWithRightRect/>
                    </div>
                    <div style={{width: '200px', marginTop: '76px'}}>
                        <TitleWithPercentage title='Overall Program Participation' percentage='10'/>
                        <TypographyWithNumber number='1' content='Attendance'/>
                        <LineWithRightRect/>
                        <TypographyWithNumber number='2' content='Readiness'/>
                        <LineWithLeftRect/>
                        <TypographyWithNumber number='3' content='Written summary report'/>
                        <LineWithRightRect/>
                        <TypographyWithNumber number='3' content='Mentor Interaction'/>
                        <LineWithLeftRect/>
                    </div>
                </Grid>
                <Grid item xs>
                    <img src={Plan} alt="success-plan" style={{width: '360px', margin: '4px 8px'}}/>
                </Grid>
                <Grid item xs>
                    <div style={{width: '200px'}}>
                        <TitleWithPercentage title='Personal Development Plan' percentage='20'/>
                        <TypographyWithNumber number='1' content='NEP Insights'/>
                        <LineWithRightRect/>
                        <TypographyWithNumber number='2' content='Career mission statement'/>
                        <LineWithLeftRect/>
                        <TypographyWithNumber number='3' content='Development objectives'/>
                        <LineWithRightRect/>
                        <TypographyWithNumber number='4' content='Action Plan'/>
                        <LineWithLeftRect/>
                    </div>
                    <div style={{width: '200px', marginTop: '42px'}}>
                        <TitleWithPercentage title='Sprint Assignments' percentage='10'/>
                        <TypographyWithNumber number='1' content='Project solution'/>
                        <LineWithRightRect/>
                        <TypographyWithNumber number='2' content='Organization'/>
                        <LineWithLeftRect/>
                        <TypographyWithNumber number='3' content='Knowledge'/>
                        <LineWithRightRect/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SuccessPlan;