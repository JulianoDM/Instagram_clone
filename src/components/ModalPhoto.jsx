import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalPhoto(props) {
  
  const [open, setOpen] = React.useState(false);
  React.useEffect(() =>{
    setOpen(props.open);
  }, setOpen[props.open]) 
  const handleClose = () => {
    setOpen(false);
    setOpen(props.handleClose);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={props.imageUrl} alt="" style={{ width: '100%' }}/>
        </Box>
      </Modal>
    </div>
  );
}

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const ModalPhoto = (props) => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     setOpen(props.open);
//   }, [props.open]);

//   const handleClose = () => {
//     setOpen(false);
//     props.handleClose();
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <img src={props.imageUrl} alt="" style={{ width: '100%' }} />
//       </Box>
//     </Modal>
//   );
// };

// export default ModalPhoto;
