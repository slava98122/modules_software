import React from 'react';
import { YMaps, Map, GeolocationControl,FullscreenControl, ZoomControl  } from 'react-yandex-maps'

const Map1 = () => {
  return (
    <YMaps>
  <Map
    defaultState={{
      center: [55.018803, 82.933952],
      zoom: 9,
      controls: [],
    }}
  >
     <FullscreenControl />
    {/*<GeolocationControl options={{ float: 'left' }} />*/}
    <ZoomControl options={{ float: 'left' }} />
  </Map>
</YMaps>
  );
};

export default Map1;