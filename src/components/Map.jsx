import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  // ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        // scale: 1100,
        scale: 2000,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        // fill="#D6D6DA"
        // fill="darkblue"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {/* <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          //   stroke: "#FF5533",
          stroke: "white",
          //   strokeWidth: 3,
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Paris"}
        </text>
      </Annotation> */}
      <Annotation
        subject={[6.48, 50.63]} /* istedigimiz yerin koordinatlari */
        dx={+60}
        dy={-60}
        connectorProps={{
          // stroke: "#FF5533",
          stroke: "white",
          // strokeWidth: 3,
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        {/* <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53"> */}
        <text
          x="+80"
          y="-5"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="white"
        >
          {"Heimbach"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
