import { useState } from "react";
import { useField } from "formik";
import { Box, IconButton, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Props {
  width?: "auto" | "100%";
  name: string;
  label: string;
  tooltip?: string;
  [key: string]: any;
}

export const TextFormField = ({ name, label, width, ...rest }: Props) => {
  const [field, meta] = useField({ name });
  const [showPass, setShowPass] = useState(false);
  return (
    <Box width={width ?? "100%"} position="relative">
      <TextField
        {...field}
        {...rest}
        label={label}
        helperText={meta.touched && meta.error !== undefined && meta.error}
        error={meta.touched && meta.error !== undefined}
        type={rest.type === "password" && showPass ? "text" : rest.type}
      />
      {rest.type === "password" && (
        <IconButton
          sx={{ position: "absolute", right: 2, top: 8 }}
          onClick={() => setShowPass((prev) => !prev)}
        >
          {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      )}
    </Box>
  );
};
