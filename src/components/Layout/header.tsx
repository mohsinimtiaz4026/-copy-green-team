// images
import logo from "@/public/images/logo.png";
// mui
import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";
// components
import Dot from "../Common/dot";
import Stars from "../Common/stars";
import DrawerComp from "./drawer";

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const headerMenuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Over ons",
      link: "/overons",
    },
    {
      title: "Diensten",
      link: "/diensten",
    },
    {
      title: "Zakelijk",
      link: "/zakelijk",
    },
    {
      title: "Veelgestelde vragen",
      link: "/vragen",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  useLayoutEffect(() => {
    let mainHeader = document.getElementById("mainHeader");
    const fixedHeader = () => {
      if (window.pageYOffset > 20) {
        mainHeader?.classList.add("fixedTop");
      } else {
        mainHeader?.classList.remove("fixedTop");
      }
    };
    window.addEventListener("scroll", fixedHeader);
    return () => {
      window.removeEventListener("scroll", fixedHeader);
    };
  }, []);
  return (
    <React.Fragment>
      <AppBar
        sx={{
          backgroundColor: "white",
          position: "relative",
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#3e7844",
            paddingX: 2,
            paddingY: 1,
            position: "relative",
            display: { lg: "flex", sm: "block" },
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Dot />
            <Typography fontFamily={"Rubik"} variant="body1" sx={{ pl: 1 }}>
              Advies op maat door vakkundige medewerkers
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              fontFamily={"Rubik"}
              variant="body1"
              sx={{ pr: 1, textDecoration: "underline" }}
            >
              Klantenservice
            </Typography>
            <Dot color="#90EE90" blink />
          </Box>
        </Box>
        <Toolbar
          id="mainHeader"
          sx={{
            paddingY: "1%",
            paddingX: "2%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Image src={logo} height={80} alt="logo" />
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <List sx={{ display: "flex" }}>
                {headerMenuItems.map((item, index) => {
                  return (
                    <ListItem
                      sx={{
                        width: "auto",
                        color:
                          router.pathname === item.link ? "#3E7844" : "black",
                        fontFamily: "Rubik",
                        fontSize: "18px",
                        "&:hover": {
                          color: "#3E7844",
                        },
                      }}
                      key={index}
                    >
                      <Link
                        href={item.link}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {item.title}
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
              {/* <Tabs
                sx={{ marginLeft: 'auto', color: '#000' }}  
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs> */}
              <Button
                sx={{
                  padding: "0.3% 1%",
                  background: "#3e7844",
                  borderRadius: "50px",
                  color: "#fff",
                  fontFamily: "Rubik",
                }}
              >
                Offerte aanvragen
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
