import React, { Component } from 'react';
import { Tab, Tabs, TabList, } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import './tabs.scss';

export default class NavTabs extends Component {
    constructor(props) {
        super();

        this.state = {
            selectedIndex: 0,
        };

        this.tabIndex = 0;
    }

    render() {
        console.log('rendered!');
        let { selectedIndex } = this.state;
        return (
            <Tabs selectedIndex={-1}>
                <TabList>
                    <Tab>
                        <NavLink exact to='/' className='tab-link' activeClassName='tab-link--selected'>
                            Home
                        </NavLink >
                    </Tab>
                    <Tab>
                        <NavLink to='/languages' className='tab-link' activeClassName='tab-link--selected'>
                            Languages
                        </NavLink >
                    </Tab>
                    <Tab>
                        <NavLink exact to='/about' className='tab-link' activeClassName='tab-link--selected'>
                            About
                        </NavLink >
                    </Tab>
                </TabList>
            </Tabs>
        )
    }
}