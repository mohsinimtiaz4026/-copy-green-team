import { ReactElement } from "react";
// components
import Layout from "@/components/Layout/layout";
// mui
import { Typography } from "@mui/material";

export default function Vragen() {
  return <Typography variant="h3">Vragen</Typography>;
}
Vragen.getLayout = (Page: ReactElement) => <Layout>{Page}</Layout>;
