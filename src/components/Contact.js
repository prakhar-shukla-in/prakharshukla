import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typed from "react-typed";
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleOnClick = () => {
    window.open(`mailto:prakhars144@gmail.com?subject=${subject}&body=${message}`)
  }
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  }
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            <Typed
              strings={[
                "Contact me...",
              ]}
              typeSpeed={40}
            />

          </Typography>
          <Grid item style={{ marginBottom: 10 }}>
            <InputField
              fullWidth={true}
              value={subject}
              label="Subject"
              variant="outlined"
              sx={{ marginBottom: 5 }}
              inputProps={{ className: classes.input }}
              onChange={(e) => { handleSubjectChange(e) }}
            />
          </Grid>
          <Grid item>
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              multiline
              value={message}
              rows={4}
              inputProps={{ className: classes.input }}
              onChange={handleMessageChange}
            />
          </Grid>
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            onClick={handleOnClick}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
