import React from 'react';

function Anchor({name, path,classes,target,children}) {
    return <a download={name} href={path} className={classes} target={target}>{children}</a>
}

export default Anchor;