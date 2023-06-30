import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { API_BASE_URL } from '../config/constant';

export default function PostDetails() {
   

    const[name,setName] = useState()
    const[phone,setPhone] = useState()
    const[email,setEmail] = useState()
    const[website,setWebsite] = useState()

    const[body,setBody] = useState()
    const[title,setTitle] = useState()

    const {postId, userId } = useParams()

    const getPostAndUser = ()=>{
    axios.get(`${API_BASE_URL}/posts/${postId}`)
    .then((postRes)=>{
      const{title,body} = postRes.data;
      setTitle(title);
      setBody(body);
        axios.get(`${API_BASE_URL}/users/${userId}`)
        .then((userRes)=>{
            const{name,phone,email,website} = userRes.data;
            setName(name)
            setEmail(email)
            setPhone(phone)
            setWebsite(website) 
        }).catch((err) =>{
            console.log(err);
        });
    })
    .catch((err) =>{
        console.log(err);
    });
    }



    useEffect(()=>{
        getPostAndUser();
    },[]);

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h3 className='text-center text-uppercase pt-4'>Post Detail</h3>

            </div>

        </div>
        <div className='row mt-3'>
                    <div className='col-md-9 col-lg-9 col-sm-12 border-primary'>
                    <div className="card mb-3">
        <img src="https://i.pinimg.com/564x/c5/5d/c4/c55dc41baa230ad8471a7270cdbc92c4.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
            <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
                </p>
        </div>
        </div>

            </div>
            <div className='col-md-3 col-lg-3 col-sm-12 border-primary'>
                
                    <div className="card">
        <img src="https://i.pinimg.com/564x/67/7c/6f/677c6fb31ffa3f09248a600ea85105cf.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">User Information</h5>
            <p className="card-text">{name}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
            <li className="list-group-item">{website}</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
</div>
            </div>

        </div>
    </div>
  )
}
