import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import * as actions from './store/actions';
import * as reducers from './store/reducers';


import AppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer";

import TrackScreen from './screens/TrackScreen';
import PostDetailScreen from "./screens/PostDetailScreen";
import NoWeb3FoundScreen from './screens/NoWeb3FoundScreen';

export function App(props) {
  const {getWeb3, Web3} = props;

  useEffect(() => {
    if (!Web3) {
      getWeb3();
    }
  }, [Web3]);

  if (!Web3) {
    return <NoWeb3FoundScreen />;
  }
  return (
    <>
      <AppBar onLogout={props} {...props} />

        <Switch>
          <Route path="/track/" component={TrackScreen} />
          <Route path="/feed/:id/" component={PostDetailScreen} />
          <Route path="/post/:id/" component={PostDetailScreen} />
          <Route path="/track/" component={TrackScreen} />
          <Route path="/*" component={TrackScreen} />
        </Switch>
      <Footer {...props} />
    </>
  );
}

const mapStateToProps = state => ({
  Web3: reducers.Web3(state),
});

const mapDispatchToProps = dispatch => ({
  getWeb3: () => dispatch(actions.getWeb3()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
