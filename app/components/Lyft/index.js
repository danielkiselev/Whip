import React from 'react'
import EventDataService from '../../services/EventDataService/index'
import FlightDataService from '../../services/FlightDataService/index'
import LyftDataService from '../../services/LyftDataService/index'
import Chart from 'chart.js';
var max = 0
var airline = ""
var day = ""
var timeMax = "";
class Lyft extends React.Component {

  constructor() {
    super()

    this.state = {
      latitude: 40.854885,
      longitude: -88.081807,
      maxFlights: 0,
      numDrivers: 0
    }

    this.getFlightData = this.getFlightData.bind(this)
    this.flightDataService = new FlightDataService()
    this.eventDataService = new EventDataService()
    this.LyftDataService = new LyftDataService()
  }

  getFlightData() {
    this.flightDataService.getFlightData('LGA')
  }

  componentDidMount() {
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
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

            var service = new google.maps.places.PlacesService(map);
                    service.nearbySearch({
                    location: pyrmont,
                    radius: 10000,
                    keyword: ['airport'],
                    name: ['airport'],
                    type: ['airport']},
                    function(results, status){
                      if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                          if(results[i].name.includes("Park")) continue;
                          let placeLoc = results[i].geometry.location;
                          let marker = new google.maps.Marker({
                          map: map,
                          position: results[i].geometry.location,
                          title: results[i].name,
                          icon: '../../assets/airport_marker.png'
                          });

                          let infowindow = new google.maps.InfoWindow({
                            content: marker.title
                           });

                          marker.addListener('click', function() {
                            infowindow.open(map, marker);
                          });
                          marker.setMap(map);
                        }
                      }
            });



            this.eventDataService.getEventData(this.state.latitude, this.state.longitude, (events) => {
              let actual_events = events.search.events

              let final_event_obj = actual_events[0].event

              this.setState({ mostPopularEvent : final_event_obj[0]})

              for (var current_event in final_event_obj) {
                let some_obj = final_event_obj[current_event]
                for (var more_current_event in some_obj) {
                  var latitude, longitude, title, stopTime;
                  if (more_current_event == "longitude") {
                    longitude = some_obj[more_current_event]
                    console.log('longitude', longitude)
                  }
                  if (more_current_event == "latitude") {
                    latitude = some_obj[more_current_event]
                    console.log('latitude', latitude)
                  }
                  if (more_current_event == "title") {
                    title = some_obj[more_current_event]
                    console.log('title', title)
                  }
                  if (more_current_event == "stop_time") {
                    stopTime = some_obj[more_current_event]
                    console.log('stopTime', stopTime)
                  }

                  var myLatlng = new google.maps.LatLng(latitude, longitude);


                  var marker = new google.maps.Marker({
                    position: myLatlng,
                    icon: '../../assets/event_marker.png'
                    });

                    marker.setMap(map);
                }
              }
            })


        this.LyftDataService.getNearbyDrivers(this.state.latitude, this.state.longitude, (driversData) => {

          let lyftDrivers = driversData.nearby_drivers[0]
          let lyftPlusDrivers = driversData.nearby_drivers[1]

          var numDrivers = 0;

          for (var driver in lyftDrivers.drivers) {
            let current_driver = lyftDrivers.drivers[driver]

            let latitude = current_driver.locations[0].lat
            let longitude = current_driver.locations[0].lng

            numDrivers += 1;

            var myLatlng = new google.maps.LatLng(latitude, longitude);


            var marker = new google.maps.Marker({
              position: myLatlng,
              icon: '../../assets/car_marker.png'
              });

              marker.setMap(map);
          }

          this.setState({ numDrivers : numDrivers})
        })
      }
    );

    let flightData = this.flightDataService.getFlightData((flightData) => {
      this.setState({ flightData : flightData })
                console.log('this.state.flightData', this.state.flightData)

                var dates_data = {};
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
                      var dates = []
                      for(var i in attributeV){
                        var time = [];
                        for(var z in attributeV[i]){
                          if(attributeV[i][z]>max){
                            airline = String(attributeK);
                            max = String(attributeV[i][z]);
                            timeMax = String(z);
                            day = String(i);
                          }

                          time.push(String(attributeV[i][z]));
                        }
                        var date = {
                        label: String(i),
                        backgroundColor: getRandomColor(),
                        data:time,
                        };
                        dates.push(date);
                    }
                    dates_data[attributeK]= dates
                  }
                }
              }
                console.log('by Dates', dates_data)

      /*

      new Chart(ctx, {
      				type: 'bar',
      				data: barChartData,
      				options: {
      					title: {
      						display: true,
      						text: 'Chart.js Bar Chart - Stacked'
      					},
      					tooltips: {
      						mode: 'index',
      						intersect: false
      					},
      					responsive: true,
      					scales: {
      						xAxes: [{
      							stacked: true,
      						}],
      						yAxes: [{
      							stacked: true
      						}]
      					}
      				}
      			});
      */
                //var ctx = document.getElementById("studentChart");
                //var curr = dates_data['lga'];
                //onsole.log('curr', curr)
                for (var key in dates_data){
                  if (dates_data.hasOwnProperty(key)) {
                      console.log(key, dates_data[key]);
                  }
                  var container = document.querySelector('.dashboardStudentContainer');
                  var div = document.createElement('div');
          				div.classList.add('chart-container');

          				var canvas = document.createElement('canvas');
          				div.appendChild(canvas);
          				container.appendChild(div);
                  var curr = dates_data[key];
          				var ctx = canvas.getContext('2d');
                  var myChart = new Chart(ctx, {
                  type: 'bar',
                  data: {
                      labels:["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM",
                             "12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"],
                      datasets:curr
                  },
                  responsive: true,
                  options: {
                    title: {
                      display: true,
                      text: key.toUpperCase(),
                      fontSize: 30

                    },
                    tooltips: {
                      mode: 'index',
                      intersect: false
                    },

                    scales: {
                      xAxes: [{
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Time'
                        }
                      }],
                      yAxes: [{
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Number of Flights'
                        }
                      }]
                    }
                  }
                });
              }
              })

}

  render() {

    let eventTitle = (this.state.mostPopularEvent != undefined) ? this.state.mostPopularEvent.title : "Unavailable"
    let eventStopTime = (this.state.mostPopularEvent != undefined) ? this.state.mostPopularEvent.stop_time : "Unavailable"

/*
    if((eventTitle == "Unavailable") || (eventStopTime = "Unavailable")){
      var x = document.getElementById("eventParagraph");
      x.style.display = "none";
    }

*/

    return (
      <div>

      <header className="masthead bg-primary text-white text-center" id='lyftPageContainer'>
        <div className="container">
        <img src='../../assets/lyft-logo-white.png' className='lyftLogo'></img>
        </div>
      </header>


      <section className="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0" id='timeTitle'>Flights</h2>
          <hr className="star-dark mb-5"></hr>
          <p className="lead" id='eventParagraph'>There are <span id='boldInfo'>{max}</span> flights arriving on <span id='boldInfo'>{timeMax} {day}</span> at <span id='boldInfo'>{airline.toUpperCase()}</span></p>
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

      <section className="portfolio" id='anotherGreen'>
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0" id='eventMiddleTitle'>Events</h2>
          <hr className="star-light mb-5"></hr>
          <p className="lead" id='eventParagraph'>The most popular event within a 25 mile radius from you is {eventTitle}, which ends at approximately <span id='boldInfo'>{eventStopTime}</span></p>
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

      <section className="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0" id='timeTitle'>Competition</h2>
          <hr className="star-dark mb-5"></hr>
          <p className="lead" id='eventParagraph'>There are currently <span id='boldInfo'>{this.state.numDrivers}</span> other Lyft drivers working in your area.</p>
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

      </div>

      </div>
    )
  }
}

export default Lyft
