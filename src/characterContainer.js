import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import BasicModal from './displayModal';
//Creates a container for the characters from MUI
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 170,
  height: 340,
  padding: theme.spacing(3),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function CharDeployed({name, role, realn, imageSrc, desc}) {
    return (
        <DemoPaper square={false}>
            <span align="right">
             <BasicModal info={desc}></BasicModal>
             </span>
             <p>
            <strong>{name}</strong>
            </p>
        <img src={imageSrc} style={{width: '140px', height: '180px'}}/>
        <p>
        Real Name: {realn} </p>
        Role: {role}
        </DemoPaper>
    );
  }