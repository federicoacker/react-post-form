import { Col } from "react-bootstrap"

function Post({ author, title, body }) {
    return (
        <Col xs={12} sm={12} md={6} lg={4}>
            <div className="single-post border rounded border-danger bg-dark text-white h-100">
                <div className="post-header border-bottom border-danger p-3">
                    <h2> {title} </h2>
                </div>
                <div className="post-body p-3">
                    <p>By - {author}</p>
                    <p>{body}</p>
                </div>
            </div>
        </Col>
    )
}

export default Post