import {createSelector} from 'reselect';

const getComments = state => state.comments;

const getComment = createSelector(
    getComments,
    (_, id) => id,
    (comments, id) => {
        for(let key in comments) {
            if(key === id) {
                return comments[id];
            }
        }
    }
);

export default {
    getComment
};
