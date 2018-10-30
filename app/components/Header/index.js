import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state={}

  }

  render() {

    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/"></a>
          <Link to='/'><img src='../../assets/whip_logo.png' className='WhipLogo' style={{maxHeight: '50px'}} onClick={this.backToHome}></img></Link>
          <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Link to="/uber" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Uber</Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link to="/lyft" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Lyft</Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link to="/login" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

export default Header
