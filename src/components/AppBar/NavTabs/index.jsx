import React, { Component } from 'react';
import routes from '../../../routes';
import { Tab, Tabs, TabList, TabPanel, } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import './tabs.scss';

export default class NavTabs extends Component {
    constructor(props) {
        super();

        this.state = {
            selectedIndex: 0,
        };

        this.tabIndex = 0;

        this.tabs = routes.map(route => {
            if (route.path !== '*') {
                return (
                    <Tab key={route.path}>
                        <NavLink to={route.path} className='tab-link' activeClassName='tab-link--selected' exact={route.exact}>
                            {route.name}
                        </NavLink >
                    </Tab>
                );
            }
        });

        this.tabPanels = routes.map(route => {
            if (route.path !== '*') {
                return (
                    <TabPanel key={route.path} />
                );
            }
        });
    }

    render() {
        // let { selectedIndex } = this.state;
        return (
            <Tabs
            // selectedIndex={this.state.selectedIndex}
            // onSelect={tabIndex => this.setState({ selectedIndex: tabIndex })}
            >
                <TabList>
                    {this.tabs}
                    {/* <Tab>
                        <NavLink exact to='/' className='tab-link' activeClassName='tab-link--selected'>
                            Home
                        </NavLink >
                    </Tab>
                    <Tab>
                        <NavLink exact to='/about' className='tab-link' activeClassName='tab-link--selected'>
                            About
                        </NavLink >
                    </Tab> */}
                    {/* <Tab>
                        <NavLink to='/languages' className='tab-link' activeClassName='tab-link--selected'>
                            Languages
                        </NavLink >
                    </Tab> */}
                </TabList>
                {this.tabPanels}
            </Tabs>
        )
    }
}
