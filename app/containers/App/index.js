/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import AdminReportsPage from 'containers/AdminReportsPage/Loadable';
import LegalPage from 'containers/LegalPage/Loadable';
import SupportRoomPage from 'containers/SupportRoomPage/Loadable';
import SubmitReportPage from 'containers/SubmitReportPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TopNavigation from 'components/TopNavigation';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

require('../../stylesheets/main.scss');

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <TopNavigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/support" component={SupportRoomPage} />
        <Route exact path="/submit-report" component={SubmitReportPage} />
        <Route exact path="/legal" component={LegalPage} />
        <Route exact path="/admin" component={AdminReportsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
