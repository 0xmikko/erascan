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

export const App = () => (
  <>
    <AppBar />

    <Container style={{ minHeight: window.innerHeight - 200 }}>
      <Switch>
        <Route path="/track/search/:search" component={TrackSearchScreen} />
        <Route path="/track/" component={TrackScreen} />

        <Route
          path="/recourse/search/:search"
          component={RecourseSearchScreen}
        />
        <Route path="/recourse/" component={RecourseScreen} />

        <Route path="/faucet/" component={FaucetScreen} />

        <Route path="/feeds/:id/" component={FeedDetailsScreen} />
        <Route path="/addresses/:id/" component={AddressDetailsScreen} />
        <Route path="/agreements/new/" component={AgreementCreateScreen} />
        <Route path="/agreements/:id/" component={AgreementDetailsScreen} />
        <Route path="/hashes/:id/" component={HashDetailsScreen} />
        <Route path="/*" component={TrackScreen} />
      </Switch>
    </Container>
    <Footer />
  </>
)

export default withRouter(App)
