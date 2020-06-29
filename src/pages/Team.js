import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/page";
import TeamMember from '../templates/Team'
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/team.jpg';

const PageTeam = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/team-bg.jpg')}
                title="Meet Our Team"
                content="Step By Step Investment & Consultancy Team"
            />
            <About
                title={'Our Team'}
                heading="Meet Our Team"
                thumb={ServiceThumb}
                content="SBS Investment & Consultantcy devote to nourishing young talents and providing them with invaluable opportunity of education, work and culture experience in various developed nations all over the world, via domestic and international grants. We work to bring golden chances of sustainable overseas integration and personal development to our beloved customers."
            />
            <TeamMember/>
            <BrandLogo/>
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageTeam;