import React, { useRef } from "react";
import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";

import { BasicMenu } from "./BasicMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../context/redux/store";

export const Navbar = () => {
  const { userName } = useSelector((store: RootState) => store.auth);

  const anchorE = useRef<null | HTMLButtonElement>(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLButtonElement>(
    null
  );
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <IconButton ref={anchorE} onClick={handleClick}>
          <Box
            width="40px"
            height="40px"
            borderRadius="50%"
            bgcolor="lightblue"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography fontWeight={500} variant="h6" color="white">
              {userName.charAt(0).toUpperCase()}
            </Typography>
          </Box>
        </IconButton>

        <BasicMenu anchorEl={anchorEl} handleClose={handleClose} open={open} />
      </Toolbar>
    </AppBar>
  );
};
