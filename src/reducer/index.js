import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import comment from '../modules/Comment/reducers';

const reducer = combineReducers({
    form: formReducer,
    comment,
});

export default reducer;