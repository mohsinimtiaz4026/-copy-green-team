import Image from "next/image";
// mui
import { Box, Grid } from "@mui/material";
// images
import Floor from "@/public/images/floor.png";
import Sec1 from "@/public/images/sec1.png";
import Sec2 from "@/public/images/sec2.png";

const ImgSection = () => {
  return (
    <Grid container spacing={12}>
      <Grid item md={4} xs={12}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={Sec1}
            alt=""
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "20px",
              margin: "0 20px",
            }}
          />
        </Box>
      </Grid>
      <Grid item md={4} xs={12}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={Sec2}
            alt=""
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "20px",
              margin: "0 20px",
            }}
          />
        </Box>
      </Grid>
      <Grid item md={4} xs={12}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={Floor}
            alt=""
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "20px",
              margin: "0 20px",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default ImgSection;
