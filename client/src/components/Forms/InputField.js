import {Col, Form} from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";


export const InputField = (props) => (
    <Form.Group as={Col} md={props.sm}>
        <Form.Label>{props.title}</Form.Label>
        <Form.Control
            as={props.as}
            type={props.type}
            name={props.name}
            value={props.values[props.name]}
            onChange={props.handleChange}
            isInvalid={!!props.errors[props.name]}
        />
        <Form.Control.Feedback type="invalid">
            {props.errors[props.name]}
        </Form.Control.Feedback>
    </Form.Group>
);

InputField.propTypes = {
    title: PropTypes.string.isRequired,
    sm: PropTypes.number,
    values: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired
};

export default InputField;