import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import selectors from '../selectors';

import CommentForm from '../components/CommentForm/index';

class CommentsContainer extends React.Component {

    onSubmit = (data) => {
        this.props.action.comments({
            text: data,
            id: this.props.idFilms
        });
    };

    render() {
        const {comments} = this.props;
        const props = {
            comments,
            onSubmit: this.onSubmit
        };
        return (
            <CommentForm {...props} />
        )
    }
}

CommentsContainer.propTypes = {
    action: PropTypes.object,
    comments: PropTypes.array.isRequired
};


function mapStateToProps(state, props) {
    return {
        comments: selectors.getComment(state, props.match.params.id),
        idFilms: props.match.params.id
    }
}

function mapDispatchToProps(dispatch) {
    return { action: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);




