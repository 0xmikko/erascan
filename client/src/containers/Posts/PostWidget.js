import React from "react";
import { Table } from 'react-bootstrap';
import WindowWidget from "../../components/WindowWidget";
import ButtonLink from "../../components/ButtonLink";
import {getApiById} from "../../store/utils/api";
import { Link } from "react-router-dom";
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import * as moment from "moment";
const GRAPH_QUERY = gql`
  { posts(first: 20, orderBy: createdTimestamp, orderDirection: desc ) {
    id
    creator
    operator
    staticMetadataB58
    proofHash
    createdTimestamp
}}
`



export const PostWidget = (props) => {

    return  <WindowWidget title={"Last Posts"} >

        <Query query={GRAPH_QUERY} >
            {({data, error, loading}) => {
                console.log(data, error, loading);

                if (error) {
                    return error
                }

                if (!loading) {

                    const { posts } = data

                    const postsCells = posts.map(e => (
                        <tr>
                            <td width={"50%"}>
                                <Link to={"/post/" + e.id}><div style={{fontSize: '14px'}}>{ e.id.substr(0, 20) }...</div></Link>
                                <div style={{fontSize: '11px', color: '#A808A96'}} >{moment(1000*parseInt(e.createdTimestamp)).fromNow()}</div>
                            </td>
                            <td align={'right'}>
                                <div style={{fontSize: '14px'}}>Author <a href={""}>{ e.creator.substr(0, 20) }...</a></div>
                                <div style={{fontSize: '14px'}}>Feed <a href={""}>{ e.creator.substr(0, 20) }...</a></div>
                            </td>

                        </tr>
                    ))

                    return <Table style={{margin: 0}}>
                        <tbody>

                       {postsCells }
                        </tbody>
                    </Table>
                }

                return "Loading"

            }
            }
        </Query>

    </WindowWidget>

};

export default PostWidget;
