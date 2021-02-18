import {useState} from "react";
import {Grid, Typography} from "@material-ui/core";

import colors from "../../../theme/colors";
import './mentors-participants.css';
import TitleWithIcon from "./TitleWithIcon/TitleWithIcon";
import CustomSwitch from "./CustomSwitch/CustomSwitch";

import SocialDevelopment from "../../../assets/images/vital-sectors/social-development.png";
import EconomicDevelopment from "../../../assets/images/vital-sectors/economic-development.png";
import InfrastructureAndEnvironment from "../../../assets/images/vital-sectors/infrastructure-and-environment.png";
import SecurityAndForeignAffairs from "../../../assets/images/vital-sectors/security-and-foreign-affairs.png";
import PublicServicesAdministration from "../../../assets/images/vital-sectors/public-services-administration.png";
import M1 from "../../../assets/images/mentors-and-participants/mentors/mentor-ohoud.png";
import M2 from "../../../assets/images/mentors-and-participants/mentors/mentor-abdullah.png";
import M3 from "../../../assets/images/mentors-and-participants/mentors/mentor-hessa.png";
import M4 from "../../../assets/images/mentors-and-participants/mentors/mentor-sheikh-abdullah.png";
import M5 from "../../../assets/images/mentors-and-participants/mentors/mentor-ohoud-2.png";
import M6 from "../../../assets/images/mentors-and-participants/mentors/mentor-abdullah-2.png";
import M7 from "../../../assets/images/mentors-and-participants/mentors/mentor-hessa-2.png";
import M8 from "../../../assets/images/mentors-and-participants/mentors/mentor-sheikh-abdullah-2.png";
import P1 from "../../../assets/images/mentors-and-participants/participants/participant-salwa.png";
import P2 from "../../../assets/images/mentors-and-participants/participants/participant-hassan.png";
import P3 from "../../../assets/images/mentors-and-participants/participants/participant-khalifa.png";
import P4 from "../../../assets/images/mentors-and-participants/participants/participant-afra.png";
import P5 from "../../../assets/images/mentors-and-participants/participants/participant-salwa-2.png";
import P6 from "../../../assets/images/mentors-and-participants/participants/participant-hassan-2.png";
import P7 from "../../../assets/images/mentors-and-participants/participants/participant-khalifa-2.png";
import P8 from "../../../assets/images/mentors-and-participants/participants/participant-afra-2.png";

const mentorsAndParticipants = {
    mentors: [
        [
            {icon: M1, title: 'HE Ohoud bint Khalfan Al Roum'},
            {icon: M2, title: 'HE Abdullah Bin Touq'},
            {icon: M3, title: 'HE Hessa bint Essa Buhumaid'},
            {icon: M4, title: 'HE Sheikh Abdullah bin Mohamed Al'},
        ],
        [
            {icon: M5, title: 'HE Ohoud bint Khalfan Al Roum'},
            {icon: M6, title: 'HE Abdullah Bin Touq'},
            {icon: M7, title: 'HE Hessa bint Essa Buhumaid'},
            {icon: M8, title: 'HE Sheikh Abdullah bin Mohamed Al'},
        ]
    ],
    participants: [
        [
            {icon: P1, title: 'Salwa Fouad Fadhel'},
            {icon: P2, title: 'Sheikha Hassan Al Khayyat'},
            {icon: P3, title: 'Khalifa Binhendi'},
            {icon: P4, title: 'Dr Afra Khalid Saeed Bintouq'},
        ],
        [
            {icon: P5, title: 'Salwa Fouad Fadhel'},
            {icon: P6, title: 'Sheikha Hassan Al Khayyat'},
            {icon: P7, title: 'Khalifa Binhendi'},
            {icon: P8, title: 'Dr Afra Khalid Saeed Bintouq'},
        ]
    ]
}


