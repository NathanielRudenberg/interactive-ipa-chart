import React, { Component } from 'react';
import NavTabs from './NavTabs';
import LanguageSelector from '../LanguageSelector';
import './appbar.scss';

export default class AppBar extends Component {
    render() {
        return (
            <div className='header'>
                <NavTabs />
                <LanguageSelector />
            </div>
        )
    }
}
