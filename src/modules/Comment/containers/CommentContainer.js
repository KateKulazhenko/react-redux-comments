import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import selectors from '../selectors';

import Comment from '../components/Comment';

class CommentsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            text: '',
        }
    }

    onSubmit = (data) => {
        this.props.action.comments({
            text: data.comment,
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

CommentsContainer.propTypes = {
    action: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        comments: selectors.getComments(state),
    }
}

function mapDispatchToProps(dispatch) {
    return { action: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);




