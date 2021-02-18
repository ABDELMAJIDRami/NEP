import {Grid, Typography} from "@material-ui/core";

import colors from "../../../theme/colors";
import SocialDevelopment from "../../../assets/images/vital-sectors/social-development.png";
import PublicServicesAdministration from "../../../assets/images/vital-sectors/public-services-administration.png";
import PolicyMaking from "../../../assets/images/vital-sectors/policy-making.png";
import CommunityAndSocialServices from "../../../assets/images/vital-sectors/community-and-social-services.png";
import HealthAndWellbeing from "../../../assets/images/vital-sectors/health-and-welbeing.png";
import Culture from "../../../assets/images/vital-sectors/culture.png";
import Sports from "../../../assets/images/vital-sectors/sports.png";
import Education from "../../../assets/images/vital-sectors/education.png";
import CommunityDevelopment from "../../../assets/images/vital-sectors/community-development.png";
import ThirdSector from "../../../assets/images/vital-sectors/third-sector.png";

import EconomicDevelopment from "../../../assets/images/vital-sectors/economic-development.png";
import BusinessAndFinancialServices from "../../../assets/images/vital-sectors/business-and-financial-services.png";
import TourismRetailAndLeisure from "../../../assets/images/vital-sectors/tourism-retail-leisure.png";
import AdvancedManufacturing from "../../../assets/images/vital-sectors/advanced-manufacturing.png";
import MediaAndCreativeIndustries from "../../../assets/images/vital-sectors/media-and-creative-industries.png";
import ResearchAndDevelopment from "../../../assets/images/vital-sectors/research-and-development.png";
import AdvancedScienceAndResearch from "../../../assets/images/vital-sectors/advanced-science-and-research.png";
import AIAndRobotics from "../../../assets/images/vital-sectors/ai-and-robotics.png";
import Macroeconomics from "../../../assets/images/vital-sectors/macroeconomics.png";

import InfrastructureAndEnvironment from "../../../assets/images/vital-sectors/infrastructure-and-environment.png";
import SustainabilityAndRenewables from "../../../assets/images/vital-sectors/sustainability-and-renewables.png";
import EnergyAndEconomy from "../../../assets/images/vital-sectors/energy-and-economy.png";
import Environment from "../../../assets/images/vital-sectors/environment.png";
import Space from "../../../assets/images/vital-sectors/space.png";

import SecurityAndForeignAffairs from "../../../assets/images/vital-sectors/security-and-foreign-affairs.png";
import DiplomacyAndInternationalAffairs from "../../../assets/images/vital-sectors/diplomacy-and-international-affairs.png";
import SecurityAndDefenseAffairs from "../../../assets/images/vital-sectors/security-and-defense-affairs.png";
import FoodAndWaterSecurity from "../../../assets/images/vital-sectors/food-and-water-security.png";
import Humanitarian from "../../../assets/images/vital-sectors/humanitarian-aid-and-philanthropy.png";

import Books from "../../../assets/images/vital-sectors/books.png";
import CornerPoints from "../../../assets/images/vital-sectors/corner-points.png";


const VitalSectors = () => {
    const socialDevelopment = [
        {icon: PublicServicesAdministration, title: <>Public Services<br/>Administration</>, alt: 'public-services-administration'},
        {icon: PolicyMaking, title: 'Policy Making', alt: 'policy-making'},
        {icon: CommunityAndSocialServices, title: <>Community<br/>& Social Services</>, alt: 'community-and-social-services'},
        {icon: HealthAndWellbeing, title: 'Health & Wellbeing', alt: 'health-and-wellbeing'},
        {icon: Culture, title: 'Culture', alt: 'culture'},
        {icon: Sports, title: 'Sports', alt: 'sports'},
        {icon: Education, title: 'Education', alt: 'education'},
        {icon: CommunityDevelopment, title: 'Community Development', alt: 'community-development', variant: 'h5'},
        {icon: ThirdSector, title: 'ThirdSector', alt: 'third-sector', variant: 'h5'},
    ];
    const economicDevelopment = [
        {icon: BusinessAndFinancialServices, title: <>Business<br/>& FinancialServices</>, alt: 'business-and-financial-services'},
        {icon: TourismRetailAndLeisure, title: 'Tourism Retail & Leisure', alt: 'tourism-retail-leisure'},
        {icon: AdvancedManufacturing, title: 'Advanced Manufacturing', alt: 'advanced-manufacturing'},
        {icon: MediaAndCreativeIndustries, title: 'Media & Creative Industries', alt: 'media-and-creative-industries'},
        {icon: ResearchAndDevelopment, title: 'Research & Development', alt: 'research-and-development'},
        {icon: AdvancedScienceAndResearch, title: 'Advanced Science & Research', alt: 'advanced-science-and-research', variant: 'h5'},
        {icon: AIAndRobotics, title: 'AI & Robotics', alt: 'ai-and-robotics', variant: 'h5'},
        {icon: Macroeconomics, title: 'Macroeconomics', alt: 'macroeconomics', variant: 'h5'},
    ];
    const infrastructureAndEnvironment = [
        {icon: SustainabilityAndRenewables, title: 'Sustainability & Renewables', alt: 'sustainability-and-renewables', variant: 'h5'},
        {icon: EnergyAndEconomy, title: 'Energy & Economy', alt: 'energy-and-economy'},
        {icon: Environment, title: 'Environment', alt: 'environment'},
        {icon: Space, title: 'Space', alt: 'space', variant: 'h5'},
    ];
    const securityAndForeignAffairs = [
        {icon: DiplomacyAndInternationalAffairs, title: <>Diplomacy<br/>& InternationalAffairs</>, alt: 'diplomacy-and-international-affairs'},
        {icon: SecurityAndDefenseAffairs, title: 'Security & Defense Affairs', alt: 'security-and-defense-affairs'},
        {icon: FoodAndWaterSecurity, title: 'Food & Water Security', alt: 'food-and-water-security'},
        {icon: Humanitarian, title: <>Humanitarian Aid<br/>& Philanthropy</>, alt: 'humanitarian-aid-and-philanthropy'},
    ];

    const sectorColumns = [
        {
            icon: SocialDevelopment,
            title: <>Social<br/>Development</>,
            alt: 'social-development',
            sectorRows: socialDevelopment,
            borderLeftHeight: '730px'
        },
        {
            icon: EconomicDevelopment,
            title: <>Economic<br/>Development</>,
            alt: 'economic-development',
            sectorRows: economicDevelopment,
            borderLeftHeight: '700px'
        },
        {
            icon: InfrastructureAndEnvironment,
            title: <>Infrastructure<br/>& Environment</>,
            alt: 'infrastructure-and-environment',
            sectorRows: infrastructureAndEnvironment,
            borderLeftHeight: '326px'
        },
        {
            icon: SecurityAndForeignAffairs,
            title: <>Security<br/>& Foreign Affairs</>,
            alt: 'security-and-foreign-affairs',
            sectorRows: securityAndForeignAffairs,
            borderLeftHeight: '346px'
        },
    ];

    return (
        <div style={{marginBottom: '246px'}}>
            <Grid container justify='space-between'>
                <Grid item style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{width: '12px',  height: '48px',  backgroundColor: colors.green,  marginRight: '24px'}} />
                    <Typography variant='h1' color='primary'>
                        25 VITAL SECTORS
                    </Typography>
                </Grid>
                <Grid item style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Typography variant='h2' color='secondary'>
                        New Sector
                    </Typography>
                    <div style={{width: '34px', height: '38px', backgroundColor: colors.orange, marginLeft: '24px'}} />
                </Grid>
            </Grid>

            <Grid
                container
                justify='space-between'
                style={{
                    position: 'relative',
                    height: '976px',
                    marginTop: '8px',
                    padding: '30px',
                    backgroundColor: colors.grey
                }}
            >
                {sectorColumns.map(column => (
                    <Grid item>
                        <div style={{minHeight: '98px', position: 'relative'}}>
                            <img src={column.icon} alt={column.alt} style={{position: 'absolute', bottom:'0'}}/>
                        </div>
                        <Typography variant='h3' color='primary' style={{marginTop: '14px', marginBottom: '14px'}}>
                            {column.title}
                        </Typography>

                        <div style={{backgroundColor: colors.green, width: '136px', height: '1px'}} />
                        <div style={{position: 'absolute', backgroundColor: colors.green, width: '1px', height: column.borderLeftHeight}} />

                        <div style={{marginLeft: '14px', marginTop: '8px',}}>
                            {column.sectorRows.map(sector => (
                                <>
                                    <img src={sector.icon} alt={sector.alt} />
                                    <Typography
                                        variant={sector?.variant ?? 'body2'}
                                        color={sector?.variant ? 'secondary' : 'textPrimary'}
                                        style={{marginBottom: '8px'}}
                                    >
                                        {sector.title}
                                    </Typography>
                                </>
                            ))}
                        </div>
                    </Grid>
                ))}

                <img src={Books} alt="books" style={{position: 'absolute', zIndex: '10', bottom: '0px', right: '-84px'}}/>
                <img src={CornerPoints} alt="corner-points" style={{position: 'absolute', zIndex: '-10', left: '-61px', bottom: '-140px'}}/>
            </Grid>
        </div>
    );
};

export default VitalSectors;