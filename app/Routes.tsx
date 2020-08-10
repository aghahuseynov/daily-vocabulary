/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app';
import Login from './pages/login';
import Home from './pages/home';
import routesName from '../app/constants/routes.json';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routesName.LOGIN} component={Login} />
        <Route path={routesName.HOME} component={Home} />
      </Switch>
    </App>
  );
}
