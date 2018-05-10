import {handleActions} from 'redux-actions';
import {comments} from '../actions';

const initialState = {};

export default handleActions({
    [comments]: (state, action) => {
        const id = action.payload.id;
        const comment = action.payload.text.comment;
        const prevComments = state[id] || {};

        return {
            ...state,
            [id]: [...prevComments, comment]
        }
    }
}, initialState)
