import React from "react";
import {Card} from "react-bootstrap"


export const WindowWidget = (props ) => (

    <Card style={{backgroundColor: "#FAFBFC"}}>
        <Card.Header>
            <table width="100%" cellPadding={0} cellSpacing={0}>
                <tbody>
                <tr valign="center">
                    <td>
                        <b style={{margin: "0 0 0 0"}}>{props.title}</b>
                    </td>
                    <td align="right">
                        {props.rightToolbar}
                    </td>
                </tr>
                </tbody>
            </table>
        </Card.Header>
        <Card.Body style={{paddingTop: 0, paddingBottom: 0}}>
            {props.children}
        </Card.Body>

    </Card>);

export default WindowWidget;
