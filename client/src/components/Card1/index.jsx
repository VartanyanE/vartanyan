import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo1 from "../../images/snacktrax.png"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard1(props) {
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
            TrackSnax
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Planthood is an app for plant lovers. Get plant info from our API.  Organize your plants and give access to a plant sitter for when you are out of town.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}