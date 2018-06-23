import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
    state = {  }
    renderComments() {
        return this.props.comments.map(comment => (
            <li key={comment}>{comment}</li>
        ));
    }
    render() {
        return (
            <ul>
                {this.renderComments()}
            </ul>
        );
    }
}

function mapStateToProps({ comments }) {
    return { comments };
}

export default connect(mapStateToProps)(CommentList);
