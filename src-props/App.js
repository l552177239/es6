import React, { Component } from 'react';
import './App.css';
import CommentBox from './CommentBox'
import PostBody from './PostBody'

class App extends Component {
  constructor() {
    super()
    this.addComment = this.addComment.bind(this)
  }
  state = {
    comments: ['qwe', 'asd']
  }
  addComment(newComment) {
    this.setState({
      comments: [...this.state.comments, newComment]
    })
  }
  render() {
    return (
      <div>
        <div className="top  clearfix">
          <PostBody comments={this.state.comments} />
        </div>
        <div className="bottom clearfix">
          <CommentBox comments={this.state.comments} addComment={this.addComment}/>
        </div>
      </div>
    );
  }
}

export default App;