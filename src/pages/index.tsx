// assets
import RightArrow from "@/assets/static/rightArrow";
// images
import GreenBox from "@/public/images/greenbox.webp";
import Img2 from "@/public/images/img2.webp";
import Olien from "@/public/images/olien.webp";
import Fixing from "@/public/images/fixing.png";
import Rolling from "@/public/images/rolling.png";
import Overlaying from "@/public/images/overlaying.png";
import Hardwax from "@/public/images/hardwax.png";
import Pressing from "@/public/images/pressing.png";
import Binding from "@/public/images/binding.png";
import PVC from "@/public/images/pvs.png";

// components
import AccordianInfoSection from "@/components/Common/accordianinfosec";
import ServiceForm from "@/components/Common/serviceform";
import SliderComponent from "@/components/Common/slider";
import Layout from "@/components/Layout/layout";
// icons
import "@heroicons/react";
// mui
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
// next
import Image from "next/image";
import { ReactElement } from "react";

export default function Home() {
  return (
    <Box>
      <Grid container spacing={8}>
        <Grid item md={12} lg={6} xs={12}>
          <Box
            style={{ padding: "80px 0 0 0" }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { md: "center", lg: "flex-end" },
            }}
          >
            <Typography variant="h2" sx={{ py: 2, px: { lg: 0, xs: 2 } }}>
              Green Team
            </Typography>
            <Typography variant="h3" sx={{ pb: 2, px: { lg: 0, xs: 2 } }}>
              De nieuwe manier van vloeren
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: { lg: "right", md: "center" },
                pb: 3,
                pl: 2,
                pr: { lg: 0, xs: 2 },
                lineHeight: "1.3",
              }}
            >
              Wij hebben een grote passie voor vloeren in combinatie met
              duurzaamheid. Van origine zijn wij houtbewerkers en dit heeft zich
              uiteindelijk doorvertaald in de renovatie van vloeren. Het leveren
              van kwaliteit, enthousiasme voor ons vak en bovenal het
              overtreffen van verwachtingen is wat de cultuur en visie van Green
              Team het beste omschrijf
            </Typography>
            <Box
              sx={{
                margin: { lg: "0", xs: "0 10px" },
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Button variant="contained" startIcon={<RightArrow />}>
                Meer over Green Team
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={12} lg={6} xs={12}>
          <Box sx={{ marginBottom: 5 }}>
            <Box style={{ padding: "80px 0" }}>
              <Box
                sx={{
                  position: "relative",
                  display: { lg: "block", xs: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={GreenBox}
                  alt=""
                  style={{
                    width: "350px",
                    height: "300px",
                    borderRadius: "20px",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "15%",
                    left: { lg: "40px", xs: "50%" },
                    transform: {
                      lg: "translateX(0px)",
                      xs: "translateX(-50%)",
                    },
                    backgroundColor: "#E7EBF0",
                    width: { lg: "450px", xs: "90%" },
                    height: "auto",
                    borderRadius: "20px",
                  }}
                >
                  <Box sx={{ py: 4, px: { lg: 5, xs: 2 } }}>
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
                          display: { lg: "flex", sm: "block" },
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
                              m: 1,
                              width: { lg: "25ch", xs: "90%" },
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
                          display: { lg: "flex", sm: "block" },
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h4" sx={{ pb: { lg: 0, xs: 1 } }}>
                          Behandeling
                        </Typography>
                        <Box
                          component="form"
                          sx={{
                            "& > :not(style)": {
                              m: 1,
                              width: { lg: "25ch", xs: "90%" },
                            },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField placeholder="Kies de soort behandeling" />
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: { lg: "flex", sm: "block" },
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h4" sx={{ pb: { lg: 0, xs: 1 } }}>
                          Totaal bedrag
                        </Typography>
                        <Box
                          component="form"
                          sx={{
                            "& > :not(style)": {
                              m: 1,
                              width: { lg: "25ch", xs: "90%" },
                            },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField placeholder="0,00 Incl. BTW" />
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<RightArrow />}
                      >
                        Naar de volgende stap
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item md={12} lg={6} xs={12}>
          <Box
            sx={{
              padding: "80px 0 0 0",
              marginX: "20px",
              marginTop: { lg: 0, xs: "100px" },
            }}
          >
            <Box>
              <Image
                src={Img2}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={12} lg={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              padding: "80px 20px",
              alignItems: "center",
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="span"
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    marginRight: "8px",
                  }}
                />
                <Typography variant="h3">Advies op maat</Typography>
              </Box>
              <Typography variant="body2" sx={{ py: 2, lineHeight: 1.2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit, sed do eiusmod temporincididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam
                <br /> quis nostrud
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="span"
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    marginRight: "8px",
                  }}
                />
                <Typography variant="h3">Kwaliteit en veiligheid</Typography>
              </Box>
              <Typography variant="body2" sx={{ py: 2, lineHeight: 1.2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit, sed do eiusmod temporincididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam
                <br /> quis nostrud
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="span"
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    marginRight: "8px",
                  }}
                />
                <Typography variant="h3">Groen is doen</Typography>
              </Box>
              <Typography variant="body2" sx={{ py: 2, lineHeight: 1.2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit, sed do eiusmod temporincididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam
                <br /> quis nostrud
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <SliderComponent />
      <Box sx={{ mb: 5 }}>
        <SliderComponent reverseOrder />
      </Box>
      <AccordianInfoSection />
      <Grid container spacing={12}>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" sx={{ mx: { lg: 5, xs: 2 }, py: 2 }}>
            Onze diensten
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Olien}
              alt=""
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                px: 3,
                py: 1,
                position: "relative",
                border: "1px solid #3E7844",
                borderRadius: "20px",
                width: "270px",
                bottom: "60px",
              }}
            >
              <Typography variant="h3">Oliën</Typography>
              <RightArrow color="#3E7844" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Fixing}
              alt=""
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                px: 3,
                py: 1,
                position: "relative",
                border: "1px solid #3E7844",
                borderRadius: "20px",
                width: "270px",
                bottom: "60px",
              }}
            >
              <Typography variant="h3">Schuren</Typography>
              <RightArrow color="#3E7844" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Rolling}
              alt=""
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                px: 3,
                py: 1,
                position: "relative",
                border: "1px solid #3E7844",
                borderRadius: "20px",
                width: "270px",
                bottom: "60px",
              }}
            >
              <Typography variant="h3">Lakken</Typography>
              <RightArrow color="#3E7844" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Overlaying}
              alt=""
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                px: 3,
                py: 1,
                position: "relative",
                border: "1px solid #3E7844",
                borderRadius: "20px",
                width: "270px",
                bottom: "60px",
              }}
            >
              <Typography variant="h3">Laminaat leggen</Typography>
              <RightArrow color="#3E7844" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Hardwax}
              alt=""
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                px: 3,
                py: 1,
                position: "relative",
                border: "1px solid #3E7844",
                borderRadius: "20px",
                width: "270px",
                bottom: "60px",
              }}
            >
              <Typography variant="h3">Hardwax</Typography>
              <RightArrow color="#3E7844" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Pressing}
              alt=""
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                px: 3,
                py: 1,
                position: "relative",
                border: "1px solid #3E7844",
                borderRadius: "20px",
                width: "270px",
                bottom: "60px",
              }}
            >
              <Typography variant="h3">Parket leggen</Typography>
              <RightArrow color="#3E7844" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Binding}
              alt=""
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                px: 3,
                py: 1,
                position: "relative",
                border: "1px solid #3E7844",
                borderRadius: "20px",
                width: "270px",
                bottom: "60px",
              }}
            >
              <Typography variant="h3">Plinten + deklijsten</Typography>
              <RightArrow color="#3E7844" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={PVC}
              alt=""
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                px: 3,
                py: 1,
                position: "relative",
                border: "1px solid #3E7844",
                borderRadius: "20px",
                width: "270px",
                bottom: "60px",
              }}
            >
              <Typography variant="h3">PVC leggen</Typography>
              <RightArrow color="#3E7844" />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ServiceForm />
    </Box>
  );
}
Home.getLayout = (Page: ReactElement) => <Layout>{Page}</Layout>;
