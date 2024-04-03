
import { Box, Card, CardActionArea, CardContent, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const mockData = [
    {name: 'Tristan Duncombe', points: -200},
    {name: 'Lakshan Chandrasekara', points: 100},
    {name: 'Jackson Trenerry', points: 0},
    {name: 'Liv Ronda', points: 1000},
    {name: 'Random Names', points: 345},
    {name: 'Sana Mccormick', points: 54},
    {name: 'Yasir Mayo', points: 601},
    {name: 'Valerie Copeland', points: 736},
    {name: 'Conrad Ramirez', points: 276},
    {name: 'Talia Carr', points: 777},
    {name: 'Lilian Rowe', points: 503},
    {name: 'Harrison Collier', points: 594},
    {name: 'Niall Pitts', points: 879},
    {name: 'Harris Key', points: 654},
]

function Leaderboard() {
    return (
      <Paper elevation={3} sx={{maxWidth: "lg", width: "100%", height: '100%', px: 3, py: 3}}>
          {mockData.sort((a,b) => {
              if (a.points > b.points) return -1;
              if (a.points < b.points) return 1;
              return 0;
          }).map((d) => (
              <Card sx={{ width: '100%', height: '50px', mb: 1 }}>
                  <CardActionArea>
                    <CardContent>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography>
                                {d.name}
                            </Typography>
                            <Typography>
                                {d.points}pts
                            </Typography>
                        </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
          ))}
      </Paper>
    )
}
export default Leaderboard;