import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <Link to="/" className="navbar-brand pl-5">
                <img src="nasa.png" width="50" height="50" alt="" loading="lazy" />
            </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-control="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="navbar-item px-3 active">
            <a href="#" class="nav-link">Home <span class="sr-only">(Current)</span></a>
          </li>
          <li class="navbar-item px-3 ">
          <button className="btn btn-outline-warning my-2 my-sm-0" type="submit"><a href="https://blog.vinaykumar.tech" target="_blank">Blog</a></button>
          </li>
          <li class="navbar-item px-3 ">
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><a href="https://www.facebook.com/vinay.modepalli" target="_blank">Facebook</a></button>
          </li>
          <li class="navbar-item px-3 ">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><a href="https://github.com/vinaymodepalli" target="_blank">GitHub</a></button>
          </li>
        </ul>
        
        
      </div>  
    </nav>
    )
}

export default Navbar
