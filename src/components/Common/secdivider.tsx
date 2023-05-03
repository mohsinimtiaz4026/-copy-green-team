import { Box, Grid, Typography } from "@mui/material";
import Dot from "./dot";

const SecDivider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#dff2fa",
        padding: "40px 0",
      }}
    >
      <Grid container spacing={12} alignItems={"center"}>
        <Grid item md={4} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", px: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Dot color="#000" />
              <Typography variant="h3" sx={{ pl: 1 }}>
                Advies op maat
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ pt: 1 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam quis nostrud
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", px: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Dot color="#000" />
              <Typography variant="h3" sx={{ pl: 1 }}>
                Advies op maat
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ pt: 1 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam quis nostrud
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", px: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Dot color="#000" />
              <Typography variant="h3" sx={{ pl: 1 }}>
                Advies op maat
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ pt: 1 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam quis nostrud
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SecDivider;
