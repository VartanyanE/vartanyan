import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo1 from "../../images/snacktrax.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 140,
  },
});

export default function Card1(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={logo1}
          title="PlantHood"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Emanuil Vartanyan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Graduate of the UCLA Extension Full Stack Web Developer Bootcamp
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
