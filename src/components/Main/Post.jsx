
function Post({author, title, body}) {
  return (
    <div className="single-post">
        <div className="post-header">
            <h2> {title} </h2>
        </div>
        <div className="post-body">
            <p>By - {author}</p>
            <p>{body}</p>
        </div>
    </div>
  )
}

export default Post