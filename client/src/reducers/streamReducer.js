import { 
    CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS 
} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {

        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return {...state, [action.payload]: undefined};
        case FETCH_STREAMS:
            action.payload.forEach(e => state = {...state, [e.id]: e});
            return state;
        default:
            return state;
    };
};