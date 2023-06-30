import React, { useState } from 'react'
import { useEffect } from 'react';
import { API_BASE_URL } from '../config/constant';
import {Link} from 'react-router-dom'
export default function AllPosts() {
    //Creamo uan variabil per salvare tutti i post e un metodo
    //set per aggiornare il valore dei post
    //useState hook aiuta a creare questa variabile con un array vuoto
    const [posts,setPosts] = useState([])
    const [loader,setLoader] = useState(true)
    //ES6 function per caricare tutti i post
    // function getAllPosts() {}
    const getAllPosts=() => {
        fetch(`${API_BASE_URL}/posts`)
        
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setPosts(json);
            setLoader(false);
        });
    }
        //noi vogliamo caricare del data sulla pagina di questo componente
        useEffect(() =>{
            getAllPosts();
        },[]); // un array vuoto significa che verra eseguito quando il componente carichera

  return (
    <div> 
        <section className=' container pt-2'>
                <h3 className='text-center text-uppercase  py-4'>Featured posts</h3>
               
                <div className='row'>
                    {loader ? 
                    <div className='col-12 text-center'>
                    <div className="spinner-border text-primary" role="status">
                 <span class="visually-hidden">Loading...</span>
                </div>
                </div>
                    :posts.map((post,index)=>{
                   return <div key={index} className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card">
                            <img src="https://images3.memedroid.com/images/UPLOADED246/63d92d01d10dc.jpeg" class="card-img-top" alt="casetta"></img>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <div className='d-grid'>
                                <Link to={`/posts/${post.id}/${post.userId}`} className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    })}
                </div>
            </section>

    </div>
  )
}
