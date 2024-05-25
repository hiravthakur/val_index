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

export default function MapDeployed({name, location, deatchmatch, layout}) {
    return (
        <BasicModal>
            <DemoPaper square={false}>
                <span align="right">
                </span>
                <p>
                <strong>{name}</strong>
                </p>
            <img src={layout} alt='' style={{width: '140px', height: '200px'}}/>
            <p>
            Location: {location} </p>
            Deathmatch placeholder
            </DemoPaper>
        </BasicModal>
    );
  }