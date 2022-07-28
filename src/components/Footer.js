import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/prakhar-shukla-in/")
  }
  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} disabled />
      <BottomNavigationAction icon={<Instagram />} className={classes.root} disabled />
      <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} onClick={handleLinkedinClick} />
    </BottomNavigation>
  );
};
export default Footer;
