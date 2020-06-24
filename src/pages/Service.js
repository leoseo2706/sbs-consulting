import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/service.jpg')}
                title="OUR VISION"
                content="To become the most trusted Vietnamese educational agent."
            />
            <PageAbout
                title={'Our Vision'}
                heading="To become <br/>the most trusted Vietnamese educational agent"
                thumb={ServiceThumb}
                content="<b>Step by Step Investment & Consultancy</b>, strives its best to gradually become the most trusted Vietnamese brand for IELTS Training, Overseas Study Consultancy, Scholarship Mentoring, Employment Coaching and Support, Migration and Property Investment
                Consultancy & Business Management Consultancy."
            />
            <Services classes="sm-top"/>
            {/* <PricingTable/> */}
            <Testimonial/>
            <BrandLogo/>
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageService;