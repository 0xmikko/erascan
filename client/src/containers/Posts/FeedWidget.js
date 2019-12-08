import React from "react";

import WindowWidget from "../../components/WindowWidget";
import ButtonLink from "../../components/ButtonLink";



export const InfoWidget = (props) => {

    const rightToolbar = <ButtonLink to={"/" + props.id + "/edit"} title={"Edit"} />;

    return  <WindowWidget title={"Last Feeds"}>
                Feed Widget
            </WindowWidget>

};

export default InfoWidget;
