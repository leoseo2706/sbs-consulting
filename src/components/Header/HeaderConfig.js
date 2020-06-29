import React from 'react';

const customStyle = {
    color : '#203752'
}

function HeaderConfig(props) {
    const LoginRegHandler = () => {
        const offCanvasConfig = document.querySelector('.off-canvas-cog');
        offCanvasConfig.classList.add('active');
        document.querySelector('body').classList.add('fix');
    }

    const MobileMenuHandler = () => {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.add('active');
    }

    return (
        <div className="header-action mt-lg-3 text-right">
            <a style={customStyle} href="tel:0452363168" className="tel-no custom-text">(+61) 452 363 168</a>
            <button style={customStyle} onClick={LoginRegHandler} className="btn-cog"><i className="fa fa-cog"/></button>
            <button style={customStyle} onClick={MobileMenuHandler} className="btn-menu d-lg-none"><i className="fa fa-bars"/></button>
        </div>
    );
}

export default HeaderConfig;