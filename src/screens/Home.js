import React from 'react'
import './Home.css'
function Home() {
    return (
        <div>
            <section className='hero-section'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.kingdomhearts.com/img/trailers/desktop/15_desktop.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.negozio-medievale.it/img/kingdom-hearts-3-opening-movie-r.jpeg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/413252/26b5d3ef209fe0ee2335b8d924d90a80-975825.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section className='featured-posts container'>
                <h3 className='text-center text-uppercase pt-4'>Featured posts</h3>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card">
                            <img src="https://i.pinimg.com/originals/46/49/9f/46499fbb5eefefa92209a43537c8444d.jpg" className="card-img-top" alt="casetta"></img>
                            <div className="card-body">
                                <h5 className="card-title">Sora kingdomhearts 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-grid'>
                                    <a href="#" className="btn btn-warning">Go somewhere</a>
                                </div>                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card">
                            <img src="https://w0.peakpx.com/wallpaper/462/777/HD-wallpaper-kingdom-hearts-2-disney-thumbnail.jpg" className="card-img-top" alt="casetta"></img>
                            <div className="card-body">
                                <h5 className="card-title">The Kingdom Hearts</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-grid'>
                                    <a href="#" className="btn btn-warning">Go somewhere</a>
                                </div>                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card">
                            <img src="https://i.pinimg.com/originals/de/1f/70/de1f70c91e2d9744e4681673a2dc6c7e.jpg" className="card-img-top" alt="casetta"></img>
                            <div className="card-body">
                                <h5 className="card-title">Falling into the darkness</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-grid'>
                                    <a href="#" className="btn btn-warning">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='latest-posts container pt-2'>
                <h3 className='text-center text-uppercase py-4'>Latest posts</h3>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card">
                            <img src="https://i.pinimg.com/originals/46/49/9f/46499fbb5eefefa92209a43537c8444d.jpg" className="card-img-top" alt="casetta"></img>
                            <div className="card-body">
                                <h5 className="card-title">Sora kingdomhearts 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-grid'>
                                    <a href="#" className="btn btn-warning">Go somewhere</a>
                                </div>                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card">
                            <img src="https://w0.peakpx.com/wallpaper/462/777/HD-wallpaper-kingdom-hearts-2-disney-thumbnail.jpg" className="card-img-top" alt="casetta"></img>
                            <div className="card-body">
                                <h5 className="card-title">The Kingdom Hearts</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-grid'>
                                    <a href="#" className="btn btn-warning">Go somewhere</a>
                                </div>                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card">
                            <img src="https://i.pinimg.com/originals/de/1f/70/de1f70c91e2d9744e4681673a2dc6c7e.jpg" className="card-img-top" alt="casetta"></img>
                            <div className="card-body">
                                <h5 className="card-title">Falling into the darkness</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-grid'>
                                    <a href="#" className="btn btn-warning">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid bg-primary bg-gradient mt-4' style={{minHeight:"130px"}}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className='fs-1 text-warning my-3 fa-solid fa-location-dot'></i>
             <h3 className='text-white text-uppercase'>View All Posts</h3>
            <button className='btn btn-warning my-2 text-uppercase'>View Posts</button>
            </div>
            </section>
            <section className='our-portfolio'>
                <h3 className='text-center text-uppercase py-4'>Our Portfolio</h3>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-6">
                            <div className="p-1 border bg-light">
                            <img src="https://i.pinimg.com/originals/46/49/9f/46499fbb5eefefa92209a43537c8444d.jpg" className="card-img-top" alt="casetta"></img>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-1 border bg-light">
                            <img src="https://i.pinimg.com/originals/46/49/9f/46499fbb5eefefa92209a43537c8444d.jpg" className="card-img-top" alt="casetta"></img>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-1 border bg-light">
                            <img src="https://i.pinimg.com/originals/46/49/9f/46499fbb5eefefa92209a43537c8444d.jpg" className="card-img-top" alt="casetta"></img>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-1 border bg-light">
                            <img src="https://i.pinimg.com/originals/46/49/9f/46499fbb5eefefa92209a43537c8444d.jpg" className="card-img-top" alt="casetta"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home