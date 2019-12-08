import {Col, Form} from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";


export const CheckBoxField = (props) => {
    return <Form.Group as={Col} md={props.sm}>
        <Form.Label>&nbsp;</Form.Label>
        <Form.Check
            label={props.title}
            {...props}
            checked={props.values[props.name]}
            onChange={() => props.setFieldValue(props.name, !props.values[props.name])}
        />
    </Form.Group>
};


CheckBoxField.propTypes = {
    title: PropTypes.string.isRequired,
    sm: PropTypes.number,
    values: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired
};

export default CheckBoxField;