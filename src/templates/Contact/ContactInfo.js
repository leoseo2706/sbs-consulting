import React,{Fragment} from 'react';
import socialNetworks from '../../data/SocialNetworks/socials'

const ContactInfo = ({address1, address2}) => {
    return (
        <Fragment>
            <div className="widget-item m-0">
                <address>
                    <span dangerouslySetInnerHTML={{__html: address1}}/>
                </address>
                <address>
                    <span dangerouslySetInnerHTML={{__html: address2}}/>
                </address>
            </div>
            <div className="member-social-icons mt-30">
                {
                    socialNetworks.map(social=>(
                        <a key={social.id} href={`https://${social.networkName}.com/${social.username}`} target="_blank" rel="noopener noreferrer">
                            <i className={`fa fa-${social.networkName}`}/>
                        </a>
                    ))
                }
            </div>
        </Fragment>
    );
};

export default ContactInfo;