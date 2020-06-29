import React, { Component } from 'react'

export default class Anchor extends Component {

    render() {

        const {name, path, classes, target, children, flag } = this.props;

        return (
            <a  download={name}
                href={path}
                className={classes, flag ? "selected" : null}
                name={children}
                onClick={this.props.onCatClick ? this.props.onCatClick(this) : null}>
                {children}
            </a>
        )
    }
}