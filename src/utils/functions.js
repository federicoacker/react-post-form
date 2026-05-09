
function validatePost(post){
    const {author,title,body} = post;

    const [successAuthor, sanifiedAuthor] = validateString(author);
    const [successTitle, sanifiedTitle] = validateString(title);
    const [successBody, sanifiedBody] = validateString(body);



    if(!successTitle){
        return [false, {error: "Il titolo non può essere vuoto"}];
    }
    if(!successAuthor){
        return [false, {error: "L'autore non può essere vuoto"}];
    }
    if(!successBody){
        return [false, {error: "Il testo del post non può essere vuoto"}];
    }

    const sanifiedPost = {
        author:sanifiedAuthor,
        title:sanifiedTitle,
        body:sanifiedBody,
        public:post.public
    }

    return[true, sanifiedPost];
}

function validateString(string){
    const sanifiedString = string.trim().charAt(0).toUpperCase() + string.trim().slice(1);
    if(sanifiedString === ""){
        return [false, null];
    }
    return [true, sanifiedString];
}

export {
    validatePost
}