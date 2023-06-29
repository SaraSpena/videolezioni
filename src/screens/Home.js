import React from 'react'
import './Home.css'
function Home() {
    return (
        <div>
            <section className='hero-section mt-1'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.pinimg.com/originals/a9/96/a7/a996a7e215d363760d7135b4ce8155dd.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cutewallpaper.org/21/hd-hamster/animals,-Mammals,-Hamster-HD-Wallpapers-Desktop-and-Mobile-.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cutewallpaper.org/28/cute-hamster-wallpaper-hd/958631469.jpg" className="d-block w-100" alt="..." />
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
            <section className='featured-posts container pt-2'>
                <h3 className='text-center text-uppercase  py-4'>Featured posts</h3>
               
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/7e/c8/1d/7ec81dea8efdd77961ff380027bd5e83.jpg" class="card-img-top" alt="casetta"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-grid'>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div class="card">
                            <img src="https://pbs.twimg.com/media/FTLJI91VUAABQ_s.jpg" class="card-img-top" alt="casetta"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-grid'>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/03/5f/53/035f534bdff20784828e8e258a87b4ac.jpg" class="card-img-top" alt="casetta"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               <div className='d-grid'>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='d-flex flex-column justify-content-center align-items-center bg-primary'>
              <i class='fs-1 text-warning my-3 fa-solid fa-location-dot'></i>
                <h3 className='text-white text-uppercase'We have wide variety of Posts></h3>
               <button className='btn btn-warning my-2 text-white text-uppercase'>View all Posts</button>
            </section>
            <section className='latest-posts pt-2'>
            <h3 className='text-center text-uppercase py-4'>Latest posts</h3>
            <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/7e/c8/1d/7ec81dea8efdd77961ff380027bd5e83.jpg" class="card-img-top" alt="casetta"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-grid'>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div class="card">
                            <img src="https://pbs.twimg.com/media/FTLJI91VUAABQ_s.jpg" class="card-img-top" alt="casetta"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-grid'>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div class="card">
                            <img src="https://i.pinimg.com/564x/03/5f/53/035f534bdff20784828e8e258a87b4ac.jpg" class="card-img-top" alt="casetta"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               <div className='d-grid'>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='our-portfolio'>
            <h3 className='text-center text-uppercase py-4'>Our Portfolio</h3>
            <div className="container">
  <div className="row g-2">
    <div className="col-6">
      <div className="p-3 border bg-light">
      <img src="https://i.pinimg.com/564x/03/5f/53/035f534bdff20784828e8e258a87b4ac.jpg" class="card-img-top" alt="casetta"></img>
      </div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light">
      <img src="https://i.pinimg.com/564x/03/5f/53/035f534bdff20784828e8e258a87b4ac.jpg" class="card-img-top" alt="casetta"></img>
        </div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light">
      <img src="https://i.pinimg.com/564x/03/5f/53/035f534bdff20784828e8e258a87b4ac.jpg" class="card-img-top" alt="casetta"></img>
        </div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light">
      <img src="https://i.pinimg.com/564x/03/5f/53/035f534bdff20784828e8e258a87b4ac.jpg" class="card-img-top" alt="casetta"></img>
        </div>
    </div>
  </div>
</div>
            </section>
        </div>
    )
}

export default Home