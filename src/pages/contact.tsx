import { ReactElement } from "react";
// components
import Layout from "@/components/Layout/layout";
// mui
import { Typography } from "@mui/material";

export default function Contact() {
  return <Typography variant="h3">Contact</Typography>;
}
Contact.getLayout = (Page: ReactElement) => <Layout>{Page}</Layout>;
