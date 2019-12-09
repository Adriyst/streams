import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
	const actions = (
		<>
			<button className="ui button negative">Delete</button>
			<button onClick={() => history.push('/')}className="ui button">Cancel</button>
		</>
	)

	return (
		<div>
			StreamDelete
			<Modal
				title="Delete Stream"
				content="Are you sure you want to delete this?"
				actions={actions}
			/>
		</div>
	);
}

export default StreamDelete;
