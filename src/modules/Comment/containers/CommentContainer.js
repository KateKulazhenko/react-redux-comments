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
            author: '',
            text: '',
            canPost: 'false',
        }
    }

    handleAuthorChange = (e) => {
      this.setState({author: e.target.value})
    };

    handleTextChange = (e) => {
        this.setState({text: e.target.value})
    };

    onSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
        this.props.action.comments({
            author: this.state.author,
            text: this.state.text,
        });
        this.setState({text: ''})
    };

    render() {
        const {comments} = this.props;
        const props = {
            comments,
            onSubmit: this.onSubmit,
            handleAuthorChange: this.handleAuthorChange,
            handleTextChange: this.handleTextChange,
            author: this.state.author,
            text: this.state.text,
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




