import {Button, Container, Grid, Typography} from "@material-ui/core";
import {ArrowRightAlt} from "@material-ui/icons";
import {Link} from "react-router-dom";

import colors from "../../theme/colors";
import BrandLogo from "../../assets/images/brand-logo.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";
import Facebook from "../../assets/images/facebook.png";
import ParticipantPortal from "../../assets/images/participant-portal@2x.png";


const Footer = () => {
    return (
        <div style={{backgroundColor: colors.black}}>
            <Container maxWidth='md'>
                <Grid container style={{height: '310px', paddingTop: '70px'}}>
                    <Grid container item xs={4} direction='column' alignItems='center'>
                        <img
                            src={BrandLogo}
                            alt="nep-brand-logo"
                            style={{width: '240px', objectFit: 'fill'}}
                        />
                        <hr
                            align='center'
                            style={{border: `1px solid ${colors.white}`, width: '240px', margin: '34px 0px'}}
                        />
                        <Grid container item justify='space-between' style={{width: '216px'}}>
                            <img src={Instagram} alt="instagram-logo"/>
                            <img src={Twitter} alt="twitter-logo"/>
                            <img src={Facebook} alt="facebook-logo"/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4} direction='column' alignItems='center'>
                        <Link to="/about" style={{textDecoration: 'none'}}>
                            <Typography variant='h5' color='textSecondary' style={{marginBottom: '32px'}}>
                                ABOUT NEP
                            </Typography>
                        </Link>
                        <Link to="/program" style={{textDecoration: 'none'}}>
                            <Typography variant='h5' color='textSecondary' style={{marginBottom: '32px'}}>
                                THE PROGRAM
                            </Typography>
                        </Link>
                        <Link to="/media" style={{textDecoration: 'none'}}>
                            <Typography variant='h5' color='textSecondary' style={{marginBottom: '32px'}}>
                                MEDIA
                            </Typography>
                        </Link>
                        <Link to="/contact-us" style={{textDecoration: 'none'}}>
                            <Typography variant='h5' color='textSecondary' style={{marginBottom: '32px'}}>
                                CONTACT US
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid container item xs={4} direction='column'>
                        <Typography variant='h4' color='textSecondary' style={{fontWeight: '900'}}>
                            PLEASE NOTE THAT APPLICATIONS TO JOIN THE CURRENT PROGRAM ARE CLOSED.
                        </Typography>
                        <Typography variant='h5' color='textSecondary' style={{padding: '18px 0px 40px'}}>
                            Applications for the 3rd edition of NEP will be <br/> launched soon. Stay tuned!
                        </Typography>
                        <Grid container item alignItems='center'>
                           <Grid item xs={2}>
                               <img
                                   src={ParticipantPortal}
                                   alt='participant-portal'
                                   style={{width: '44px', objectFit: 'fill'}}
                               />
                           </Grid>
                            <Grid container item xs={10} direction='column' alignItems='flex-start'>
                                <Typography variant='h5' color='textSecondary' style={{marginLeft: '8px'}}>
                                    PARTICIPANT PORTAL
                                </Typography>
                                <Button endIcon={<ArrowRightAlt color='secondary' />}>
                                    <Typography color='secondary'>
                                        LOGIN
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <hr
                style={{border: `1px solid ${colors.white}`, width: '100%'}}
            />
            <Typography
                variant='body2'
                color='textSecondary'
                style={{width: '424px', height: '40px', margin: 'auto', marginTop: '20px'}}
            >
                Copyright © 2020 Crown Prince Court Abu Dhabi. All rights reserved.
            </Typography>
        </div>
    )
}

export default Footer;