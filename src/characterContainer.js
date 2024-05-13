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
  borderRadius: 20,
}));

export default function CharDeployed({name, role, realn, imageSrc, desc, home}) {
    return (
        <BasicModal info={desc} org={home}>
            <DemoPaper square={false}>
                <span align="right">
                </span>
                <p>
                <strong>{name}</strong>
                </p>
            <img src={imageSrc} style={{width: '140px', height: '180px'}}/>
            <p>
            Real Name: {realn} </p>
            Role: {role}
            </DemoPaper>
        </BasicModal>
    );
  }