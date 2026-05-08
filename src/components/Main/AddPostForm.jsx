import { useState } from "react";
import { Col } from "react-bootstrap";

const postTemplate = {
    author:"",
    title:"",
    body:"",
    public:false
}

function AddPostForm({ posts }) {

    const [newPost, setNewPost] = useState(postTemplate);

    const changeHandler = (event) => {
        const target = event.target;
        const {name, type, value, checked} = target;
   };

    return (
        <Col xs={12} sm={12} md={6}>
            <form className="form-control d-flex flex-column justify-content-center text-white" data-bs-theme="dark">
                <label className="form-label" htmlFor="title">Titolo del Post</label>
                <input className="form-control" type="text" name="title" id="title" />
                <label className="form-label" htmlFor="author">Autore</label>
                <input className="form-control" type="text" name="author" id="author" />
                <label className="form-label" htmlFor="body">Testo del Post</label>
                <textarea className="form-control" name="body" id="body" />
                <div>
                    <label className="form-check-label" htmlFor="public">Voglio che il mio post sia visualizzabile da altri utenti</label>
                    <input className="form-check-input mx-3" type="checkbox" name="public" id="public" />
                    <p className="form-check-label" >(Potrebbero visualizzarlo lo stesso se non hanno implementato i controlli giusti)</p>
                </div>
                <button className="btn btn-primary">Invia il tuo post nell'interweb!</button>
            </form>
        </Col>
    )
}

export default AddPostForm