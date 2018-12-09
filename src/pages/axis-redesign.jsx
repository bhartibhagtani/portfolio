import React from 'react';
import Layout from '../components/Layout';
import ProjectBrief from '../components/ProjectBrief/ProjectBrief';
import Plan from '../components/Plan/Plan';
import DesignProcess from '../components/DesignProcess/DesignProcess';
import UserResearch from '../components/UserResearch/UserResearch';
import UserSegmentation from '../components/UserSegmentation/UserSegmentation';
import Questionaire from '../components/Questionaire/Questionaire';
import QuestionaireData from '../components/Questionaire/QuestionaireData';
import Personas from '../components/Personas/Personas';
import UserJourneyMap from '../components/UserJourneyMap/UserJourneyMap';
import UserScenario from '../components/UserScenario/UserScenario';
import Storyboard from '../components/Storyboard/Storyboard';
import TaskAnalysisFlowUserLogin from '../components/TaskAnalysisFlow/TaskAnalysisFlowUserLogin';
import TaskAnalysisFlowCreditCard from '../components/TaskAnalysisFlow/TaskAnalysisFlowCreditCard';
import DesignDifferentiators from '../components/DesignDifferentiators/DesignDifferentiators';
import InformationArchitecture from '../components/InformationArchitecture/InformationArchitecture';
import Wireframes from '../components/Wireframes/Wireframes';
import VisualDesign from '../components/VisualDesign/VisualDesign';
import Behance from '../sections/Behance';

const AxisRedesignPage = ({ location }) => (
  <Layout location={location}>
    <ProjectBrief />
    <Plan />
    <DesignProcess />
    <UserResearch />
    <UserSegmentation />
    <Questionaire />
    <QuestionaireData />
    <Personas />
    <UserJourneyMap />
    <UserScenario />
    <Storyboard />
    <TaskAnalysisFlowUserLogin />
    <TaskAnalysisFlowCreditCard />
    <DesignDifferentiators />
    <InformationArchitecture />
    <Wireframes />
    <VisualDesign />
    <Behance />
  </Layout>
);

export default AxisRedesignPage;
