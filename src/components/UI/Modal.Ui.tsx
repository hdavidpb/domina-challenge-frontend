import { Modal, Box } from "@mui/material";
import "./style.css";

interface Props {
  children: JSX.Element | JSX.Element[];
  openModal: boolean;
  onClose: () => void;
}

export const ModalUi = ({ children, openModal, onClose }: Props) => {
  return (
    <Modal open={openModal} onClose={onClose}>
      <Box className="modal-contaienr">{children}</Box>
    </Modal>
  );
};
