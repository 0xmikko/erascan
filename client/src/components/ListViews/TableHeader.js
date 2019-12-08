import React from "react";

/**
 * This component renders table-type views
 */

function TableListView(props) {

    const headerItems = (!props.tableHeader) ? undefined : props.tableHeader.map(item => {
        const align = item.align || "left";
        return <th width={item.width} style={{textAlign: align}}>{item.name}</th>
        }
    );

    return <thead><tr>{headerItems}</tr></thead>;
}

export default TableListView;