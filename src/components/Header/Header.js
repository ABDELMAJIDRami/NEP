import {Button, Container, Grid, Typography} from "@material-ui/core";
import {ArrowRightAlt} from "@material-ui/icons";
import {Link} from "react-router-dom";

import colors from "../../theme/colors";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";
import Facebook from "../../assets/images/facebook.png";
import ParticipantPortal from "../../assets/images/participant-portal@2x.png";
import BrandLogo from "../../assets/images/brand-logo@2x.png";


const Header = () => {
    return (
        <>
            <div style={{backgroundColor: colors.black}}>
                <Container maxWidth='md' style={{height: '40px'}}>
                    <Grid container justify='space-between' alignItems='center' style={{height: '100%'}}>
                        <Grid
                            container
                            item
                            direction='row'
                            justify='space-between'
                            style={{width: '140px'}}
                        >
                            <img src={Instagram} alt="instagram-logo" style={{height: '19px', objectFit: 'fit'}} />
                            <img src={Twitter} alt="twitter-logo" style={{height: '19px', objectFit: 'fit'}} />
                            <img src={Facebook} alt="facebook-logo" style={{height: '19px', objectFit: 'fit'}} />
                        </Grid>
                        <Grid
                            container
                            item
                            direction='row'
                            alignItems='flex-end'
                            style={{width: '240px'}}
                        >
                            <img
                                src={ParticipantPortal}
                                alt='participant-portal'
                                style={{height: '24px', objectFit: 'cover', marginRight: '10px'}}
                            />
                            <Link to='/login' style={{textDecoration: 'none'}}>
                                <Typography variant='h6' color='textSecondary'>
                                    PARTICIPANT LOGIN
                                </Typography>
                            </Link>
                            <hr
                                style={{border: `1px solid ${colors.white}`, width: '1px', height: '12px', margin: '4px 12px '}}
                            />
                            <Typography color='textSecondary'>
                                عربي
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Container maxWidth='md' style={{marginTop: '28px', marginBottom: '110px'}}>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item>
                        <img
                            src={BrandLogo}
                            alt="nep-brand-logo"
                            style={{width: '240px', objectFit: 'fill'}}
                        />
                    </Grid>
                    <Grid item style={{display: 'flex', alignItems: 'center'}}>
                        <Link to="/about" style={{textDecoration: 'none', height: '10px', marginRight: '18px'}}>
                            <Typography variant='h5' color='textPrimary' style={{marginBottom: '32px'}}>
                                ABOUT NEP
                            </Typography>
                        </Link>
                        <Link to="/program" style={{textDecoration: 'none', height: '10px', marginRight: '18px'}}>
                            <Typography variant='h5' color='textPrimary' style={{marginBottom: '32px'}}>
                                THE PROGRAM
                            </Typography>
                        </Link>
                        <Link to="/media" style={{textDecoration: 'none', height: '10px', marginRight: '18px'}}>
                            <Typography variant='h5' color='textPrimary' style={{marginBottom: '32px'}}>
                                MEDIA
                            </Typography>
                        </Link>
                        <Link to="/contact-us" style={{textDecoration: 'none', height: '10px', marginRight: '18px'}}>
                            <Typography variant='h5' color='textPrimary' style={{marginBottom: '32px'}}>
                                CONTACT US
                            </Typography>
                        </Link>
                        <Button
                            variant='contained'
                            color='secondary'
                            disableElevation
                            endIcon={<ArrowRightAlt />}
                            style={{color: colors.white, width: '140px'}}
                        >
                            <Typography variant='h6' color='textSecondary'>
                                APPLY
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Header;