import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <section className="hero-section mt-1">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://spacenerd.it/wp-content/uploads/2022/12/bocchi-the-rock-recensione.jpg.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://anime.atsit.in/it/wp-content/uploads/2023/01/bocchi-the-rock-guitar-to-kodoku-to-aoi-wakusei-supera-i-10-milioni-di-visualizzazioni-in-2-mesi.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.animeclick.it/immagini/anime/Bocchi_the_Rock/gallery_original/Bocchi_the_Rock-634291cb96938.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="featured-posts container">
        <h3 className="text-center text-uppercase pt-4">Featured posts</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <img className="card-img-top" src="https://spacenerd.it/wp-content/uploads/2022/12/bocchi-the-rock-recensione.jpg.webp" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <img className="card-img-top" src="https://spacenerd.it/wp-content/uploads/2022/12/bocchi-the-rock-recensione.jpg.webp" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <img className="card-img-top" src="https://spacenerd.it/wp-content/uploads/2022/12/bocchi-the-rock-recensione.jpg.webp" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-posts">
        <h3 className="text-center text-uppercase pt-4">Latest posts</h3>
      </section>
      <section className="our-portfolio">
        <h3 className="text-center text-uppercase pt-4">Our Portfolio</h3>
      </section>
    </div>
  );
}
