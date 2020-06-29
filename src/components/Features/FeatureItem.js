import React from 'react';

function FeatureItem(props) {

    const { classes } = props;

    return (
        <div className="col-md-4">
            <div className={`icon-box-item ${classes}`}>
                <div className="icon-box__icon">
                    <img src={require('../../assets/img/' + props.img)}
                        alt="SBS Feature" />
                </div>
                <div className="icon-box__info">
                    <h5>{props.title}</h5>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default FeatureItem;