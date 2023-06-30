import React, { useState } from 'react'
import { API_BASE_URL } from '../config/constant';
import { useParams } from "react-router-dom";


function CreatePost() {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [loader, setLoader] = useState(false);
    const { postId, userId } = useParams();
    const [isEdit, setIsEdit] = useState(false);

    const createPost = (event) => {
        setLoader(true);
        event.preventDefault();
        let methodType = 'POST';
        let requestBody = JSON.stringify({
            title: title,
            body: body,
            userId: 1,
        });
        
        if (postId) {
            setIsEdit(true);
            methodType = 'PUT';
            setLoader(true);
            fetch(`${API_BASE_URL}/posts/${postId}`)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    requestBody = JSON.stringify({
                        title: json.title,
                        body: json.body,
                        userId: userId,
                    })
                    setLoader(false)
                });
        }
    fetch(`${API_BASE_URL}/posts`, {
        method: `${methodType}`,
        body: requestBody,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            setLoader(false);
            console.log(json);
            if (isEdit) {
                alertFunction("Post Edited Successfully!", 'success');
            } else {
                alertFunction("Post Created Successfully!", 'success');
            }

        }).catch((err) => {
            alertFunction("Some error has occoured", 'danger');
            setLoader(false);
            console.log(err);
        });
    }
    function alertFunction(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        var alertPlaceholder = document.getElementById('alertMessage')
        alertPlaceholder.append(wrapper)
    }
return (

    <div className='container'>
        {isEdit ? <h3 className='text-center text-uppercase pt-4'>Edit Post</h3>
            : <h3 className='text-center text-uppercase pt-4'>Create Post</h3>}
        <div id="alertMessage"></div>
        {loader ?
            <div className='col-12 text-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            :
            <div className='mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2'>
                <form onSubmit={(event) => { createPost(event) }}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Post Title</label>
                        <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="query" className="form-label">Post Description</label>
                        <textarea onChange={(e) => { setBody(e.target.value) }} className="form-control" id="query" required></textarea>
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Create Post</button>
                    </div>

                </form>
            </div>
        }
    </div>
)
}

export default CreatePost