/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col, Row, Container } from "react-bootstrap";

import PageHeader from "../components/PageHeader";
import SearchBarWidget from "../containers/Posts/SearchBarWidget";
import PostWidget from "../containers/Posts/PostWidget";
import FeedWidget from "../containers/Posts/FeedWidget";

import { isDataLoaded } from "../components/isDataLoaded";
import * as actions from "../store/actions";
import * as reducers from "../store/reducers";

const MainScreen = ({ clientDetails, getClientDetails, match, history }) => {
  const { id, tab } = match.params;

  // useEffect(() => {
  //   getClientDetails(id);
  // }, [id]);
  //
  // if (!clientDetails) return "Loading";
  // const notReadyStatus = isDataLoaded(clientDetails[id]);
  // if (notReadyStatus) {
  //   return notReadyStatus;
  // }
  //
  // const { data } = clientDetails[id];
  // console.log(id, data);
  // const { avatar_url, first_name, last_name } = data.profile.data;
    const avatar_url = "";
    const data = ""

  return (
      <>
          <Container style={{ marginTop: 20}} >
              <h1>Post {id}</h1>
            <Row >
              <Col sm={12}>
                  <PostWidget data={data} resource={"clients"} id={id} />
              </Col>
            </Row>

          </Container>
      </>
  );
};

const mapDispatchToProps = dispatch => ({
  // getClientDetails: id => dispatch(actions.getClientDetails(id))
});

const mapStateToProps = state => ({
  // clientDetails: reducers.clientDetails(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreen);
