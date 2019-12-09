import React from 'react';
import { connect } from 'react-redux';

import { deleteStream, fetchStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderButtons() {
		return (
			<>
				<button 
					onClick={() => this.props.deleteStream(this.props.stream.id)} 
					className="ui button negative">
						Delete
				</button>
				<button onClick={() => history.push('/')}className="ui button">Cancel</button>
			</>
		)
	}

	render() {
		if (!this.props.stream) {
			return <div> loading ... </div>
		}
		return (
			<div>
				StreamDelete
				<Modal
					title={`Deleting the stream "${this.props.stream.title}"`}
					content="Are you sure you want to delete the stream?"
					actions={this.renderButtons()}
					onDismiss={() => history.push('/')}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);

