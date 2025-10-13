import React, { useMemo } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import routes from './routes';
import AppBar from './components/AppBar';
import { LanguageProvider } from './components/LanguageProvider';
import { useFeatureFlags } from './components/FeatureFlagContext/';
import FeatureFlags from './views/FeatureFlags/';

const history = createBrowserHistory();

const App = () => {
    const { flags } = useFeatureFlags();

    // Filter the routes based on their feature flags

    const enabledRoutes = useMemo(() => {
        return routes.filter(route => {
            if (route.featureFlag) {
                return flags[route.featureFlag]?.enabled;
            }

            // Always include the route if it has no feature flag
            return true;
        });
    }, [flags]);

    return (
        <>
            <Router history={history}>
                <LanguageProvider>
                    <section className='app-wrapper'>
                        <AppBar />
                        <main className='app-main'>
                            <Switch>
                                <Route
                                    path="/featureFlags"
                                    exact
                                    render={props => <div className="App">
                                        <FeatureFlags {...props} />
                                    </div>}
                                />
                                {enabledRoutes.map(route => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        exact={route.exact}
                                        render={props => (
                                            <div className='App'>
                                                <route.component {...props} />
                                            </div>
                                        )}
                                    />
                                ))}
                            </Switch>
                        </main>
                    </section>
                </LanguageProvider>
            </Router>
        </>
    );
}

export default App;
