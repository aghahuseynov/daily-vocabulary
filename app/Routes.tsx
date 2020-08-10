/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './app';
import routes from './constants/routes.json';
import Login from './pages/login';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.LOGIN} component={Login} />
        {/* <Route path={routes.HOME} component={HomePage} /> */}
      </Switch>
    </App>
  );
}
