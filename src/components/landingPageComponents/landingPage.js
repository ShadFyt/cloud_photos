import { Box } from "@chakra-ui/react";

import MainInfo from "./accordionInfo";
import InfoHeader from "./infoHeader";
import MainHeader from "../layout/mainHeader";
import PricingTable from "./pricingTable";

function LandingPage() {
  return (
    <Box mx={"auto"} h="100vh" w={"99%"}>
      <MainHeader />
      <InfoHeader />
      <MainInfo />
      <PricingTable />
    </Box>
  );
}

export default LandingPage;
