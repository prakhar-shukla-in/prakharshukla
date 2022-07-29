import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const geoUrl = "/features.json";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#233",
  },
  heading: {
    color: "tan",
    padding: "3rem 0",
    textTransform: "uppercase",
    top: 70,
    position: "absolute"
  },
}));

const markers = [
  { markerOffset: 0, name: "Himachal", coordinates: [77.1892, 32.2432] },
  { markerOffset: 0, name: "Khardungla", coordinates: [77.6047, 34.2787] },
  { markerOffset: 0, name: "Mumbai", coordinates: [72.8777, 19.0760] },
  { markerOffset: 0, name: "Mumbai", coordinates: [72.931442, 18.963253] },
  { markerOffset: 0, name: "Pune", coordinates: [73.8567, 18.5204] },
  { markerOffset: 0, name: "Delhi", coordinates: [77.1025, 28.7041] },
  { markerOffset: 0, name: "Nubra valley", coordinates: [77.5673, 34.6863] },
  { markerOffset: 0, name: "UP", coordinates: [78.5685, 25.4484] },
  { markerOffset: 0, name: "Goa", coordinates: [74.1240, 15.2993] },
  { markerOffset: 0, name: "Hyderabad", coordinates: [78.4983, 17.4399] },
  { markerOffset: 0, name: "Devas", coordinates: [76.0534, 22.9676] },
  { markerOffset: 0, name: "Rajasthan", coordinates: [73.7125, 24.5854] },
  { markerOffset: 0, name: "Rohtang pass", coordinates: [77.2466, 32.3716] },
  { markerOffset: 0, name: "Shimla", coordinates: [77.1734, 31.1048] },
  { markerOffset: 0, name: "Maheshwar", coordinates: [75.5830, 22.1773] },
  { markerOffset: 0, name: "Rishikesh", coordinates: [78.2676, 30.0869] },
];

const MapChart = () => {
  const classes = useStyles();
  const [height, setHeight] = useState(0);
  const [width_, setWidth] = useState(0);
  const responsiveHandler = () => {
    const appBarHeight = document.getElementById("nav-bar-resp").offsetHeight;
    setWidth(window.innerWidth);
    setHeight(appBarHeight);
  }

  useEffect(() => {
    responsiveHandler();
    window.addEventListener("resize", () => responsiveHandler());
    return function () {
      window.removeEventListener("resize", () => setHeight());
    }
  }, [])

  return (
    <Box component="div" className={classes.mainContainer} style={{
      height: `calc(100vh - ${height}px)`, display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "stretch",
      paddingLeft: 10,
      paddingRight: 10
    }}>
      <Typography variant="h3" align="left" className={classes.heading} style={{ top: width_ < 600 ? 70 : 0, right: width_ < 600 ? "auto" : 5, padding: width_ < 600 ? "3rem 0" : 0 }}>
        <Typed
          strings={[
            "♪〜(￣▽￣〜)♪",
            "♪(〜￣▽￣)〜♪",
          ]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
      </Typography>
      <ComposableMap
        projectionConfig={{
          rotate: [0, 0, 0],
          scale: 147
        }}
      >
        <ZoomableGroup center={[80, 25]} zoom={5}>
          <Sphere stroke="#E4E5E6" strokeheight={0.5} />
          <Graticule stroke="#E4E5E6" strokeheight={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    stroke="tomato"
                    strokeheight={1}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                    key={geo.rsmKey}
                    geography={geo}
                    fill={"tomato"}
                  />
                );
              })
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={coordinates[0]} coordinates={coordinates}>
              <circle r={3} fill="tan" stroke="black" strokeheight={0.5} />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </Box>
  );
};

export default MapChart;
