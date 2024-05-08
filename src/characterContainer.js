import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

//Creates a container for the characters from MUI
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function CharDeployed({name, role, age, imageSrc}) {
    return (
        <DemoPaper square={false}>{name}
        <img src={imageSrc} />
        Age: {age}
        Role: {role}
        </DemoPaper>
    );
  }