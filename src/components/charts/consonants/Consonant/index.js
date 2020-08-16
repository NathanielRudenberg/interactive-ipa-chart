import React, { Component } from 'react';

export default class Consonant extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            symbol,
            name
        } = this.props;

        let className = 'cons';
        if (this.props.empty) className = className.concat(' empty');
        if (this.props.impossible) className = className.concat(' impossible');

        return <div class={className}>{symbol}</div>
    }
}