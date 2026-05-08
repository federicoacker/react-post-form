const API_URL = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function getPosts() {
    const postArrayPromise = fetch(API_URL)
        .then(response => response.json())
        .catch(error => {throw new Error(error)});
    
    const normalizedPostArrayPromise = mapPosts(postArrayPromise);

    return normalizedPostArrayPromise;
}

function mapPosts(postArrayPromise) {

    const mappedPostArrayPromise = postArrayPromise
        .then(postArray => {
            const mappedPosts = postArray.map(
                post => {
                    return (
                        {
                            ...post // Per ora non faccio alcun mapping particolare 
                            // ma mi tengo qua la funzione nel caso in cui fosse 
                            // necessaria una normalizzazione particolare
                        });
                }
            )
            return mappedPosts;
        })
        .catch(error => {throw new Error(error)})

    return mappedPostArrayPromise;
}

function addPost( post ){
    const options = {
        headers: {
                'Content-Type': 'application/json'  
            },
        method: "POST",
        body: JSON.stringify(post)
    };

    const postResponsePromise = fetch(API_URL, options)
    .then(response => response.json());

    return postResponsePromise;
}

export {
    getPosts,
    addPost
}