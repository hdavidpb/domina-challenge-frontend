import { styled } from "@mui/material/styles";

import Switch, { SwitchProps } from "@mui/material/Switch";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 47,
  height: 28,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    color: "#70787C",
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(22px)",

      ".MuiSwitch-thumb": {
        color: "#fff",
      },
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "#33cf4d",
    },

    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    marginTop: "1px",
    boxSizing: "border-box",
    width: 21,
    height: 21,
  },
  "& .MuiSwitch-track": {
    border: "solid 2px #70787C",
    borderRadius: 26 / 2,
    backgroundColor: "#D7DFE2",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export const CustomCheckboxForm = ({ ...rest }: SwitchProps) => {
  return <IOSSwitch {...rest} />;
};
