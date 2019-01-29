import React, { useState, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';

import CustomInput from '../next-app/components/CustomInput';

const HomePage = ({ classes }) => {
  const [name, setName] = useState('');
  const [download, setDownload] = useState(false);

  return (
    <Grid container justify="center" alignItems="center">
      <Grid className={classes.cardContainer} item>
        <Card className={classes.card}>
          <CardHeader className={classes.cardHeader} title="License Generator" />
          <CardContent className={classes.cardContent}>
            <CustomInput id="name" label="Name" value={name} onChange={e => setName(e.target.value)} />
          </CardContent>
          <CardActions className={classes.cardAction}>
            {download ? (
              <Button variant="contained" color="primary">
                DOWNLOAD
              </Button>
            ) : (
              <Button variant="contained" color="primary">
                GENERATE
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

const styles = {
  cardContainer: {
    marginTop: 256
  },
  card: {
    maxWidth: 470
  },
  cardHeader: {
    textAlign: 'center',
    margin: '24px 0px'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 40px'
  },
  formControl: {
    width: 400,
    marginTop: 32
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 48
  },
  media: {
    height: 140
  }
};

export default withStyles(styles)(HomePage);
