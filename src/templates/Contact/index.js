import React from 'react';
import From from "./From";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
    return (
        <div className={'contact-page-area-wrapper sp-y'}>
            <div className="container">
                <div className="contact-content-wrap">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-form-area contact-method">
                                <h3>Send us a Message</h3>
                                <From/>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="contact-information contact-method custom-text-no-hover"
                            style={{backgroundColor: "#f8f9fc"}}>
                                <div className="contact-info-con">
                                    <h3 className="custom-text-no-hover">Contact Info</h3>
                                    <ContactInfo
                                        address1='No 49 Lane 36, Dao Tan Street,<br /> Ba Dinh District, Hanoi<br />
                                        <a href="tel:+84437666888">(+84) 437 666 888</a>' 
                                        address2='Suite 1780 - 570 Bourke Street Melbourne VIC 3000<br />
                                        <a href="tel:+61452363168">(+61) 452 363 168</a>'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;