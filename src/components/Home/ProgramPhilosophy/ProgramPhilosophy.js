import {Grid, Typography} from "@material-ui/core";

import colors from "../../../theme/colors";
import Nep from "../../../assets/images/program-philosophy/nep.png";
import SectorSpecificWorkExpertise from "../../../assets/images/program-philosophy/sector-specific-work-expertise.png";
import MicroLearning from "../../../assets/images/program-philosophy/micro-learning.png";
import Project from "../../../assets/images/program-philosophy/project.png";
import Mindset from "../../../assets/images/program-philosophy/mindset.png";
import PersonalizedSupport from "../../../assets/images/program-philosophy/personalized-support.png";


const ProgramPhilosophy = () => {
    const programParts = [
        {
            icon: Nep,
            alt: 'nep',
            content: 'This is not an ordinary training course—it is a workspace to create, reflect, critique and stretch' +
                'to new places. The NEP teaches mindsets to help the participant become a better critical thinker across' +
                'their sector, regardless of job title. The experience will change how they think, reflect and work.'
        },
        {
            icon: SectorSpecificWorkExpertise,
            alt: 'sector-specific-work-expertise',
            content: 'The NEP is designed for high-performing and open-minded Emiratis with 4 to 8 years of sector–' +
                'specific work expertise who want to level up their ability to foster change, deepen their understa' +
                'nding of sector trends and practices, and contribute to the UAE’s centennial vision for economic ' +
                'renewal and growth.'
        },
        {
            icon: MicroLearning,
            alt: 'micro-learning',
            content: 'This program is not meant as a deep dive into technical competencies. However, participants will ' +
                'have opportunities to build up sectorial expertise through personalized micro-learning tasks and resources.'
        },
        {
            icon: Project,
            alt: 'project',
            content: 'Creating is the best way to learn and the NEP will engage participants’ creativity with a series ' +
                'of small sprint assignments, personal development planning, dialogue with practitioners in their field, ' +
                'in-class exercises with professors, and a major Capstone Project to put ideas into action.'
        },
        {
            icon: Mindset,
            alt: 'mindset',
            content: 'The experience is underpinned by mindset-based learning comprised of five enduring, well-rounded ' +
                'building blocks for lifelong development: self-reflection, looking outward and embracing diverse ' +
                'perspectives, interpersonal skills, critical thinking and problem solving and making change happen.'
        },
        {
            icon: PersonalizedSupport,
            alt: 'personalized-support',
            content: 'Along the way, participants will receive personalized support through one-on-one mentorship with ' +
                'industry leaders, advising from sector experts, and peer networking during and after the program.'
        },
    ];

    return (
        <div style={{marginBottom: '276px'}}>
            <Typography variant='h1' style={{marginBottom: '82px', textAlign: 'center'}}>
                PROGRAM PHILOSOPHY
            </Typography>
            <Grid container justify='space-between'>
                {programParts.map(part => (
                    <Grid
                        container
                        direction='column'
                        alignItems='center'
                        style={{width: '296px', marginBottom: '48px'}}
                    >
                        <div style={{width: '76px', height: '76px', backgroundColor: colors.green, position: 'relative'}}>
                           <img
                               src={part.icon}
                               alt={part.alt}
                               style={{position: 'absolute', margin: 'auto', top: '0', bottom: '0', left: '0', right: '0'}}
                           />
                        </div>
                        <hr style={{width: '20px', border: `1px dashed ${colors.green}`, transform: 'rotate(-90deg)'}} />
                        <Typography
                            variant='body2'
                            style={{
                                height: '192px',
                                padding: '16px',
                                backgroundColor: colors.grey,
                                border: `1px dashed ${colors.green}`
                            }}
                        >
                            {part.content}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProgramPhilosophy;