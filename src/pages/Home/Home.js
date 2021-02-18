import {Container} from "@material-ui/core";

import Intro from "../../components/Home/Intro/Intro";
import VitalSectors from "../../components/Home/VitalSectors/VitalSectors";
import MentorsAndParticipants from "../../components/Home/MentorsAndParticipants/MentorsAndParticipants";
import PointsSeparator from "../../components/Home/PointsSeparator/PointsSeparator";
import ProgramPhilosophy from "../../components/Home/ProgramPhilosophy/ProgramPhilosophy";
import FourWorkStreams from "../../components/Home/FourWorkStreams/FourWorkStreams";
import SuccessPlan from "../../components/Home/SuccessPlan/SuccessPlan";
import PeopleSeparator from "../../components/Home/PeopleSeparator/PeopleSeparator";
import MoreInfoAndNewsletter from "../../components/Home/MoreInfoAndNewsletter/MoreInfoAndNewsletter";


const Home = () => {
    return (
        <Container maxWidth='md'>
            <Intro/>
            <VitalSectors/>
            <MentorsAndParticipants/>
            <PointsSeparator/>
            <ProgramPhilosophy/>
            <FourWorkStreams/>
            <SuccessPlan/>
            <PeopleSeparator/>
            <MoreInfoAndNewsletter/>
        </Container>
    );
}

export default Home;