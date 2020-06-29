import React from 'react';
const MemberInfo = ({teamMember}) => {
    const {profilePic,name,designation,bio,socials,address,phone,email,website} = teamMember;
    return (
        <div className="member-details-top">
            <div className="row">
                <div className="col-md-5">
                    <div className="member-pic mb-sm-35">
                        <img src={require('../../assets/img/' + profilePic)} alt={name}/>
                    </div>
                </div>

                <div className="col-md-7 ml-auto">
                    <div className="member-desc">
                        <h2>{name}</h2>
                        <h5>{designation}</h5>
                        <p dangerouslySetInnerHTML={{__html: bio}}/>

                        <div className="contact-info mt-25">
                            <p><strong>Address</strong> <span dangerouslySetInnerHTML={{__html: address}}/></p>
                            <p><strong>Phone</strong> {phone}</p>
                            <p><strong>Email</strong> {email}</p>
                            <p><strong>Web</strong> {website}</p>
                        </div>

                        <div className="member-social-icons mt-25">
                            <a href={`https://facebook.com/${socials.facebook}`} target="_blank" rel="noopener noreferrer" className="facebook"><i className="fa fa-facebook"/></a>
                            <a href={`https://www.youtube.com/${socials.youtube}`} target="_blank" rel="noopener noreferrer" className="youtube"><i className="fa fa-youtube"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberInfo;