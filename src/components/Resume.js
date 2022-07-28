import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.4rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  chip: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: 1,
    },
  },
  chip1: {
    color: "tan",
    background: "#595959",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h3" align="left" className={classes.heading}>
        Work Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Aug 2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            className={classes.subHeading}
            align="left"
          >
            Systems Software Engineer
          </Typography>
          <Typography align="left" variant="h5" className={classes.body1}>
            NVIDIA - Bangalore, Pune
          </Typography>
          <Typography align="left" variant="caption" className={classes.body1}>
            Aug 2020 - Present
          </Typography>
          <br />
          <br />
          <Typography align="left" variant="body1" className={classes.body1}>
            VMS - Video Management System
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            Developed multiple features and APIs of VMS from POC, MVP to alpha release.
          </Typography>
          <div className={classes.chip}>
            <Chip label="C++" variant="default" className={classes.chip1} />
            <Chip label="Python" variant="default" className={classes.chip1} />
            <Chip label="Kubernetes" variant="default" className={classes.chip1} />
            <Chip label="Docker" variant="default" className={classes.chip1} />
            <Chip label="Helm" variant="default" className={classes.chip1} />
            <Chip label="WebRTC" variant="default" className={classes.chip1} />
            <Chip label="HLS" variant="default" className={classes.chip1} />
            <Chip label="React JS" variant="default" className={classes.chip1} />
            <Chip label="Javascript" variant="default" className={classes.chip1} />
          </div>
          <br />
          <Typography align="left" variant="body1" className={classes.body1}>
            Tokkio
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            Developed UI and APIs for Tokkio, a smart AI-powered self-service kiosk
          </Typography>
          <div className={classes.chip}>
            <Chip label="Python" variant="default" className={classes.chip1} />
            <Chip label="Kubernetes" variant="default" className={classes.chip1} />
            <Chip label="Docker" variant="default" className={classes.chip1} />
            <Chip label="Websockets" variant="default" className={classes.chip1} />
            <Chip label="WebRTC" variant="default" className={classes.chip1} />
            <Chip label="React JS" variant="default" className={classes.chip1} />
            <Chip label="Javascript" variant="default" className={classes.chip1} />
          </div>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Jan 2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Software Intern
          </Typography>
          <Typography variant="h6" align="left" className={classes.body1}>
            NVIDIA - Bangalore
          </Typography>
          <Typography align="left" variant="caption" className={classes.body1}>
            Jan 2020 - Jun 2020
          </Typography>
          <br />
          <br />
          <Typography align="left" variant="body1" className={classes.body1}>
            Rule engine
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            Developed POC rules engine or hybrid reasoning system for Nvidia System Mangement
          </Typography>
          <div className={classes.chip}>
            <Chip label="Go" variant="default" className={classes.chip1} />
            <Chip label="Compiler Design" variant="default" className={classes.chip1} />
            <Chip label="Context free grammar" variant="default" className={classes.chip1} />
          </div>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Aug 2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Teaching assistant
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            BITS Pilani KK Birla Goa Campus
          </Typography>
          <Typography align="left" variant="caption" className={classes.body1}>
            Aug 2018 - Jan 2020
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            Conducted computer programming labs and doubt clearing sessions
          </Typography>
          <div className={classes.chip}>
            <Chip label="C++" variant="default" className={classes.chip1} />
            <Chip label="OOPs" variant="default" className={classes.chip1} />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
