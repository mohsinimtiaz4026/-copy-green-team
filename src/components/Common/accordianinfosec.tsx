// mui
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
// icons
import RightArrow from "@/assets/static/rightArrow";
// images
import ImgCall from "@/public/images/imgcall.webp";
// react
import Image from "next/image";

const AccordianInfoSection = () => {
  const AccordianTitle = [
    {
      title: "Meest gesteld",
    },
    {
      title: "Vloeren schuren",
    },
    {
      title: "Behandelingen",
    },
    {
      title: "Kosten",
    },
    {
      title: "Onze werkwijze en service",
    },
    {
      title: "Pvc vloeren",
    },
  ];
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            margin: { lg: "50px 40px", xs: "50px 20px" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" sx={{ py: 2 }}>
            Veel gestelde vragen
          </Typography>
          {AccordianTitle.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: 0,
                border: "1px solid #3E7844",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <RightArrow
                    color="#3E7844"
                    sx={{
                      transform: "rotate(-90deg)",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            margin: "50px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              backgroundColor: "#E7EBF0",
              borderRadius: "20px",
              px: 3,
              py: 2,
            }}
          >
            Liever telefonisch contact?
          </Typography>
          <Box sx={{ position: "relative" }}>
            <Image
              src={ImgCall}
              alt=""
              style={{
                width: "100%",
                height: isMobile ? "300px" : "400px",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="h3"
              sx={{
                backgroundColor: "#3E7844",
                borderRadius: "20px",
                px: 3,
                py: 2,
                color: "#fff",
                position: "absolute",
                top: "0px",
                left: "0px",
              }}
            >
              Bel +31 854019345
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AccordianInfoSection;
