import React from 'react'

class CommentBox extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const content = this.textInput.value
    this.refs.commentForm.reset()
    this.props.addComment(content)
  }

  render() {
    let commentList = this.props.comments.map((item) => (
      <div className="comment" key={Math.random()}>{item}</div>
    ))
    return(
      <div className="comment-box">
        {commentList}
        <form ref="commentForm" onSubmit={this.handleSubmit}   className="comment-form">
          <input ref={(value) => { this.textInput = value} } type="text" className="input" />
          <button type="submit" className="submit-btn" >提交</button>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}

export default CommentBox