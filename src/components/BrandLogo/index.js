import React from 'react';
import SlickSlider from "../UI/Slick";
import LogoItem from './LogoItem'
import BrandLogos from '../../data/BrandLogo/brandlogo';
import SectionTitle from "../UI/SectionTitle/index";

const NextArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-right custom-text-no-hover"/></button>
    )
};

const PrevArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-left custom-text-no-hover"/></button>
    )
};

function BrandLogo(props) {
    const settings = {
        slidesToShow: 4,
        arrows : false,
        // arrows: true,
        // dots: false,
        // nextArrow: <NextArrow/>,
        // prevArrow: <PrevArrow/>,
        autoplay: true,
        className: "brand-logo-content",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div className="brand-logo-area sm-top">
            <div className="container">

                <div className="row bg-offwhite" style={{ height: "100px", paddingTop: "20px" }}>
                    <div className="col-12 text-center">
                        <SectionTitle title="OUR PARTNERS" heading="From around the world" />
                    </div>
                </div>

                <div className="row" style={{marginTop: "50px"}}>
                    <div className="col-12">
                        <SlickSlider settings={settings}>
                            {
                                BrandLogos.map(logo => (
                                    <LogoItem key={logo.id} logoSrc={logo.logoSrc} URL={logo.URL} />
                                ))
                            }
                        </SlickSlider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandLogo;