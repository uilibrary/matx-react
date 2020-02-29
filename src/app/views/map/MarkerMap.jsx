import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import { Card } from "@material-ui/core";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div className="h-full" />,
    containerElement: <div className="h-400" />,
    mapElement: <div className="h-full" />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker
      isMarkerShown={false}
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onMarkerClick}
    >
      <InfoBox options={{ closeBoxURL: ``, enableEventPropagation: true }}>
        <Card className="p-4">
          <p className="whitespace-pre m-0">Hello World !!!</p>
        </Card>
      </InfoBox>
    </Marker>
  </GoogleMap>
));

class MarkerMap extends React.PureComponent {
  timer;

  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer);
  }

  delayedShowMarker = () => {
    this.timer = setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default MarkerMap;
