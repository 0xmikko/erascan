import React, { Component } from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Form, Col} from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';

// import {getOptionsList} from "../../reducers";
import * as actions from "../../store/actions";
import * as status from "../../store/utils/status";


class AutoCompleteField extends Component {

    componentDidMount() {
        let api = this.props.api;
        if (this.props.api_id) api = this.props.api_id(this.props.id);
        this.props.getOptionsList(api, this.props.resource)
    }

    render() {

        console.log("[TA] TypeAhead props", this.props);
        console.log("[TA] TypeAhead props", this.props.resource);
        const resource = this.props.resource;

        if (this.props.optionsList === undefined ||
            this.props.optionsList[resource] === undefined ||
            this.props.optionsList[resource].status === status.STATUS_LOADING) {
            return "Loading...";
        }

        const currentOptionsList = this.props.optionsList[resource];

        if (currentOptionsList.status === status.STATUS_FAILURE) {
            return "Ooops! Something went wrong!";
        }

        const fieldName = this.props.name;
        const defaultItem = this.props.values[fieldName];

        console.log("[TA] TypeAhead Component: Props: ", currentOptionsList.data);

        return <Form.Group as={Col} md={this.props.sm}>
                    <Form.Label>{ this.props.title }</Form.Label>
                        <Typeahead
                            name={fieldName}
                            options={ currentOptionsList.data }
                            labelKey={"value"}
                            {...this.props}
                            multiple={false}
                            onChange={(selected) => {const value = (selected.length > 0) ? selected[0].id : ''; this.props.setFieldValue(fieldName, value); }}
                            onBlur={ (e) => this.props.setFieldTouched(fieldName, true) }
                            defaultSelected = {currentOptionsList.data.filter(item => item.id === defaultItem)}

                        />
        </Form.Group>
    }
}

AutoCompleteField.propTypes = {
    api: PropTypes.string.isRequired,
    resource: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
    // optionsList:          getOptionsList(state),

});

const mapDispatchToProps = dispatch => ({
     // getOptionsList:      (api, resource) => dispatch(actions.geTypeaheadOptionsList(api, resource))

});


export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteField);
