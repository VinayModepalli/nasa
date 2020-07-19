import React, {Component} from 'react'
import API from '../API'

class APOD extends Component {
    state = {
        date: null,
        exp: null,
        title: null,
        hdurl: null,
        url: null,
        cr: null
    }
    componentDidMount = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}`)
      .then(response => response.json())
      .then(data => this.setState({
        date: data.date,
        exp: data.explanation,
        title: data.title,
        hdurl: data.hdurl,
        url: data.url,
        cr: data.copyright
       }));

      console.log(this.state)
    }
    render () {
        if (this.state.title) return (
            <div className="" >
                <h1 className="text-center main-heading animate__animated animate__fadeIn p-1">Astronomy Picture Of The Day</h1>
                <h2 className="text-center second-heading p-3">{this.state.title}</h2>
                <div className="container p-1 animate__animated animate__zoomIn">
                    <img src={this.state.url} alt="" className="img-fluid rounded mx-auto d-block"/>    
                </div>
                <p className=" p-1 pt-4 text-justify content animate__animated animate__fadeInUp">{this.state.exp}</p>
                <p className="text-justify p-3 copyright">Copyright: {this.state.cr}</p>
            </div>
        )
        else return (
            <div>
                <p className="text-center">Loading</p>
            </div>
        )
    }
}



export default APOD