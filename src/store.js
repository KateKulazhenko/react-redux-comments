import { createStore } from 'redux';

import reducer from './reducer';

export default () => {
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    return {store}
}