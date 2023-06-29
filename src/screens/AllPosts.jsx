import React, { useEffect, useState } from 'react'

function AllPosts() {
    //Create a variable to store all posts and a set method to update the value of posts
    //useState hook helps us create this variable with empty array
    const [posts, setPosts] = useState([]);

    //ES6 function to get all posts from REST API
    //function getAllPosts(){}
    const getAllPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setPosts(json);
            });
    }

    useEffect(() => {
        getAllPosts();
    }, []) //empty array means call only once when component loads 

    return (
        <div>
            <section className='featured-posts container'>
                <h3 className='text-center text-uppercase pt-4'>Featured posts</h3>
                <div className='row'>
                    {posts.map((post, index) => {
                        return <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div className="card">
                                <img src="https://i.pinimg.com/originals/46/49/9f/46499fbb5eefefa92209a43537c8444d.jpg" className="card-img-top" alt="casetta"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.body}</p>
                                    <div className='d-grid'>
                                        <a href="#" className="btn btn-warning">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                         })
                    }
                </div>
            </section>
        </div>
    )
}

export default AllPosts