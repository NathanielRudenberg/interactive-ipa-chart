import React, { Component } from 'react';
import { Tab, Tabs, TabList, } from 'react-tabs';
import { Link } from 'react-router-dom';
import './tabs.scss';

export default class NavTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
        };
    }

    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>
                        <Link to='/' className='tab-link'>
                            Home
                        </Link >
                    </Tab>
                    <Tab>
                        <Link to='/languages' className='tab-link'>
                            Languages
                        </Link >
                    </Tab>
                    <Tab>
                        <Link to='/about' className='tab-link'>
                            About
                        </Link >
                    </Tab>
                </TabList>
            </Tabs>
        )
    }
}