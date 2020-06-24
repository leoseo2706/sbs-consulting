import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo-dark.png'

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                                    <img style={{ opacity: 0.9 }} src={Logo} alt="Logo" />
                                </Link>

                                <Text>
                                    <i>No matter how your start is, your journey defines who you really are.</i>
                                </Text>

                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()} SBS Investment & Consultancy JSC.<br /> All rights reserved.
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Information">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/about"}`}>Our company</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>Contact us</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>Our services</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/"}`}>Blog</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Social Links">
                            <List classes="widget-list">
                                <LI>< a href="https://www.facebook.com/sbsscholarship.edu.vn">Facebook</a></LI>
                                <LI><a href="http://sbsscholarship.edu.vn/">Archive</a></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Contact Us">
                            <address>
                                No 49 Lane 36, Dao Tan Street,<br /> Ba Dinh District, Hanoi<br />
                                <a href="tel:+84437666888">(+84) 437 666 888</a>
                            </address>
                            <br />
                            <address>
                                Suite 1780 - 570 Bourke Street Melbourne VIC 3000<br />
                                <a href="tel:+61452363168">(+61) 452 363 168</a>
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;