import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onChildNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  });

  if (onChildNavigate) {
    history.listen(onChildNavigate);
  }

  ReactDOM.render(
    <App history={history} />,
    el
  );

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      console.log('teste onParentNavigate')
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
