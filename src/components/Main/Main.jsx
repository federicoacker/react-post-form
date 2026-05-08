import { getPosts } from "../../utils/fetch.js";
import { useState, useEffect } from "react";


function Main() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then(posts => setPosts(posts));
    },[]);

    return (
        <div>
            {JSON.stringify(posts)}
        </div>
    );
}

export default Main