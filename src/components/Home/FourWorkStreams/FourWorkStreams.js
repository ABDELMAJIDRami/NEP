import {Grid, Typography} from "@material-ui/core";

import CustomTypography from "./CustomTypography/CustomTypography";
import colors from "../../../theme/colors";
import MentoringWithSectorLeader from "../../../assets/images/four-workstreams/mentoring-with-sector-leaders-circle.png";
import CapstoneProjects from "../../../assets/images/four-workstreams/capstone-projects-circle.png";
import ImmersiveExperiences from "../../../assets/images/four-workstreams/immersive-experiences-circle.png";
import SectorSpecificCourseWork from "../../../assets/images/four-workstreams/sector-specific-circle.png";
import GreenPoints from "../../../assets/images/green-points.png";


const FourWorkStreams = () => {
    return (
        <div style={{marginBottom: '176px', position: 'relative'}}>
            <div
                style={{
                    backgroundRepeat: 'repeat-x',
                    backgroundImage: `url(${GreenPoints})`,
                    position: 'absolute',
                    top: '-128px',
                    right: 'calc(50% + 18px)',
                    width: 'calc(50vw)',
                    height: '152px',
                    zIndex: '-10',
                    transform: 'rotate(180deg)'
                }}
            />
            <Typography variant='h1' style={{margin: 'auto', width: '290px', }}>
                FOUR WORKSTREAMS
            </Typography>
            <Typography variant='body1' align='center' style={{marginTop: '56px', marginBottom: '32px'}}>
                NEP uses a hybrid model of virtual and in-person transformational learning. Participants will engage in
                team-building immersion, mentoring from accomplished sector leaders, dialogue with top professors and
                guest VIPs, site visits, creating a Personal Development Plan, learn-by-doing assignments, and a Capstone
                Project, including coaching and support for post-program implementation.
            </Typography>
            <Grid container>
                <Grid
                    container
                    item
                    xs={3}
                    direction='column'
                    alignItems='center'
                    style={{position: 'relative', paddingLeft: '20px', paddingRight: '14px'}}
                >
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '72px',
                            top: '46px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            height: '144px',
                            top: '46px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '10px',
                            top: '189px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: colors.green,
                            width: '6px',
                            height: '6px',
                            top: '187px',
                            left: '10px'
                        }}
                    />

                    <img
                        src={MentoringWithSectorLeader}
                        alt='mentoring-with-sector-leaders'
                    />
                    <CustomTypography>
                        Mentoring With<br/> Sector Leaders
                    </CustomTypography>
                    <Typography variant='subtitle1'>
                        Each participant will be assigned to a sector leader who acts as a mentor throughout the program.
                        Interactions include one-on-one dialogue on sector issues and Capstone ideas; shadowing to see
                        their daily engagements in action; potential to join mentors on key sector conferences/missions;
                        rotating across different departments in their organization; and Capstone guidance from the mentor
                        and their technical team.
                    </Typography>
                </Grid>

                <Grid
                    container
                    item
                    xs={3}
                    direction='column'
                    alignItems='center'
                    style={{position: 'relative', paddingLeft: '20px', paddingRight: '14px'}}
                >
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '72px',
                            top: '46px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            height: '144px',
                            top: '46px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '10px',
                            top: '189px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: colors.green,
                            width: '6px',
                            height: '6px',
                            top: '187px',
                            left: '10px'
                        }}
                    />

                    <img
                        src={CapstoneProjects}
                        alt='capstone-projects-addressing-sector-issues'
                    />
                    <CustomTypography>
                        Capstone Projects<br/>Addressing Sector Issues
                    </CustomTypography>
                    <Typography variant='subtitle1'>
                        Throughout the program, each participant will individually develop solutions to actual challenges
                        in their sector and pitch their project to senior panel members. The Capstone journey includes
                        six checkpoints with submissions.
                    </Typography>
                </Grid>

                <Grid
                    container
                    item
                    xs={3}
                    direction='column'
                    alignItems='center'
                    style={{position: 'relative', paddingLeft: '20px', paddingRight: '14px'}}
                >
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '72px',
                            top: '46px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            height: '522px',
                            top: '46px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '10px',
                            top: '189px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: colors.green,
                            width: '6px',
                            height: '6px',
                            top: '187px',
                            left: '10px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '10px',
                            top: '408px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: colors.green,
                            width: '6px',
                            height: '6px',
                            top: '406px',
                            left: '10px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '10px',
                            top: '567px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: colors.green,
                            width: '6px',
                            height: '6px',
                            top: '565px',
                            left: '10px'
                        }}
                    />

                    <img
                        src={ImmersiveExperiences}
                        alt='immersive-experiences'
                    />
                    <CustomTypography>
                        Immersive Experiences
                    </CustomTypography>
                    <Typography variant='h6' style={{width: '100%'}}>
                        Community Growth Initiative
                    </Typography>
                    <Typography variant='subtitle1'>
                        This immersive experience involves gaining a holistic view of a remote UAE community’s critical
                        needs and challenges. Guided by a specialist in design thinking and working hand-in-hand with
                        local members of a community, participants will strategize and develop solutions for positive change.
                    </Typography>
                    <Typography variant='h6' style={{width: '100%', paddingTop: '12px'}}>
                        Site Visits
                    </Typography>
                    <Typography variant='subtitle1'>
                        All participants will make immersive half-day field visits to local industry innovators with
                        links to specific learning outcomes, such as AI/Smart Technology or Building a Positive Workplace
                        Culture.
                    </Typography>
                    <Typography variant='h6' style={{width: '100%', paddingTop: '12px'}}>
                        Sprint Assignments
                    </Typography>
                    <Typography variant='subtitle1'>
                        Brief, peer-reviewed project assignments will put selected module learnings into practice,
                        including a video of each participants presentation skills, a summary of communication dynamics
                        in the workplace, and a SCRUM-Agile assignment.
                    </Typography>
                </Grid>

                <Grid
                    container
                    item
                    xs={3}
                    direction='column'
                    alignItems='center'
                    style={{position: 'relative', paddingLeft: '20px', paddingRight: '14px'}}
                >
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '72px',
                            top: '46px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            height: '282px',
                            top: '46px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '10px',
                            top: '189px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: colors.green,
                            width: '6px',
                            height: '6px',
                            top: '187px',
                            left: '10px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            border: `1px solid ${colors.green}`,
                            width: '10px',
                            top: '326px',
                            left: '0px'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: colors.green,
                            width: '6px',
                            height: '6px',
                            top: '324px',
                            left: '10px'
                        }}
                    />
                    <img
                        src={SectorSpecificCourseWork}
                        alt='sector-specific-coursework'
                    />
                    <CustomTypography>
                        Sector-Specific<br/>Coursework
                    </CustomTypography>
                    <Typography variant='h6' style={{width: '100%'}}>
                        Sector Micro-learning
                    </Typography>
                    <Typography variant='subtitle1'>
                        A variety of personalized opportunities will be offered for participants to build up their sectorial
                        expertise and understanding.
                    </Typography>
                    <Typography variant='h6' style={{width: '100%', paddingTop: '12px'}}>
                        Personal Development Plan
                    </Typography>
                    <Typography variant='subtitle1'>
                        Revisited throughout the program, this self-created roadmap provides a chance to step back, start
                        with the end in mind, and establish where participants are headed and how to get there.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default FourWorkStreams;