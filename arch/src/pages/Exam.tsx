import React, { ReactElement, FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Card, CardHeader, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import axios from 'axios';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AssessmentParams extends Record<string, string> {
  id: string;
  assessmentId: string;
}



const Courses: FC<any> = (): ReactElement => {
  const { id, assessmentId } = useParams<AssessmentParams>();
  const [response, setResponse] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    axios.get(`//localhost:9000/exam/${assessmentId}`).then(response => {
      setQuestions(response.data);
    });
    return () => {
      isMounted = false;
    };
  }, [id]);


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
              {response?.assessmentItem?.assessment_title || "Assessment Title"} - {response?.assessmentItem?.assessment_semester || "Assessment Semester"}, {response?.assessmentItem?.assessment_year || "Assessment Year"}
            </Typography>
            <Typography>
            {response?.assessmentItem?.assessment_description || "Assessment Materials"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Courses;