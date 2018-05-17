import {handleActions} from 'redux-actions';
import {comments} from '../actions';

const initialState = {};

export default handleActions({
    [comments]: (state, action) => {
        const text = action.payload.text;

        return [
            ...state,
            text,
        ]
    }
}, initialState)
