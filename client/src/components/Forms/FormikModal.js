import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Container, Modal } from "react-bootstrap";
import { connect } from "react-redux"
import * as actions from "../../actions/modals";
import {getShowForms} from "../../reducers";
import FormikForm from "./FormikForm";


class FormikModal extends Component {
    

    handleClose =() => {
        const { formId } = this.props;
        this.props.hideForm(formId);
    };

    onDataUpdate = () => {
        this.handleClose();
        if (this.props.updateData) this.props.updateData();
    };

    render() {

        const { formId } = this.props;
        const formShow = (this.props.dataForms[formId]) ? this.props.dataForms[formId].show : false;
        const formData = (this.props.dataForms[formId]) ? this.props.dataForms[formId].data : undefined;
        const id = (formData) ? formData.id : undefined;

        console.log("[FOM]: FormikModal form data:", formData);
        console.log("[FOM]: id:", id);

        return (
            <>
            <Modal show={formShow} onHide={this.handleClose} centered size={"lg"}>
                <Modal.Header closeButton>
                    <Modal.Title>{ this.props.title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormikForm fieldList={this.props.fieldList}
                                initialValues={formData}
                                updateData={this.onDataUpdate}
                                api={this.props.api}
                                resource={this.props.resource}
                                id={id}

                    />
                </Modal.Body>
            </Modal>
            </>
        );
      }
}


FormikModal.propTypes = {

    formId: PropTypes.string,
    fieldsList: PropTypes.object,
    data: PropTypes.object,
    title: PropTypes.string,
    hideForm: PropTypes.func,
    dataForms: PropTypes.object
};

const mapStateToProps = (state) => ({
    dataForms:  getShowForms(state),

});

const mapDispatchToProps = dispatch => ({
     hideForm: (formId) => dispatch(actions.hideForm(formId))

});


export default connect(mapStateToProps, mapDispatchToProps)(FormikModal);