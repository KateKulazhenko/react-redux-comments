import { combineReducers } from 'redux';

import comment from '../modules/Comment/reducers';

const reducer = combineReducers({
    comment,
});

export default reducer;