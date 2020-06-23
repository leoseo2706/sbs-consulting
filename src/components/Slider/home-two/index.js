import React from 'react';
import parse from 'html-react-parser'
import SlickSlider from '../../UI/Slick'
import SliderData from '../../../data/Slider/home-2'
import {Link} from "react-router-dom";

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

const Slider = () => {
    const settings = {
        arrows: true,
        dots: false,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    };
    return (
        <div className={'slider-area slider-area--2'}>
            <SlickSlider settings={settings}>
                {
                    SliderData.map(item => (
                        <div key={item.id}>
                            <div className="slider-item"
                                 style={{height: "450px", margin: "0 auto", width: "900px", backgroundImage: `url(${require('../../../assets/img/' + item.bg)})`}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 m-auto text-center">
                                            <div className="slider-content slider-content--2 light">
                                                <h2>{parse(item.title)}</h2>
                                                <p className="m-auto">{parse(item.text)}</p>
                                                <Link to={`${process.env.PUBLIC_URL + item.btnLink}`} className="btn btn-brand">{item.btnText}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </SlickSlider>
        </div>
    );
};

export default Slider;