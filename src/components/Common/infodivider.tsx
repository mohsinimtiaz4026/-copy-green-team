import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const InfoDivider = (props: any) => {
  return (
    <Box sx={{ padding: "80px 0" }}>
      <Grid container spacing={8} alignItems={"center"}>
        {props.orders ? (
          <>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    lg: "flex-start",
                    xs: "center",
                  },
                }}
              >
                <Image
                  src={props.imgSrc}
                  alt=""
                  style={{
                    width: "90%",
                    height: props.height,
                    borderRadius: "20px",
                    margin: "0 40px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  ml: { lg: 0, xs: 2 },
                }}
              >
                <Typography variant="h3" sx={{ py: 1 }}>
                  {props.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pr: "40px",
                    textAlign: "left",
                    lineHeight: "1.4",
                  }}
                >
                  {props.para}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pr: "40px",
                    textAlign: "left",
                    lineHeight: "1.4",
                    py: 2,
                  }}
                >
                  {props.paraInfo}
                </Typography>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  mr: { lg: 0, xs: 2 },
                }}
              >
                <Typography variant="h3" sx={{ py: 1 }}>
                  {props.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pl: "40px",
                    textAlign: "right",
                    lineHeight: "1.4",
                  }}
                >
                  {props.para}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { lg: "flex-start", xs: "center" },
                }}
              >
                <Image
                  src={props.imgSrc}
                  alt=""
                  style={{
                    width: "90%",
                    height: props.height,
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
export default InfoDivider;