const MentorsAndParticipants = () => {
    const [displayMentors, setDisplayMentors] = useState(true);

    return (
        <Grid container direction='column' alignItems='center' style={{marginBottom: '98px'}}>
            <Typography variant='h1'>
                Meet the mentors & participants
            </Typography>
            <Grid container item justify='center' alignItems='center' style={{marginTop: '16px', marginBottom: '32px'}}>
                <Typography variant='h4' color={displayMentors ? 'secondary' : 'textPrimary'}>
                    Mentors
                </Typography>
                <CustomSwitch onChange={(event => setDisplayMentors(!event.target.checked))} />
                <Typography variant='h4' color={displayMentors ? 'textPrimary' : 'primary'}>
                    Participants
                </Typography>
            </Grid>
            <Grid container item style={{backgroundColor: colors.grey, padding: '6px 10px', marginBottom: '48px'}}>
                <Grid item xs={3}>
                    <TitleWithIcon
                        icon={SocialDevelopment}
                        alt='social-development'
                        title='SOCIAL DEVELOPMENT'
                    />
                </Grid>
                <Grid item xs={3}>
                    <TitleWithIcon
                        icon={EconomicDevelopment}
                        alt='economic-development'
                        title='ECONOMIC DEVELOPMENT'
                    />
                </Grid>
                <Grid item xs={3}>
                    <TitleWithIcon
                        icon={InfrastructureAndEnvironment}
                        alt='infrastructure-and-environment'
                        title='INFRASTRUCTURE & ENVIRONMENT'
                    />
                </Grid>
                <Grid item xs={3}>
                    <TitleWithIcon
                        icon={SecurityAndForeignAffairs}
                        alt='security-and-foreign-affairs'
                        title='SECURITY & INTERNATIONAL AFFAIRS'
                    />
                </Grid>
            </Grid>

            {mentorsAndParticipants[displayMentors ? 'mentors' : 'participants'].map(container => (
                <Grid container item justify='space-between' className='parent' style={{marginBottom: '9px'}}>
                    {container.map( item => (
                        <Grid item>
                            <div className='img-hoc'>
                                <img className='img' src={item.icon} alt="mentor-image" />
                                <div
                                    className='hide layer'
                                    style={{backgroundColor: displayMentors ? colors.orange : colors.green}}
                                />
                            </div>
                            <Typography
                                className={displayMentors ? 'title-orange' : 'title-green'}
                                variant='h6'
                            >
                                {item.title}
                            </Typography>
                            <div
                                className='hide info'
                                style={{backgroundColor: displayMentors ? colors.orange : colors.green}}
                            >
                                <img src={PublicServicesAdministration} alt='public-services-administration'/>
                                <Typography
                                    variant='h3'
                                    color='textSecondary'
                                    style={{display: 'inline-block', marginLeft: '8px', letterSpacing: '4px', fontWeight: '400'}}>
                                    PUBLIC SERVICES & ADMINISTRATION
                                </Typography>
                                <hr align='left' style={{border: `1px solid ${colors.white}`, width: '540px'}}/>
                                <div style={{display: 'flex', marginTop: '20px', alignItems: 'flex-end'}}>
                                    <Typography variant='h3'>
                                        {item.title}
                                    </Typography>
                                    <div style={{height: '16px', width: '2px', backgroundColor: colors.black, margin: '4px 8px'}} />
                                    <Typography variant='h5' style={{fontWeight: 'normal', fontStyle: 'italic'}}>
                                        Minister of State for Happiness and Wellbeing
                                    </Typography>
                                </div>

                                <div style={{ position: 'absolute', bottom: '24px'}}>
                                    <img src={P1} alt='participant-image' style={{width: '36px', height: '36px', objectFit: 'scale-down'}}/>
                                    <Typography
                                        variant='subtitle1'
                                        color='textSecondary'
                                        style={{display: 'inline-block', marginLeft: '8px'}}>
                                        Meet my {displayMentors ? 'participant' : 'mentor'}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Grid>
    );
};

export default MentorsAndParticipants;