// mui
import { Box, Card, Typography, useMediaQuery } from "@mui/material";
// slick carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// components
import Stars from "./stars";

interface SliderComponentProps {
  reverseOrder?: boolean;
}

const SliderComponent = ({ reverseOrder = false }: SliderComponentProps) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    draggable: false,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    rows: 1,
    cssEase: "linear",
  };
  const revSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    draggable: false,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    rows: 1,
    rtl: true,
    cssEase: "linear",
  };
  return (
    <Box>
      {reverseOrder ? (
        <>
          <Slider {...settings}>
            <Card
              sx={{ backgroundColor: "#e7f4e4", padding: "10px 12px", mb: 5 }}
            >
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "1.2" }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
            <Card
              sx={{ backgroundColor: "#e7f4e4", padding: "10px 12px", mb: 5 }}
            >
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "1.2" }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
            <Card sx={{ backgroundColor: "#e7f4e4", padding: "10px 12px" }}>
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "1.2" }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
            <Card sx={{ backgroundColor: "#e7f4e4", padding: "10px 12px" }}>
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "1.2" }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
          </Slider>
        </>
      ) : (
        <>
          <Slider {...revSettings}>
            <Card
              sx={{ backgroundColor: "#e7f4e4", padding: "10px 12px", mb: 5 }}
            >
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "1.2" }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
            <Card
              sx={{ backgroundColor: "#e7f4e4", padding: "10px 12px", mb: 5 }}
            >
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "1.2" }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
            <Card sx={{ backgroundColor: "#e7f4e4", padding: "10px 12px" }}>
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "1.2" }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
            <Card sx={{ backgroundColor: "#e7f4e4", padding: "10px 12px" }}>
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "1.2" }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
          </Slider>
        </>
      )}
    </Box>
  );
};

export default SliderComponent;
