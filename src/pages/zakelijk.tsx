import { ReactElement } from "react";
// components
import Layout from "@/components/Layout/layout";
// mui
import { Typography } from "@mui/material";

export default function Zakelijk() {
  return <Typography variant="h3">Zakelijk</Typography>;
}
Zakelijk.getLayout = (Page: ReactElement) => <Layout>{Page}</Layout>;
