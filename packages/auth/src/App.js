import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Signup from './components/Signup';
import Signin from './components/Signin';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({
  history,
}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signup" component={Signup} />
            <Route path="/auth/signin" component={Signin} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
