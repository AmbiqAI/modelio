import React from 'react';
import { Button, Typography } from '@mui/material';

import { styled } from '@mui/material-pigment-css';

const TestThemeTypes = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  // Make background color red
  backgroundColor: theme.palette.error.main,
}));

const ExampleComponent: React.FC = () => {
    return (
        <TestThemeTypes >
            <Typography variant="h4" component="h1" gutterBottom>
                My Example Component
            </Typography>
            <Button variant="contained" color="primary">
                Click Me!
            </Button>
        </TestThemeTypes>
    );
};

export default ExampleComponent;
