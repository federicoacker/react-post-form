import { getPosts } from "../../utils/fetch.js";
import { useState, useEffect } from "react";

import Postlist from "./Postlist.jsx";
import StateDisplay from "./StateDisplay.jsx";
import { Container, Row } from "react-bootstrap";
import AddPostForm from "./AddPostForm.jsx";


function Main() {
    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(true);

    const [loadError, setLoadError] = useState([false, ""]);
    useEffect(() => {
        getPosts()
        .then(posts => {
            setPosts(posts);
            setLoaded(true);
        })
        .catch(error => {
            setLoadError([true, error.message]);
            
        });
    }, [loaded]);

    return (
        <main>
            <Container>
                <Row className="g-4 row-gap-2">
                    {(!loadError[0] && loaded) && <Postlist posts={ posts } setPosts={ setPosts }/>}
                    {(loadError[0]) && <StateDisplay stateMessage={ loadError[1] } loadError = {true}/>}
                    
                </Row>
                <Row className="justify-content-center py-5">
                    {(!loadError[0]) && <AddPostForm setLoaded={setLoaded}/>}
                </Row>
            </Container>
        </main>
    );
}

export default Main