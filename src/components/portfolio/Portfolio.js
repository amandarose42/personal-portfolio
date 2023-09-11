import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid } from '@mui/material';
import { info } from '../../assets/info/Info';

export default function Portfolio() {
  return (
    <Box>
    <Grid container display={'flex'} justifyContent={'center'} paddingLeft={'125px'} paddingRight={'125px'}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              description={project.description}
              source={project.source}
              title={project.title}
              noButtons={project.noButtons}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
