import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  render() {
    const list = this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    });

    return (
      <ul className="comment-list">
        {list}
      </ul>
    )
  }

}

function mapStateToProps({ comments }) {
  return { comments };
}

export default connect(mapStateToProps)(CommentList);
