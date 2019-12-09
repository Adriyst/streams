import React from 'react';
import { connect } from 'react-redux';

import { editStream, fetchStream } from '../../actions';

class StreamEdit extends React.Component {

    componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
    }

    render() {
		if (!this.props.stream) {
			return <div> loading ... </div>
		}

        return (
			<div>StreamEdit</div>
		);
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { editStream, fetchStream }) (StreamEdit);

