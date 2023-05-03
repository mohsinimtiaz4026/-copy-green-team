// mui
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
// images
import GreenBox from "@/public/images/greenbox.webp";
// react
import Image from "next/image";
// icons
import RightArrow from "@/assets/static/rightArrow";

const ServiceForm = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid container>
      <Grid item md={12} xs={12}>
        <Box
          sx={{
            backgroundImage: "url('../assets/pattern.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "600px",
            position: "relative",
            marginBottom: isMobile ? "500px" : "300px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "60px 0",
            }}
          >
            <Image
              src={GreenBox}
              alt=""
              style={{
                width: isMobile ? "95%" : "500px",
                height: "500px",
              }}
            />
            <Box
              sx={{
                width: { lg: "600px", xs: "90%" },
                height: "auto",
                backgroundColor: "#E7EBF0",
                borderRadius: "20px",
                position: "absolute",
                top: "125px",
                left: { lg: "35%", xs: "50%" },
                transform: { lg: "translateX(0px)", xs: "translateX(-50%)" },
                pb: 0,
                margin: 0,
              }}
            >
              <Box sx={{ py: 4, px: 5 }}>
                <Typography variant="h3" sx={{ pb: 2 }}>
                  Bereken hier de beste prijs
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    pb: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: { lg: "flex", xs: "block" },
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h4" sx={{ pb: { lg: 0, xs: 1 } }}>
                      Aantal m²
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          width: { lg: "25ch", xs: "100%" },
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField placeholder="Vul het aantal m² in" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { lg: "flex", xs: "block" },
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h4" sx={{ pb: { lg: 0, xs: 1 } }}>
                      Gewenste behandeling
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          width: { lg: "25ch", xs: "100%" },
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField placeholder="" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { lg: "flex", xs: "block" },
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h4" sx={{ pb: { lg: 0, xs: 1 } }}>
                      E-mailadres
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          width: { lg: "25ch", xs: "100%" },
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField placeholder="email@email.ni" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { lg: "flex", xs: "block" },
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h4" sx={{ pb: { lg: 0, xs: 1 } }}>
                      Voor en achternaam
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          width: { lg: "25ch", xs: "100%" },
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField placeholder="Piet Jan" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { lg: "flex", xs: "block" },
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h4" sx={{ pb: { lg: 0, xs: 1 } }}>
                      Straatnaam en huisnummer
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          width: { lg: "25ch", xs: "100%" },
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField placeholder="Lottestraat 24" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { lg: "flex", xs: "block" },
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h4" sx={{ pb: { lg: 0, xs: 1 } }}>
                      Postcode
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          width: { lg: "25ch", xs: "100%" },
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField placeholder="3368AK" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { lg: "flex", xs: "block" },
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h4" sx={{ pb: { lg: 0, xs: 1 } }}>
                      Woonplaats
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          width: { lg: "25ch", xs: "100%" },
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField placeholder="Rotterdam" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { lg: "flex", xs: "block" },
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h4" sx={{ pb: { lg: 0, xs: 1 } }}>
                      Telefoonnummer
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          width: { lg: "25ch", xs: "100%" },
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField placeholder="06-11677442" />
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<RightArrow />}
                  >
                    Vraag offerte aan
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default ServiceForm;
