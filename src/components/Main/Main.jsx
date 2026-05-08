import { getPosts } from "../../utils/fetch.js";
import { useState, useEffect } from "react";

import Postlist from "./Postlist.jsx";
import { Container, Row } from "react-bootstrap";


function Main() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(posts => setPosts(posts));
    }, []);

    return (
        <main>
            <Container>
                <Row className="g-4 row-gap-2">
                    <Postlist posts={posts} />
                </Row>
            </Container>
        </main>
    );
}

export default Main