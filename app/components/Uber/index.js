import React from 'react'
import FlightDataService from '../../services/FlightDataService/index'
import Chart from 'chart.js';

class Uber extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      latitude: 40.854885,
      longitude: -88.081807,
      flightData: {},
      topChoices: []
    }

    this.flightDataService = new FlightDataService()
  }

  componentDidMount() {
    let flightData = this.flightDataService.getFlightData((flightData) => {
          this.setState({ flightData : flightData })
          console.log('this.state.flightData', this.state.flightData)

          var dates_data = [];
          for (var airportCode in flightData) {
            var attributeKey = airportCode
            var attributeValue = flightData[airportCode]
            for (var moreData in attributeValue) {
              var attributeK = moreData
              var attributeV = attributeValue[moreData]
              console.log('attributeK', attributeK)
              console.log('attributeV', attributeV)
              if (typeof(attributeV) == 'object') {
                console.log('true')
                var dates = [];
                for(var i in attributeV){
                  var time = []
                  for(var z in attributeV[i]){
                    time.push(attributeV[i][z])
                  }
                  dates[i] = time

                }
                dates_data[attributeK]= dates
              }
            }
          }
          console.log('by Dates', dates_data)
          var ctx = document.getElementById("studentChart");
          var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM",
                     "12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"],
              datasets: [{
                label: 'Flights',
                data: dates_data['lga']['Oct 27'],
                backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                    ],
                borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                  }]
              },
              options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero:true
                    }
                  }]
                }
              }
            });
          })


    navigator.geolocation.getCurrentPosition(
      position => {
        const { lat, lon } = position.coords;
        //console.log(position);

        this.setState({
         latitude: position.coords.latitude,
         longitude: position.coords.longitude
        });

        var pyrmont = {lat: this.state.latitude, lng: this.state.longitude};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 14});

        var myLatlng = new google.maps.LatLng(this.state.latitude, this.state.longitude);
        var myMarker = new google.maps.Marker({
          position: myLatlng,
          title:"Current Location",
          });

        var infowindow1 = new google.maps.InfoWindow({
            content: myMarker.title
          });


        myMarker.addListener('click', function() {
          infowindow1.open(map, myMarker);
        });

          myMarker.setMap(map);


        var airportLatlng = new google.maps.LatLng(43.1225, -77.6666);

        var airportMarker = new google.maps.Marker({
          position: airportLatlng,
          title:"Greater Rochester International Airport",
          icon: '../../assets/airport_marker.png'
          });

          var infowindow2 = new google.maps.InfoWindow({
            content: airportMarker.title
          });


        airportMarker.addListener('click', function() {
          infowindow2.open(map, airportMarker);
        });

          airportMarker.setMap(map);

      }
    )
  }

  render() {


    return (
      <div>

      <header className="masthead bg-primary text-white text-center" id='lyftPageContainer'>
        <div className="container">
        <img src='../../assets/uber-white.png' className='uberLogo'></img>
        </div>
      </header>

      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Flights</h2>
          <hr className="star-dark mb-5"></hr>
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

      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Events</h2>
          <hr className="star-dark mb-5"></hr>
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

      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Competition</h2>
          <hr className="star-dark mb-5"></hr>
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

      <div id='map'></div>

      <div className='dashboardStudentContainer'>
        <canvas id="studentChart"></canvas>
      </div>

      </div>
    )
  }
}

export default Uber
