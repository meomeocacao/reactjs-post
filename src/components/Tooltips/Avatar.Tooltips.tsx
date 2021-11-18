import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Image } from "react-bootstrap";
import { Box } from "@mui/system";

interface Props {
  src: string;
  user: string;
  title?: string;
  desc?: string;
}
const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} placement="bottom-end" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function CustomizedTooltips(props: Props) {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Image src={props.src} width="70" height="50" />
            <Typography color="inherit">{props.user}</Typography>
            <Typography noWrap>{props.desc}</Typography>
          </React.Fragment>
        }
      >
        <Box>
          <Image src={props.src} width="150px" height="150px" roundedCircle />

          <p>{props.user}</p>
        </Box>
      </HtmlTooltip>
    </div>
  );
}
