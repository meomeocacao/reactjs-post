import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { PropTypes } from "@mui/material";
export const WarningBox = (
  color: PropTypes.Color,
  type: string,
  title: string
) => {
  return (
    <Box sx={{ color: "error" }}>
      {/* <Typography color={color}> Password is valid</Typography> */}
      <CheckCircleOutlineIcon color="success" />
    </Box>
  );
};
