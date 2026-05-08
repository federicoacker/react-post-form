import { useState } from "react";
import { Col } from "react-bootstrap";
import { validatePost } from "../../utils/functions";
import { addPost } from "../../utils/fetch";
import StateDisplay from "./StateDisplay";

const postTemplate = {
    author: "",
    title: "",
    body: "",
    public: false
}

function AddPostForm({ posts }) {

    const [newPost, setNewPost] = useState(postTemplate);
    const [postSuccess, setPostSuccess] = useState({code:0, message:null});

    const changeHandler = (event) => {
        const target = event.target;
        const { name, type, value, checked } = target;

        const postToAdd = {
            ...newPost,
            [name]: (type === "checkbox") ? checked : value
        };

        setNewPost(postToAdd);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const [isPostValid, validatedResponse] = validatePost(newPost);

        if(!isPostValid){
            alert(validatedResponse.error);
            return;
        }

        addPost(validatedResponse)
        .then(success => {setPostSuccess({code:1, message:null})})
        .catch(error => {setPostSuccess({code:-1, message:"C'è stato un errore nell'upload del tuo post"})})
    }


    return (
        <Col xs={12} sm={12} md={6}>
            <form className="form-control d-flex flex-column justify-content-center text-white" data-bs-theme="dark" onSubmit={submitHandler}>
                <label className="form-label" htmlFor="title">Titolo del Post</label>
                <input required className="form-control" type="text" name="title" id="title" value={newPost.title} onChange={changeHandler} />
                <label className="form-label" htmlFor="author">Autore</label>
                <input required className="form-control" type="text" name="author" id="author" value={newPost.author} onChange={changeHandler} />
                <label className="form-label" htmlFor="body">Testo del Post</label>
                <textarea required className="form-control" name="body" id="body" value={newPost.body} onChange={changeHandler} />
                <div>
                    <label className="form-check-label" htmlFor="public">Voglio che il mio post sia visualizzabile da altri utenti</label>
                    <input className="form-check-input mx-3" type="checkbox" name="public" id="public" checked={newPost.public} onChange={changeHandler} />
                    <p className="form-check-label" >(Potrebbero visualizzarlo lo stesso se non hanno implementato i controlli giusti)</p>
                </div>
                <button className="btn btn-primary">Invia il tuo post nell'interweb!</button>
                {JSON.stringify(newPost)}
                {
                    (postSuccess.code !== 0) && <StateDisplay 
                    loadError={ false } 
                    stateMessage={ postSuccess.message } 
                    postSuccessCode={ postSuccess.code }/>
                }
            </form>
        </Col>
    )
}

export default AddPostForm