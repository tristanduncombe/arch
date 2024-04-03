import React, { ReactElement, FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Card, CardHeader, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import axios from 'axios';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CourseParams extends Record<string, string> {
  id: string;
}

interface AssessmentItem {
  assessment_id: number;
  assessment_title: string;
  assessment_description: string;
  assessment_semester: string;
  assessment_year: number;
}


const Courses: FC<any> = (): ReactElement => {
  const { id } = useParams<CourseParams>();
  const [response, setResponse] = useState<any>(null);
  const [assessmentItem, setAssessmentItems] = useState<AssessmentItem[]>([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [courseId, setCourseId] = useState<number>(null);

  useEffect(() => {
    let isMounted = true;
    axios.get(`//localhost:9000/course/id/${id}`).then(response => {
      setCourseId(response.data.course_id);
    });
    return () => {
      isMounted = false;
    };
  }, [id]);

  useEffect(() => {
    let isMounted = true;
    if (courseId !== null) {
      Promise.all([
        axios.get(`//localhost:9000/course/${courseId}`),
        axios.get(`//localhost:9000/course/${courseId}/assessments`)
      ]).then(([courseResponse, assessmentResponse]) => {
        if (isMounted) {
          setResponse(courseResponse.data);
          setAssessmentItems(assessmentResponse.data);
        }
      }).catch((error) => {
        setError(error);
      });
    }
    return () => {
      isMounted = false;
    };
  }, [courseId]);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedSemester, setExpandedSemester] = useState<string | null>(null);


  function generateAssessmentCards() {
    if (!assessmentItem) return (<div></div>);

    // Group assessmentItems by semester
    const semesters = assessmentItem.reduce((acc: { [key: string]: any[] }, item: any) => {
      const semester = `${item.assessment_semester}, ${item.assessment_year}`;
      if (!acc[semester]) {
        acc[semester] = [];
      }
      acc[semester].push(item);
      return acc;
    }, {});

    // Map over semesters and render a Paper for each semester
  return Object.entries(semesters).map(([semester, items]) => (
    <Grid item xs={12} key={semester} sx={{ mt: 2 }}>
      <Paper elevation={3} sx={{ py: 2, px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography component="div" variant="h5">
            Semester {semester}
          </Typography>
          <IconButton
            onClick={() => setExpandedSemester(expandedSemester === semester ? null : semester)}
            sx={{ p: 1 }}
          >
            {expandedSemester === semester ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        {expandedSemester === semester && (
          <Box sx={{ mt: 2 }}>
            {items.map((item: any) => (
              <Grid item xs={6} key={item.assessment_id}>
                <Card
                  elevation={hoveredCard === item.assessment_id ? 6 : 3}
                  sx={{ p: 2, m: 2 }}
                  onClick={() => navigate(`/Courses/${response.course_name}/AssessmentItem/${item.assessment_id}`)}
                  onMouseOver={() => setHoveredCard(item.assessment_id)}
                  onMouseOut={() => setHoveredCard(null)}
                >
                  <Typography component="div" variant="h6">
                    {item.assessment_title}
                  </Typography>
                  <Typography>
                    {item.assessment_description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Box>
        )}
      </Paper>
    </Grid>
  ));
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
      <Grid>
        <Grid item xs={12}>
          <Paper sx={{ maxWidth: "lg", width: "100%", px: 3, py: 3 }}>
            <Typography component="div" variant="h5">
              {response?.course_name || "Course Name"} - {response?.course_title || "Course Title"}
            </Typography>
            <Typography>
              {response?.course_description || "Course Description"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid>
            {generateAssessmentCards()}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Courses;