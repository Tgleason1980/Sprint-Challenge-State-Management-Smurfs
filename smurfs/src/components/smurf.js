import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      width: 275,
      margin: "20px",
      backgroundColor: "#00b9ef",
      color: "white"
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
      color: "#e52103"
    },
    deleteButton: {
        color: "#e52103",
        border: "2px solid #e52103",
        borderRadius: "10px"
    }
  });
  
const Smurf = (props) => {
    console.log(props)
    const classes = useStyles();


    console.log(props.smurf.id)
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {props.smurf.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Age:  {props.smurf.age}
        </Typography>
        <Typography variant="body2" component="p">
        Height: {props.smurf.height}
        </Typography>
      </CardContent>
      <button className={classes.deleteButton} onClick = {() => props.removeSmurf(props.smurf.id)}>Delete Me</button>
      <CardActions>
      
      </CardActions>
    </Card>
  );
}

export default Smurf;