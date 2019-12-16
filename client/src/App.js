/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Route, Switch } from 'react-router'
import { withRouter } from 'react-router'
import { Container } from 'react-bootstrap'

import AppBar from './components/AppBar/AppBar'
import Footer from './components/Footer'

import TrackScreen from './screens/TrackScreen'
import TrackSearchScreen from './screens/TrackSearchScreen'
import RecourseScreen from './screens/RecourseScreen'
import RecourseSearchScreen from './screens/RecourseSearchScreen'
import HashDetailsScreen from './screens/HashDetailsScreen'
import AgreementDetailsScreen from './screens/AgreementDetailsScreen'
import FeedDetailsScreen from './screens/FeedDetailsScreen'
import AddressDetailsScreen from './screens/AddressDetailsScreen'

import FaucetScreen from './screens/FaucetScreen'
import AgreementCreateScreen from './screens/AgreementCreateScreen'
import FeedCreateScreen from './screens/FeedCreateScreen'

export const App = () => (
  <>
    <AppBar />

    <Container style={{ minHeight: window.innerHeight - 200 }}>
      <Switch>
        // Feeds part
        <Route path="/feeds/" exact={true} component={TrackScreen} />
        <Route
          path="/feeds/search/:search"
          exact={true}
          component={TrackSearchScreen}
        />
        <Route path="/feeds/new/" exact={true} component={FeedCreateScreen} />
        <Route path="/feeds/:id/" exact={true} component={FeedDetailsScreen} />
        <Route path="/hashes/:id/" component={HashDetailsScreen} />
        // Agreements
        <Route path="/agreements/" exact={true} component={RecourseScreen} />
        <Route
          path="/agreements/search/:search"
          exact={true}
          component={RecourseSearchScreen}
        />
        <Route
          path="/agreements/new/"
          exact={true}
          component={AgreementCreateScreen}
        />
        <Route
          path="/agreements/:id/"
          exact={true}
          component={AgreementDetailsScreen}
        />
        // Faucet
        <Route path="/faucet/" component={FaucetScreen} />
        // Others
        <Route
          path="/address/:id/"
          exact={true}
          component={AddressDetailsScreen}
        />
        <Route path="/*" component={TrackScreen} />
      </Switch>
    </Container>
    <Footer />
  </>
)

export default withRouter(App)
