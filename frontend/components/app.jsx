import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import ResultsContainer from './results/results_container';

const App = () => (
    <>
        <Switch>
            <Route path="/results" component={ResultsContainer} />
            <Route path="/" component={SplashContainer} />
        </Switch>
    </>
);
export default App;