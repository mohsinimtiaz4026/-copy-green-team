import { Box } from "@mui/material";

interface DotProps {
  color?: string;
  blink?: boolean;
}

const Dot = ({ color = "#fff", blink = false }: DotProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: "20px",
        backgroundColor: color,
        opacity: blink ? 0.25 : 1,
        animation: blink ? "blinkAnimate 1s infinite" : "",
        "@keyframes blinkAnimate": {
          "0%": {
            transform: "scale(1)",
            opacity: 0.25,
          },
          "25%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.25,
          },
          "75%": {
            opacity: 1,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 0.25,
          },
        },
      }}
      component={"span"}
    />
  );
};
export default Dot;
