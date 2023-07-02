import { React, useState, useEffect } from "react";
import { API_BASE_URL } from "../config/constant";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function AllPosts() {

  const navigate=useNavigate();
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const getAllPosts = () => {
    fetch(`${API_BASE_URL}/posts`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
        setLoader(false);
      });
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  const deletePost = (postId) => {
    let action=window.confirm("Are you sure to proceed?")
    if (action){
    axios.delete(`${API_BASE_URL}/posts/${postId}`)
      .then((response) => {
        console.log(response);
        alertFunction('post cancellato bro','success');
        navigate(`/post`);
      })
      .catch((err) => {
        console.error(err);
        alertFunction('errore in fase di delete bro','danger');
      });
    }
  };
  function alertFunction(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    var alertPlaceholder = document.getElementById('alertMessage')
    alertPlaceholder.append(wrapper)
}
  return (
    <div>
      <section className="featured-posts container">
        <h3 className="text-center text-uppercase pt-4">Featured posts</h3>
        <div className="row">
        <div id="alertMessage"></div>
          {loader ? (
            <div className="col-12 text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            posts.map((post, index) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                    <img
                      src="https://animecorner.me/wp-content/uploads/2022/11/bocchi-the-rock.jpg"
                      className="card-img-top"
                      alt="casetta"
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.body}</p>
                      <div className="d-flex justify-content-between">
                        <Link
                          to={`/posts/${post.id}/${post.userId}`}
                          className="btn btn-primary text-uppercase"
                        >
                          Detail
                        </Link>
                        <Link
                          to={`/create/${post.id}/${post.userId}`}
                          className="btn btn-warning text-uppercase"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            deletePost(post.id);
                          }}
                          className="btn btn-danger text-uppercase"
                        >DELETE</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
