import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, useRouterHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history'
import * as configureStore from './store'

import MainLayout from './containers/Main'

import AuthLayout from './containers/Auth'
import LoginPage from './components/Auth/Login'
import Register from './components/Auth/Register'
import ForgotPasswordPage from './components/Auth/ForgotPassword'
import ResetPasswordPage from './components/Auth/ResetPassword'

import NotFoundLayout from './containers/NotFound'

import DashboardContainer from './containers/Dashboard'
import Dashboard from './components/Dashboard'

import * as appActions from './actions/app'

import './styles/font-awesome.min.css'
import './styles/bootstrap.min.css'
import './styles/sb-admin.css'
import './styles/custom.css'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore.STORE;
const history = syncHistoryWithStore(appHistory, store);

function requireAuth(nextState, replace) {
  if (!localStorage.getItem('api_token')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function notRequireAuth(nextState, replace) {
  if (localStorage.getItem('api_token')) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function preload() {
 
}

window.onload = function() {
  preload();

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route name='Auth' component={AuthLayout} >
          <Route name="Forgot Password" path="/forgot-password" component={ForgotPasswordPage} />
          <Route name="Reset Password" path="/reset_password/:resetToken" component={ResetPasswordPage} />
          <Route name="Login Page" path="/login" component={LoginPage} onEnter={notRequireAuth} />
          <Route name="Register" path="/register" component={Register} onEnter={notRequireAuth}/>
        </Route>

        <Route name='MainLayout' component={MainLayout}>

          <Route name='DashboardContainer' component={DashboardContainer}>
            <Route path="/" name="Dashboard" component={Dashboard} />
          </Route>

        </Route>

        <Route name='MainLayout' component={MainLayout} onEnter={requireAuth}>
        </Route>

        <Route path="*" component={NotFoundLayout} />
      </Router>
    </Provider>,
    document.getElementById('root'))
};
