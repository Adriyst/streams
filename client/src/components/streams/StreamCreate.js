import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {

    renderInput({ input, label, meta }) {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label> { label }</label>
                <input { ...input } />
                <div className="ui error message header">{ meta.touched && meta.error }</div>
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.createStream(formValues);
    } 


    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Create stream</button>
            </form>
        );
    } 
};

const validate = formValues => {
    const err_obj = {}
    !formValues.title && (err_obj.title = "No title entered.");
    !formValues.description && (err_obj.description = "No description entered.");
    return err_obj;
};

const formWrapped = reduxForm({
    form: "streamCreate",
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);