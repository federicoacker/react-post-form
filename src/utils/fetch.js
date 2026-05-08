const API_URL = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function getPosts() {
    const postArrayPromise = fetch(API_URL)
        .then(response => response.json());
    
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

    return mappedPostArrayPromise;
}

export {
    getPosts
}