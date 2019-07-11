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
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MyInventory from 'containers/MyInventory/Loadable';
import Activity from 'containers/Activity/Loadable';
import Settings from 'containers/Settings/Loadable';
import ViewItem from 'containers/ViewItem/Loadable';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Pizza Heroes" defaultTitle="Pizza Heroes">
        <meta name="description" content="Pizza Heroes application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/my-inventory" component={MyInventory} />
        <Route path="/activity" component={Activity} />
        <Route path="/settings" component={Settings} />
        <Route path="/view-item" component={ViewItem} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
