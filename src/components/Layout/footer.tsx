import logo from "@/public/images/logo.svg";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Stars from "../Common/stars";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#3e7844",
        padding: "10px",
        // position: 'fixed',
        // bottom: '0',
        width: "100%",
      }}
    >
      <Grid container paddingY={"3%"} spacing={4}>
        <Grid item lg={4} md={6} xs={12}>
          <Box sx={{ marginBottom: "2%" }}>
            <Image
              src={logo}
              alt="logo"
              style={{
                width: "50%",
                height: "auto",
              }}
            />
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography
              sx={{ textDecoration: "none" }}
              color={"#fff"}
              href={"tel:+31 854019345"}
              component={"a"}
              variant="h5"
              fontFamily={"Rubik"}
            >
              +31 854019345
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              Rivium Boulevard 2
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              2909 LK, Capelle aan den Ijssel
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
                Home
              </Link>
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              <Link
                href="/overons"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Over ons
              </Link>
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              <Link
                href="/diensten"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Diensten
              </Link>
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              <Link
                href="/zakelijk"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Zakelijk
              </Link>
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              <Link
                href="/vragen"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Veelgestelde vragen
              </Link>
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              <Link
                href="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              Schuren
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              Oliën
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              Lakken
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              Hardwax
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              Parket reparatie
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "2%" }}>
            <Typography color={"#fff"} variant="h5" fontFamily={"Rubik"}>
              Reinigen
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          color: "#fff",
          height: "auto",
          backgroundColor: "#3e7844",
          paddingX: 2,
          position: "relative",
          display: { lg: "flex", xs: "block" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography fontFamily={"Rubik"} variant="body1">
          <Stars />
          <Stars />
          <Stars />
          <Stars />
          <Stars />
          Trustpilot
          <Typography
            fontFamily={"Rubik"}
            sx={{
              fontSize: "10px",
              fontWeight: "400",
              display: "inline-flex",
            }}
          >
            &nbsp;&nbsp;245+ Revieuws
          </Typography>
        </Typography>
        <Typography fontFamily={"Rubik"} variant="body1">
          © 2023 Green Team
        </Typography>
        <Typography fontFamily={"Rubik"} variant="body1">
          Privacyverklaring
        </Typography>
        <Typography fontFamily={"Rubik"} variant="body1">
          Algemene voorwaarden Green Team
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
