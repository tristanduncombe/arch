import React, { ReactElement, FC, useState, useEffect } from "react";
import { Box, Card, CardHeader, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from 'axios';
import Message from "../components/exam/Message"
import { useNavigate } from "react-router-dom";

interface Course {
  course_id: number;
  course_name: string;
  course_title: string;
  course_description: string;
}

const Courses: FC<any> = (): ReactElement => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('//localhost:9000/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);


  function generateCourseCards() {
    const filteredCourses = courses.filter((course: Course) => {
      const courseName = course.course_name.toLowerCase();
      const courseTitle = course.course_title.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      return courseName.includes(searchTermLower) || courseTitle.includes(searchTermLower);
    });

    return filteredCourses.map((course: Course) => {
      return (
        <Grid item xs={6} key={course.course_id}>
          <Card
            elevation={3}
            sx={{ py: 2, px: 2, cursor: "pointer" }}
            onClick={() => navigate(`/Courses/${course.course_name}`)}
            id={`card-${course.course_id}`}
          >
            <Typography component="div" variant="h5">
              {course.course_name} - {course.course_title}
            </Typography>
            <Typography>
              {course.course_description}
            </Typography>
            
          </Card>
        </Grid>
      )
    });
  }
  
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#c2c2c2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{maxWidth: "lg", width: "100%", px: 3, py: 3}}>
        <Typography variant="h4">
          Course Lookup
        </Typography>
        <Typography variant="h6">
          I'm looking for answers for a past exam or assignment
        </Typography>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{ marginTop: 2 }}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Grid container spacing={2} sx={{ mt: 3 }}>
          {generateCourseCards()}
        </Grid>
        {/* <Message title={"test"} type={1} content={"test test test"} author={"test author"} imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"}></Message> */}
      </Paper>
    </Box>
  );
};

export default Courses;