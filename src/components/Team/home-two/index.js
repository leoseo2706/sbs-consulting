import React from 'react';
import SectionTitle from "../../UI/SectionTitle";

import teamBg from '../../../assets/img/team/team-bg-2.jpg'
import teamData from '../../../data/Team/home-two'
import TeamMember from "./member";

const Team = () => {
    return (
        <div className="team-area bg-brand">
            <div className="row no-gutters align-items-center">
                <div className="col-xl-4">
                    <div className="team-area-left text-center text-md-left">
                        <SectionTitle
                            variant="light"
                            title="Creative Team"
                            heading="We have the best team"
                            text="<strong>SBS Investment &amp Consultantcy</strong> devote to nourishing young talents and providing them with invaluable opportunity of education, work and culture experience in various developed nations all over the world, via domestic and international grants. We work
                            to bring golden chances of sustainable overseas integration and personal development to our beloved customers."
                        />
                    </div>
                </div>

                <div className="col-xl-8">
                    <div className="team-area-right team-area-right--2 bg-img" style={{backgroundImage:`url(${teamBg})`}}>
                        <div className="row no-gutters align-items-end mtn-40">
                            {
                                teamData.map(member => (
                                    <TeamMember key={member.id} id={member.id} profilePic={member.profilePic} name={member.name} designation={member.designation} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;