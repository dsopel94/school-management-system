/* eslint-disable global-require */
/* import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App'; */
import LoginPage from './modules/Post/pages/LoginPage/LoginPage.js';
import SignUpPage from './modules/Post/pages/SignupPage/SignupPage.js';
import Auth from './modules/Auth';
import DashboardPage from './modules/Post/pages/DashboardPage/DashboardPage.js';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
}
const routes = {
  component: LoginPage,
  childRoutes: [
    {
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, LoginPage);
        }
      }
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/signup',
      component: SignUpPage
    }
  ]
};


// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
/* export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/StudentListPage/StudentIntroPage').default);
        });
      }}
    />
  </Route>
);
*/
export default routes;
