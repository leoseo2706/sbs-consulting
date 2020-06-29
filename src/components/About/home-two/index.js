import React from 'react';
import parse from "html-react-parser";
import aboutData from "../../../data/About/home-two";
import aboutThumb from '../../../assets/img/about-2-bg.jpeg'
import { Link } from "react-router-dom";

const About = ({ content }) => {
    return (
        <div className="home-two-about-area"
            style={{ backgroundImage: `url(${aboutThumb})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 d-lg-none">
                        <figure className="about-thumb">
                            <img src={require('../../../assets/img/' + aboutData.thumb)} alt="SBS-About" />
                        </figure>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content about-content--2">
                            <h6 className="custom-color">{aboutData.title}</h6>
                            <h2 className="custom-color">{parse(aboutData.heading)}</h2>
                            <span className="about-since custom-color">{aboutData.since}</span>
                            <p>{content ? parse(content) : parse(aboutData.text)}</p>
                            <Link to={`${process.env.PUBLIC_URL + aboutData.btnLink}`} className="btn-about custom-color">{aboutData.btnText} <i className="fa fa-angle-double-right" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
