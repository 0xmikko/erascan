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
  query getPost($id: String!) {
    post(id: $id) {
      id
      creator
      operator
      staticMetadataB58
      proofHash
      createdTimestamp
    }
  }
`

export const AddressDetailsWidget = ({ id }) => {

  return (
    <WindowWidget>
      <Query query={GRAPH_QUERY} variables={{ id }}>
        {({ data, error, loading }) => {

          if (error) {
            return error
          }

          if (!loading) {
            const { post } = data

            const postsCells = (
              <tr>
                <td width={'50%'}>Creator</td>
                <td align={'right'}>
                  <div style={{ fontSize: '14px' }}>
                    <a href={'/address/' + post.creator}>
                      {post.creator.substr(0, 20)}...
                    </a>
                  </div>
                </td>
              </tr>
            )

            return (
              <Table style={{ margin: 0 }}>
                <tbody>{postsCells}</tbody>
              </Table>
            )
          }

          return 'Loading'
        }}
      </Query>
    </WindowWidget>
  )
}

export default AddressDetailsWidget
