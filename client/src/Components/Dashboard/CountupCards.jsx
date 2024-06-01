import { } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import CountUp from 'react-countup';

const CountupCards = () => {
  return (
    <Grid 
      container 
      spacing={3}
      marginRight={15} 
      sx={{ 
        marginTop: '30px', // Adjust as needed
        marginRight: '90px',
        justifyContent: 'flex-start'
      }}
    >
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Card sx={{ textAlign: 'center', height: '100%' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Problem Raised
            </Typography>
            <Typography variant="h2" color="text.secondary">
              <CountUp end={2174} duration={6} />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              This Month
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Card sx={{ textAlign: 'center', height: '100%' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Issues Resolved
            </Typography>
            <Typography variant="h2" color="text.secondary">
              <CountUp end={1745} duration={6} />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              This Month
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Card sx={{ textAlign: 'center', height: '100%' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Complaints Pending
            </Typography>
            <Typography variant="h2" color="text.secondary">
              <CountUp end={429} duration={6} />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              This Month
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CountupCards;
