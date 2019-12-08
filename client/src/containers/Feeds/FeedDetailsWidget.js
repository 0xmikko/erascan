/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Table } from 'react-bootstrap'
import WindowWidget from '../../components/WindowWidget'
import ButtonLink from '../../components/ButtonLink'
import { getApiById } from '../../store/utils/api'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import * as moment from 'moment'
const GRAPH_QUERY = gql`
  query getFeed($id: String!) {
    feed(id: $id) {
      id
      creator
      operator
      staticMetadataB58
      createdTimestamp
      posts
    }
  }
`

export const FeedDetailsWidget = ({ id }) => {
  return (
    <WindowWidget>
      <Query query={GRAPH_QUERY} variables={{ id }}>
        {({ data, error, loading }) => {
          console.log(data, error, loading)

          if (error) {
            return error
          }

          if (!loading) {
            const { feed } = data

            return (
              <Table style={{ margin: 0 }}>
                <tr>
                  <td width={'50%'}>Creator</td>
                  <td>
                    <div style={{ fontSize: '14px' }}>
                      <a href={''}>{feed.creator.substr(0, 20)}...</a>
                    </div>
                  </td>
                </tr>
              </Table>
            )
          }

          return 'Loading'
        }}
      </Query>
    </WindowWidget>
  )
}

export default FeedDetailsWidget
