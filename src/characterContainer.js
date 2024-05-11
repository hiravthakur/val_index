import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

//Creates a container for the characters from MUI
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 160,
  height: 250,
  padding: theme.spacing(3),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function CharDeployed({name, role, age, imageSrc}) {
    return (
        <DemoPaper square={false}>{name}
        <img src={imageSrc} style={{width: '140px', height: '180px'}}/>
        Age: {age} <p>
        Role: {role}
        </p>
        </DemoPaper>
    );
  }