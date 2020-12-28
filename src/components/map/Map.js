// import React from 'react'
// import GoogleMapReact from 'google-map-react'

// import './map.css'

// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

// const LocationPin = ({ text }) => (
//     <div className="pin">
//       <Icon icon={locationIcon} className="pin-icon" />
//         <div className="bg-light card p-2">
//             <p className="pin-text">{text}</p>
//         </div>
//     </div>
//   )

// const Map = ({ location, zoomLevel }) => (
//     <div className="google-map">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: '' }}
//         defaultCenter={location}
//         defaultZoom={zoomLevel}
//       >
//         <LocationPin
//           lat={location.lat}
//           lng={location.lng}
//           text={location.address}
//         />

//       </GoogleMapReact>
//     </div>
//   )

// export default Map