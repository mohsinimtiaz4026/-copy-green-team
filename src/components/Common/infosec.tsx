import RightArrow from "@/assets/static/rightArrow";
import { Box, Button, Grid, Typography } from "@mui/material";

const InfoSec = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#dff2fa",
        py: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">
              Heeft ons verhaal je overtuigd?
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              startIcon={<RightArrow />}
              sx={{
                width: { lg: "50%", xs: "90%" },
              }}
            >
              Vraag offerte aan
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default InfoSec;
