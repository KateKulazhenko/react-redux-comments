import {handleActions} from 'redux-actions';
import {comments} from '../actions';

const initialState = {};

export default handleActions({
    [comments]: (state, action) => {
        const text = action.payload.text;
        const author = action.payload.author;
        const prevComment = state[author] || {};
        console.log(author);

        return {
            ...state,
            [author]: [...prevComment, text],
        }
    }
}, initialState)
