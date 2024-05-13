import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 8
};

export default function BasicModal({children, info, org}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
        <div onClick={handleOpen}>
            { children }
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Character In-Game Description
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {info}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Hails from: </strong> {org}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}