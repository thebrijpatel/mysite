import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import './CardData.css';

const CardData = ({name, about, greeting, findMe}) => {
  return (
    <div className="CardData">
      <Card className="aboutMeCard" variant="outlined">
        <CardContent>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {greeting}
          </Typography>
          <Typography style={{fontWeight: 600}} variant="h5" component="h2" gutterBottom>
            I'm {name}
          </Typography>
          <Typography variant="h6" className="aboutContent" color="textSecondary" dangerouslySetInnerHTML={{__html: about}} />
        </CardContent>
      </Card>
    </div>
  )
}

export default CardData;
