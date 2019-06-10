import React, { useState } from "react";
import ReactDOM from "react-dom";

import Navigation from "./Navigation";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function App() {
  const [courses, setCourses] = useState([
    {
      title: "Chicken Adobo",
      description: "Aaron",
      url: "https://codingthesmartway.com/courses/react-redux-ssr/",
      courseImage:
        "https://cdn-images-1.medium.com/max/1600/1*PoyfVxn_JhQXehQjZ-jiXw.png",
      upvote_count: 0,
      downvote_count: 0
    },
    {
      title: "Tuna Paella",
      description: "Lisa",
      url: "https://codingthesmartway.com/courses/react-complete-guide/",
      courseImage:
        "https://cdn-images-1.medium.com/max/1600/1*PoyfVxn_JhQXehQjZ-jiXw.png",
      upvote_count: 0,
      downvote_count: 0
    },
    {
      title: "Rellenong Bangus",
      description: "Jisoo",
      url: "https://codingthesmartway.com/courses/react-complete/",
      courseImage:
        "https://cdn-images-1.medium.com/max/1600/1*PoyfVxn_JhQXehQjZ-jiXw.png",
      upvote_count: 0,
      downvote_count: 0
    },
    {
      title: "Pork Sisig",
      description: "Chaeyoung",
      url: "https://codingthesmartway.com/courses/react-complete/",
      courseImage:
        "https://cdn-images-1.medium.com/max/1600/1*PoyfVxn_JhQXehQjZ-jiXw.png",
      upvote_count: 0,
      downvote_count: 0
    },
    {
      title: "Caldereta",
      description: "Jennie",
      url: "https://codingthesmartway.com/courses/react-complete/",
      courseImage:
        "https://cdn-images-1.medium.com/max/1600/1*PoyfVxn_JhQXehQjZ-jiXw.png",
      upvote_count: 0,
      downvote_count: 0
    }
  ]);
  const upvoteCourse = index => {
    const newCourse = [...courses];
    newCourse[index].upvote_count++;
    setCourses(newCourse);
  };
  const downvoteCourse = index => {
    const newCourse = [...courses];
    newCourse[index].downvote_count++;
    setCourses(newCourse);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  function AddItem() {
    const classes = useStyles();

    return (
      <Card style={{ maxWidth: "500px", marginBottom: "10px" }}>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image="https://2rt9loawzcmbvlze40mhj9n0-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/Creative_BlockParty_V1-760x428.jpg"
          title="test"
        />
        {/*         <CardContent>
          <Typography variant="h5" component="h2" gutterBottom="1">
            Potluck!
          </Typography>
          <Typography component="p" color="textSecondary">
            test desc
          </Typography>
        </CardContent> */}
        <CardActions>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="item"
              label="To bring:"
              name="Item"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="My name is:"
              id="name"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit!
            </Button>
          </form>
        </CardActions>
      </Card>
    );
  }
  function Course({ course, index, upvoteCourse, downvoteCourse }) {
    return (
      <div>
        <Card
          style={{
            minHeight: "150px",
            maxWidth: "500px",
            marginBottom: "10px"
          }}
        >
          {/*           <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={course.courseImage}
            title={course.title}
          /> */}
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom="1">
              {course.title}
            </Typography>
            <Typography component="p" color="textSecondary">
              {course.description}
            </Typography>
            {/* <br /> */}
            {/*             <Typography color="textSecondary">
              {course.upvote_count}
              <Icon color="primary" onClick={() => upvoteCourse(index)}>
                thumb_up_alt
              </Icon>
              &nbsp;&nbsp;
              <span>{course.downvote_count}</span>
              <Icon color="primary" onClick={() => downvoteCourse(index)}>
                thumb_down_alt
              </Icon>
            </Typography> */}
          </CardContent>
          {/*           <CardActions>
            <Button size="small" href={course.url} target="_blank">
              Go To Course
            </Button>
          </CardActions> */}
        </Card>
      </div>
    );
  }

  return (
    <div className="app">
      <div>
        <Navigation />

        <Grid container spacing={4} style={{ padding: 24 }}>
          <Grid item xs={12} sm={12} lg={3} xl={3}>
            <AddItem />
          </Grid>
          <Grid item xs={12} sm={12} lg={9} xl={9}>
            <Grid container spacing={2} style={{ padding: 24 }}>
              {courses.map((course, index) => (
                <Grid item xs={12} sm={12} lg={2} xl={2}>
                  <Course
                    key={index}
                    index={index}
                    course={course}
                    upvoteCourse={upvoteCourse}
                    downvoteCourse={downvoteCourse}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
