
import { Box, Card, CardActionArea, CardContent, Paper, Typography } from '@mui/material';
import React from 'react';

const mockData = [
    {name: 'Tristan Duncombe', points: -200},
    {name: 'Lakshan Chandrasekara', points: 100},
    {name: 'Jackson Trenerry', points: 0},
    {name: 'Liv Ronda', points: 1000},
]

function Leaderboard() {
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
          <Paper elevation={3} sx={{maxWidth: "lg", width: "100%", px: 3, py: 3}}>
              {mockData.sort((a,b) => {
                  if (a.points > b.points) return -1;
                  if (a.points < b.points) return 1;
                  return 0;
              }).map((d) => (
                  <Card sx={{ width: '100%', height: '50px', mb: 1 }}>
                      <CardActionArea
                          onClick={() => alert('omg')}
                      >
                        <CardContent>
                            {`${d.name} | ${d.points}pts`}
                        </CardContent>
                      </CardActionArea>
                    </Card>
              ))}
          </Paper>
        </Box>
    )
}
export default Leaderboard;