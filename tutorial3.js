// tutorial3.js
val CommentBox = React.createClass({
  render: () => {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
