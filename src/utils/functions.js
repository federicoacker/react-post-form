
function validatePost(post){
    const {author,title,body} = post;

    const [successAuthor, sanifiedAuthor] = validateString(author);
    const [successTitle, sanifiedTitle] = validateString(title);
    const [successBody, sanifiedBody] = validateString(body);

    if(!successAuthor){
        return [false, "L'autore non può essere vuoto"];
    }
    if(!successTitle){
        return [false, "Il titolo non può essere vuoto"];
    }
    if(!successBody){
        return [false, "Il testo del post non può essere vuoto"];
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
    const sanifiedString = string.trim();

    if(sanifiedString === ""){
        return [false, null];
    }
    return [true, sanifiedString];

}

export {
    validatePost
}