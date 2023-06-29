import { React, useState, useEffect } from "react";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const getAllPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
      });
  };
  useEffect(() => {
    getAllPosts();
  },[]);

  return (
    <div>
      <section className="featured-posts container">
        <h3 className="text-center text-uppercase pt-4">Featured posts</h3>
        <div className="row">
          {posts.map((post,index)=>{
            return <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <img
                  src="https://animecorner.me/wp-content/uploads/2022/11/bocchi-the-rock.jpg"
                  className="card-img-top"
                  alt="casetta"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">
                  {post.body}
                  </p>
                  <div className="d-grid">
                    <a href="#" className="btn btn-warning">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </section>
    </div>
  );
}
