import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteStream, fetchStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderButtons() {
		const {id} = this.props.match.params;
		return (
			<>
				<button 
					onClick={() => this.props.deleteStream(id)} 
					className="ui button negative">
						Delete
				</button>
				<Link to="/" className="ui button">Cancel</Link>
			</>
		)
	}

	render() {
		if (!this.props.stream) {
			return <div> loading ... </div>
		}
		return (
			<Modal
				title={`Deleting the stream "${this.props.stream.title}"`}
				content="Are you sure you want to delete the stream?"
				actions={this.renderButtons()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);

