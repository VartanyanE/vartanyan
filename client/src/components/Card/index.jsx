import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../../images/planthood.png"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Planthood
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Planthood is an app for plant lovers. Get plant info from our API.  Organize your plants and give access to a plant sitter for when you are out of town.
          </Typography>
        </CardContent>
     
     
    </Card>
  );
}
