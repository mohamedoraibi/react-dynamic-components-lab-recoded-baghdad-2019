import React, { Component } from "react";
import BlogPost from './BlogPost.js'
class Comment extends Component {

  render() {
    return (
      <div>
        <div className="comment">
            {this.props.commentText}
        </div>
      </div>
    );
  }
}

export default Comment;
