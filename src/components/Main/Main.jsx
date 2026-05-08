import { getPosts } from "../../utils/fetch.js";
import { useState, useEffect } from "react";

import Postlist from "./Postlist.jsx";
import ErrorDisplay from "./ErrorDisplay.jsx";
import { Container, Row } from "react-bootstrap";
import AddPostForm from "./AddPostForm.jsx";


function Main() {
    const [posts, setPosts] = useState([]);
    const [loadError, setLoadError] = useState([false, ""]);

    useEffect(() => {
        getPosts()
        .then(posts => setPosts(posts))
        .catch(error => {setLoadError([true, error.message])});
    }, []);

    return (
        <main>
            <Container>
                <Row className="g-4 row-gap-2">
                    {!loadError[0] && <Postlist posts={ posts }/>}
                    {loadError[0] && <ErrorDisplay errorMessage={ loadError[1] }/>}
                    
                </Row>
                <Row className="justify-content-center py-5">
                    {!loadError[0] && <AddPostForm posts={posts}/>}
                </Row>
            </Container>
        </main>
    );
}

export default Main