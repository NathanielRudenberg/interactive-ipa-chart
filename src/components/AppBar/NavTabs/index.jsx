import React, { Component, useState, useMemo } from 'react';
import routes from '../../../routes';
import { Tab, Tabs, TabList, TabPanel, } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import { useFeatureFlags } from '../../FeatureFlagContext';
import './tabs.scss';

export default function NavTabs(props) {
    const { flags } = useFeatureFlags();
    const enabledRoutes = useMemo(() => {
        return routes.filter(route => {
            if (route.featureFlag) {
                return flags[route.featureFlag]?.enabled;
            }

            // Always include the route if it has no feature flag
            return true;
        });
    }, [flags]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const tabIndex = 0;

    const tabs = enabledRoutes.map(route => {
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

    const tabPanels = enabledRoutes.map(route => {
        if (route.path !== '*') {
            return (
                <TabPanel key={route.path} />
            );
        }
    });

    // let { selectedIndex } = this.state;
    return (
        <Tabs
        // selectedIndex={this.state.selectedIndex}
        // onSelect={tabIndex => this.setState({ selectedIndex: tabIndex })}
        >
            <TabList>
                {tabs}
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
            {tabPanels}
        </Tabs>
    )
}
