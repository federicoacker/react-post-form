import Post from "./Post.jsx"

function Postlist({posts}) {
    return (
            posts.map(post => {
                return post.public && <Post
                    key={post.keyId}
                    author={post.author}
                    title={post.title}
                    body={post.body}
                />
            })
    );
}

export default Postlist