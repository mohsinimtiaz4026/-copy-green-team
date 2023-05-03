import logo from "@/public/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";
// mext
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
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

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ py: 1 }}>
          <Image src={logo} alt="logo" height={80} />
        </Box>
        <List>
          {headerMenuItems.map((item, index) => {
            return (
              <ListItem
                sx={{
                  width: "auto",
                  color: router.pathname === item.link ? "#3E7844" : "black",
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
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="primary" />
        {/* <MenuIcon color="white" /> */}
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
