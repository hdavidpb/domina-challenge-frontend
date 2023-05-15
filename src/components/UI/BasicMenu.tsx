import { Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { logOut } from "../../context/redux/features/auth/authSlice";

interface Props {
  anchorEl: any;
  open: boolean;
  handleClose: () => void;
}

export const BasicMenu = ({ anchorEl, handleClose, open }: Props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    handleClose();
    dispatch(logOut());
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
    </Menu>
  );
};
