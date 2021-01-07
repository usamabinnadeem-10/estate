import React from "react";

import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
} from "react-google-maps";

import { compose, withProps, withStateHandlers } from "recompose";

const MapSearch = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDYuHFLdk-1Yw9IfmS2dtogQj1vL4DkO2E&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div className="col-10 mx-auto" style={{ height: "500px" }} />
    ),
    mapElement: <div style={{ height: "100%" }} />,
  }),
  withStateHandlers(
    (props) => ({
      infoWindows: props.places.map((p) => {
        return { isOpen: false };
      }),
    }),
    {
      onToggleOpen: ({ infoWindows }) => (selectedIndex) => ({
        infoWindows: infoWindows.map((iw, i) => {
          iw.isOpen = selectedIndex === i;
          return iw;
        }),
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
    {props.places &&
      props.places.map((place, i) => {
        let lat = parseFloat(place.latitude, 10);
        let lng = parseFloat(place.longitude, 10);

        return (
          <Marker
            id={place.id}
            key={place.id}
            position={{ lat: lat, lng: lng }}
            title="Click to zoom"
            onClick={props.onToggleOpen.bind(this, i)}
          >
            {props.infoWindows[i].isOpen && (
              <InfoWindow onCloseClick={props.onToggleOpen.bind(i)}>
                <div className="p-3 d-flex flex-column">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th>Ad Title</th>
                        <td>{place.name}</td>
                      </tr>
                      <tr>
                        <th>Price</th>
                        <td>{place.price} &#8381;</td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      {place.img.map((img, index) => {
                        return index == 0 ? (
                          <li
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className="active"
                          ></li>
                        ) : (
                          <li
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                          ></li>
                        );
                      })}
                    </ol>
                    <div className="carousel-inner">
                      {place.img.map((img, index) => {
                        return index == 0 ? (
                          <div className="carousel-item active">
                            <img src={img} className="d-block w-100" />
                          </div>
                        ) : (
                          <div className="carousel-item">
                            <img src={img} className="d-block w-100" />
                          </div>
                        );
                      })}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
  </GoogleMap>
));

export default MapSearch;
