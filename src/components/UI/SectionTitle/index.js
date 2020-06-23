import React from 'react';
import parse from 'html-react-parser'

function SectionTitle(props) {

    return (
        <div style={props.title == "OUR SERVICES" ? { paddingTop: "21px" } : {}}
            className={`section-title custom-text-no-hover ${props.variant === "light" ? "section-title--light" : ""}`}>
            {props.title && <h6 className="custom-color">{props.title}</h6>}
            {props.heading && <h2 className="custom-color">{parse(props.heading)}</h2>}
            {(() => {
                if (props.text) {
                    return <p className="custom-color">{parse(props.text)}</p>
                }
                if (props.tagline) {
                    return <h5 className="custom-color">{parse(props.tagline)}</h5>
                }
            })()}
        </div>
    );
}

export default SectionTitle;