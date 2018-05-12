import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import selectors from '../selectors';
import Paper from 'material-ui/Paper';

import Comment from '../components/Comment';

class CommentsContainer extends React.Component {

    onSubmit = (data) => {
        this.props.action.comments({
            text: data,
        });
    };

    render() {
        const {comments} = this.props;
        const props = {
            comments,
            onSubmit: this.onSubmit,
            form: 'commentForm',
        };
        return (

            <Comment {...props} />
        )
    }
}

function mapStateToProps(state, props) {
    return {
        comments: selectors.getComments(state),
    }
}

function mapDispatchToProps(dispatch) {
    return { action: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);




