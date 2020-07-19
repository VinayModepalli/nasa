import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <h1 className="text-center">Home</h1>
            <div className="container">
                <div className="row">


                <div className="col-lg-4 col-md-6 d-flex justify-content-center animate__animated animate__zoomIn">
                    <div className="card text-white bg-transparent border-primary mb-4">
                        <div className="card-body">
                            <h3 className="card-title"><Link to="/nasa/apod" className="react-link" >APOD</Link></h3>
                            <h5 className="card-sub-heading">Astronomy Picture of the Day</h5>
                            <p className="card-text">APOD is one of the most popular websites at NASA, which features amazing planetary imagery.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex justify-content-center animate__animated animate__zoomIn">
                    <div className="card text-white bg-transparent border-primary mb-4">
                        <div className="card-body">
                            <h3 className="card-title"><Link to="/nasa/neows" className="react-link" >Asteroids NeoWs</Link></h3>
                            <h5 className="card-sub-heading">Near Earth Object Web Service</h5>
                            <p className="card-text">Find the information about Asteroids which are nearer to earth, and their closest approach date.</p>
                        </div>
                    </div>
                </div>
                        


                    


                </div>
            </div>
        </div>
    )
}

export default Home