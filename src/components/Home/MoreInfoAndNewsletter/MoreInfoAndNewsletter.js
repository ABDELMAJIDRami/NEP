import {Button, Grid, TextField, Typography} from "@material-ui/core";
import {ArrowRightAlt} from "@material-ui/icons";

import colors from "../../../theme/colors";
import GreenPoints from "../../../assets/images/green-points.png";


const MoreInfoAndNewsletter = () => {
    return (
        <Grid container style={{height: '376px'}}>
            <Grid item xs={6}>
                <Typography variant='h1' color='secondary' style={{paddingTop: '22px'}}>
                    PLEASE NOTE THAT <br/>
                    APPLICATIONS TO JOIN THE <br/>
                    CURRENT PROGRAM ARE CLOSED.
                </Typography>
                <Typography variant='h3' style={{fontWeight: '500', marginTop: '12px'}}>
                    Applications for the 3rd edition of NEP will be launched <br/>
                    soon. Stay tuned!
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <div
                    style={{
                        position: 'relative',
                        backgroundColor: colors.grey,
                        height: '302px',
                        width: '100%',
                        marginLeft: '26px',
                        padding: '38px'
                    }}
                >
                    <Typography variant='h2'>
                        Never miss an update!
                    </Typography>
                    <Typography variant='h2' style={{fontWeight: 'normal'}}>
                        Subscribe to our newsletter
                    </Typography>
                    <TextField
                        id='name'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        size='small'
                        placeholder='Full Name*'
                        style={{backgroundColor: colors.white, marginTop: '22px'}}
                    />
                    <TextField
                        id='email'
                        type='email'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        size='small'
                        placeholder='Email*'
                        style={{backgroundColor: colors.white, marginTop: '11px', marginBottom: '30px'}}
                    />
                    <Button
                        variant='contained'
                        color='secondary'
                        disableElevation
                        fullWidth
                        endIcon={<ArrowRightAlt style={{color: colors.white}} />}
                    >
                        <Typography variant='h4' color='textSecondary'>
                            SUBSCRIBE
                        </Typography>
                    </Button>

                    <div
                        style={{
                            position: 'absolute',
                            top: '42px',
                            left: '94px',
                            height: '336px',
                            width: 'calc(50vw - 120px)',
                            zIndex: '-20',
                            backgroundColor: 'black'
                        }}
                    />
                </div>
            </Grid>

            <div
                style={{
                    position: 'relative',
                    width: '525px',
                    height: '152px',
                    bottom: '60px',
                    zIndex: '-10',
                    margin: '0px auto',
                }}
            >
                <img src={GreenPoints} alt="green-point-separator" />
            </div>
        </Grid>
    );
};

export default MoreInfoAndNewsletter;