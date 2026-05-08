import { getPosts } from "../../utils/fetch.js";
import { useState, useEffect } from "react";

import Postlist from "./Postlist.jsx";


function Main() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then(posts => setPosts(posts));
    },[]);

    return (
        <div>
            {JSON.stringify(posts)}
            <Postlist/>
        </div>
    );
}

export default Main