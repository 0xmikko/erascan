/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Button, Form } from "react-bootstrap";

import { Formik } from "formik/dist/index";
import * as yup from "yup";

// import { getHashUpdates } from "../../reducers";
import * as actions from "../../store/actions";
import * as statuses from "../../store/utils/status";

import AutoCompleteField from "./AutoCompleteField";
import InputField from "./InputField";
import CheckBoxField from "./CheckBoxField";
import SelectField from "./SelectField";

const formRenderHOC = fieldList => {
  return props => {
    const fields = Object.entries(fieldList).map(field => {
      const key = field[0];
      const value = field[1];
      const type = field[1].type || "text";
      const inputProps = {
        name: key,
        type: type,
        title: value.title,
        sm: value.sm || 12,
        key,
        ...props,
        ...field[1]
      };

      switch (type) {
        case "text":
        case "password":
          return <InputField {...inputProps} />;

        case "select":
          return <SelectField {...inputProps} />;

        case "textarea":
          return <InputField {...inputProps} as={"textarea"} />;

        case "autocomplete":
          return <AutoCompleteField {...inputProps} />;

        case "checkbox":
          return <CheckBoxField {...inputProps} />;
      }
    });

    return (
      <Form noValidate onSubmit={props.handleSubmit}>
        <Form.Row>{fields}</Form.Row>
        <Button type="submit">Save</Button>
      </Form>
    );
  };
};

export default formRenderHOC
