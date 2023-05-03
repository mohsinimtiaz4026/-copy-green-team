// react
import { ReactElement } from "react";
// mui
import { Box, Grid, Typography } from "@mui/material";
// components
import InfoDividerUnderline from "@/components/Common/infodividerunderline";
import InfoSec from "@/components/Common/infosec";
import Layout from "@/components/Layout/layout";
// images
import AccordianInfoSection from "@/components/Common/accordianinfosec";
import ImgSection from "@/components/Common/imgsection";
import ServiceForm from "@/components/Common/serviceform";
import Binding from "@/public/images/binding.png";
import Fixing from "@/public/images/fixing.png";
import Hardwax from "@/public/images/hardwax.png";
import Overlaying from "@/public/images/overlaying.png";
import Pressing from "@/public/images/pressing.png";
import PVC from "@/public/images/pvs.png";
import Rolling from "@/public/images/rolling.png";
import Wixing from "@/public/images/waxing.png";

export default function Diensten() {
  return (
    <Box>
      <Box sx={{ padding: "80px 0 0 0" }}>
        <Grid container>
          <Grid item md={12} xs={12}>
            <Typography variant="h3" sx={{ pl: 5, pb: 2 }}>
              Diensten
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <InfoDividerUnderline
        title={"Olien"}
        para={`
                Onze missie is om zo duurzaam en groen mogelijk te 
                werk te gaan. Bewust bezig zijn met een betere wereld, 
                dat vinden we belangrijk. De planeet gaat elke dag een 
                stapje achteruit, daarom is het belangrijker dan ooit om 
                samen bij te dragen aan een beter leefklimaat.
                `}
        paraInfo={`
                Laten we zuinig zijn op al het mooie hout dat moeder 
                natuur ons heeft gegeven. stapje achteruit, daarom is 
                het belangrijker dan ooit om samen bij te dragen aan een 
                beter leefklimaat. Laten we zuinig zijn op al het mooie 
                hout dat moeder natuur ons heeft gegeven.
                `}
        imgSrc={Wixing}
        orders
        reducer
      />
      <InfoDividerUnderline
        title={"Schuren"}
        para={`
                Onze missie is om zo duurzaam en groen mogelijk te 
                werk te gaan. Bewust bezig zijn met een betere wereld, 
                dat vinden we belangrijk. De planeet gaat elke dag een 
                stapje achteruit, daarom is het belangrijker dan ooit om 
                samen bij te dragen aan een beter leefklimaat.
                `}
        paraInfo={`
                Laten we zuinig zijn op al het mooie hout dat moeder 
                natuur ons heeft gegeven. stapje achteruit, daarom is 
                het belangrijker dan ooit om samen bij te dragen aan een 
                beter leefklimaat. Laten we zuinig zijn op al het mooie 
                hout dat moeder natuur ons heeft gegeven.
                `}
        imgSrc={Fixing}
      />
      <ServiceForm />
      <InfoDividerUnderline
        title={"Lakken"}
        para={`
                Onze missie is om zo duurzaam en groen mogelijk te 
                werk te gaan. Bewust bezig zijn met een betere wereld, 
                dat vinden we belangrijk. De planeet gaat elke dag een 
                stapje achteruit, daarom is het belangrijker dan ooit om 
                samen bij te dragen aan een beter leefklimaat.
                `}
        paraInfo={`
                Laten we zuinig zijn op al het mooie hout dat moeder 
                natuur ons heeft gegeven. stapje achteruit, daarom is 
                het belangrijker dan ooit om samen bij te dragen aan een 
                beter leefklimaat. Laten we zuinig zijn op al het mooie 
                hout dat moeder natuur ons heeft gegeven.
                `}
        imgSrc={Rolling}
        orders
      />
      <InfoDividerUnderline
        title={"Hardwax"}
        para={`
                Onze missie is om zo duurzaam en groen mogelijk te 
                werk te gaan. Bewust bezig zijn met een betere wereld, 
                dat vinden we belangrijk. De planeet gaat elke dag een 
                stapje achteruit, daarom is het belangrijker dan ooit om 
                samen bij te dragen aan een beter leefklimaat.
                `}
        paraInfo={`
                Laten we zuinig zijn op al het mooie hout dat moeder 
                natuur ons heeft gegeven. stapje achteruit, daarom is 
                het belangrijker dan ooit om samen bij te dragen aan een 
                beter leefklimaat. Laten we zuinig zijn op al het mooie 
                hout dat moeder natuur ons heeft gegeven.
                `}
        imgSrc={Hardwax}
      />
      <ImgSection />
      <InfoDividerUnderline
        title={"Laminaat legegen"}
        para={`
                Onze missie is om zo duurzaam en groen mogelijk te 
                werk te gaan. Bewust bezig zijn met een betere wereld, 
                dat vinden we belangrijk. De planeet gaat elke dag een 
                stapje achteruit, daarom is het belangrijker dan ooit om 
                samen bij te dragen aan een beter leefklimaat.
                `}
        paraInfo={`
                Laten we zuinig zijn op al het mooie hout dat moeder 
                natuur ons heeft gegeven. stapje achteruit, daarom is 
                het belangrijker dan ooit om samen bij te dragen aan een 
                beter leefklimaat. Laten we zuinig zijn op al het mooie 
                hout dat moeder natuur ons heeft gegeven.
                `}
        imgSrc={Overlaying}
      />
      <InfoDividerUnderline
        title={"Parket leggen"}
        para={`
                Onze missie is om zo duurzaam en groen mogelijk te 
                werk te gaan. Bewust bezig zijn met een betere wereld, 
                dat vinden we belangrijk. De planeet gaat elke dag een 
                stapje achteruit, daarom is het belangrijker dan ooit om 
                samen bij te dragen aan een beter leefklimaat.
                `}
        paraInfo={`
                Laten we zuinig zijn op al het mooie hout dat moeder 
                natuur ons heeft gegeven. stapje achteruit, daarom is 
                het belangrijker dan ooit om samen bij te dragen aan een 
                beter leefklimaat. Laten we zuinig zijn op al het mooie 
                hout dat moeder natuur ons heeft gegeven.
                `}
        imgSrc={Pressing}
        orders
      />
      <AccordianInfoSection />
      <InfoDividerUnderline
        title={"PVC leggen"}
        para={`
                Onze missie is om zo duurzaam en groen mogelijk te 
                werk te gaan. Bewust bezig zijn met een betere wereld, 
                dat vinden we belangrijk. De planeet gaat elke dag een 
                stapje achteruit, daarom is het belangrijker dan ooit om 
                samen bij te dragen aan een beter leefklimaat.
                `}
        paraInfo={`
                Laten we zuinig zijn op al het mooie hout dat moeder 
                natuur ons heeft gegeven. stapje achteruit, daarom is 
                het belangrijker dan ooit om samen bij te dragen aan een 
                beter leefklimaat. Laten we zuinig zijn op al het mooie 
                hout dat moeder natuur ons heeft gegeven.
                `}
        imgSrc={PVC}
        orders
      />
      <InfoDividerUnderline
        title={"Plinten + deklijsten"}
        para={`
                Onze missie is om zo duurzaam en groen mogelijk te 
                werk te gaan. Bewust bezig zijn met een betere wereld, 
                dat vinden we belangrijk. De planeet gaat elke dag een 
                stapje achteruit, daarom is het belangrijker dan ooit om 
                samen bij te dragen aan een beter leefklimaat.
                `}
        paraInfo={`
                Laten we zuinig zijn op al het mooie hout dat moeder 
                natuur ons heeft gegeven. stapje achteruit, daarom is 
                het belangrijker dan ooit om samen bij te dragen aan een 
                beter leefklimaat. Laten we zuinig zijn op al het mooie 
                hout dat moeder natuur ons heeft gegeven.
                `}
        imgSrc={Binding}
      />
      <InfoSec />
    </Box>
  );
}
Diensten.getLayout = (Page: ReactElement) => <Layout>{Page}</Layout>;
