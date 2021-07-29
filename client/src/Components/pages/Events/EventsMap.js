// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
// import { Component } from 'react';
// import Geocoder from 'react-native-geocoding';


// export class MapContainer extends Component {

//     constructor({ address, city, country, zipCode }) {

//         super({ address, city, country, zipCode })
//         this.state = {

//         }
//         Geocoder.init('AIzaSyBE3q5tReYnYNbpBa6KvXt5X4zDDTbT5Iw')
//         Geocoder
//             .from(this.address)
//             .then(json => {
//                 const location = json.results[0].geometry.location;
//                 console.log(location);
//             })
//             .catch(error => console.warn(error));
//     }


  


//     render() {
//         return (
//             <Map google={this.props.google} zoom={14}>

//                 <Marker onClick={this.onMarkerClick}
//                     name={'Current location'} />

//                 <InfoWindow onClose={this.onInfoWindowClose}>
//                     <div>
//                         <h1>{this.state.selectedPlace.name}</h1>
//                     </div>
//                 </InfoWindow>
//             </Map>
//         );
//     }
// }

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyB9iXJp-hGcnW-et20HOGBi3lfYknV2XYA')
// })(MapContainer)