import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-two";
import Services from "../components/Services";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials/home-two";
import Team from "../components/Team/home-two";

// import aboutData from "../data/About/home-two.json";

import ServiceThumb from '../assets/img/about.jpg'

const PageAbout = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/about.jpg')}
                title="ABOUT US"
                // content="Meet Our Team."
            />
            <About
                title={'Our Team'}
                heading="Meet Our Team"
                content="SBS is established with a commitment and dedication to create a single platform for talented students to shine and transform their lives into better versions. 'No matter how your start is, your journey defines who you really are'. SBS follows the simple principle of “Step By Step” to guide you and its operations."
                thumb={ServiceThumb}
            />
            <Services/>
            <Features classes={'sm-top'}/>
            <Testimonial/>
            <Team/>
            <BrandLogo/>
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageAbout;