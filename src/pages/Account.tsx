import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const mockData = [
    {date: '2024-04-03', product: 'Monster Zero Ultra', points: 20},
    {date: '2024-04-02', product: 'Monster Zero Ultra', points: 20},
    {date: '2024-04-01', product: 'Monster Zero Gold', points: 20},
    {date: '2024-04-01', product: 'Monster Ultra Rosa', points: 20},
    {date: '2024-03-29', product: 'Monster Pipeline Punch', points: 20},
];

function Account() {
    return (
        <Card>
            <CardContent>
                <Stack direction="row"  alignContent="center">
                    <Avatar sx={{ width: 56, height: 56, mr: 3 }}>J</Avatar>
                    <div>
                        <Typography>John Doe</Typography>
                        <Typography>john.doe@uq.edu.au</Typography>

                    </div>
                </Stack>
                <div style={{margin: '15px'}}/>
                <Card>
                    <CardHeader subheader="Point History"/>
                    <CardContent>
                        {mockData.map((d) => (
                            <Stack direction="row" justifyContent="space-between">
                                <span>{d.date}</span>
                                <Divider orientation="vertical"/>
                                <span>{d.product}</span>
                                <Divider orientation="vertical"/>
                                <span>{d.points}pts</span>
                            </Stack>)
                        )
                        }
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}
export default Account;