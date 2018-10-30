import React from 'react'

class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state={}
  }

  render() {
    return (
      <div>

      <header className="masthead bg-primary text-white text-center">
        <div className="container">
          <h1 className="text-uppercase mb-0">Plan</h1>
          <hr className="star-light"></hr>
          <h2 className="font-weight-light mb-0">Whip is a utility application to give you valuable insight into
           when there could be a hightened demand for transportation services</h2>
        </div>
      </header>

      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Time</h2>
          <hr className="star-dark mb-5"></hr>
          <p className="lead">Whip aggregates data from across the web to predict the optimal times for you to work, so you can spend more time
          doing what you love. Plan your driving schedule in advance through our easy to use service and add value to your time.
          </p>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="text-center text-uppercase text-white">Location</h2>
          <hr className="star-light mb-5"></hr>
          <div className="row">
            <div className="col-lg-4 ml-auto">
              <p className="lead">Utilizing your geo-location we scan your proximity and provide you with a selection of options. Allowing you to choose the ones
              that best suit your life.</p>
            </div>
            <div className="col-lg-4 mr-auto">
              <p className="lead">Whip uses a comprehensive set of data and analysis to empower drivers with our informatics. Don't work more; work smarter.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Contact Us</h2>
          <hr className="star-dark mb-5"></hr>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form name="sentMessage" id="contactForm" noValidate="noValidate">
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Name</label>
                    <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name."></input>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Email Address</label>
                    <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."></input>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Phone Number</label>
                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."></input>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Message</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div id="success"></div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">Dandy Hacks</p>
            </div>
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Social Media</h4>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                    <i className="fab fa-fw fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                    <i className="fab fa-fw fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                    <i className="fab fa-fw fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                    <i className="fab fa-fw fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                    <i className="fab fa-fw fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="text-uppercase mb-4">About Whip</h4>
              <p className="lead mb-0">Whip is free to use for every driver<br></br>
                <a href="/Lyft">Plan Your Uber Schedule</a>.</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Whip 2018</small>
        </div>
      </div>

      <div className="scroll-to-top d-lg-none position-fixed ">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>

      <div className="portfolio-modal mfp-hide" id="portfolio-modal-1">
        <div className="portfolio-modal-dialog bg-white">
          <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i className="fa fa-3x fa-times"></i>
          </a>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr className="star-dark mb-5"></hr>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i className="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal mfp-hide" id="portfolio-modal-2">
        <div className="portfolio-modal-dialog bg-white">
          <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i className="fa fa-3x fa-times"></i>
          </a>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr className="star-dark mb-5"></hr>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i className="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal mfp-hide" id="portfolio-modal-3">
        <div className="portfolio-modal-dialog bg-white">
          <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i className="fa fa-3x fa-times"></i>
          </a>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr className="star-dark mb-5"></hr>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i className="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal mfp-hide" id="portfolio-modal-4">
        <div className="portfolio-modal-dialog bg-white">
          <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i className="fa fa-3x fa-times"></i>
          </a>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr className="star-dark mb-5"></hr>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i className="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal mfp-hide" id="portfolio-modal-5">
        <div className="portfolio-modal-dialog bg-white">
          <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i className="fa fa-3x fa-times"></i>
          </a>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr className="star-dark mb-5"></hr>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i className="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal mfp-hide" id="portfolio-modal-6">
        <div className="portfolio-modal-dialog bg-white">
          <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i className="fa fa-3x fa-times"></i>
          </a>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr className="star-dark mb-5"></hr>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i className="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    )
  }
}

export default Home
