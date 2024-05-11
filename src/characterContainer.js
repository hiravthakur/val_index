import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

//Creates a container for the characters from MUI
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 170,
  height: 320,
  padding: theme.spacing(3),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function CharDeployed({name, role, realn, imageSrc}) {
    return (
        <DemoPaper square={false}> <p>
            <strong>{name}</strong>
            </p>
        <img src={imageSrc} style={{width: '140px', height: '180px'}}/>
        <p>
        Real Name: {realn} </p>
        Role: {role}
        </DemoPaper>
    );
  }