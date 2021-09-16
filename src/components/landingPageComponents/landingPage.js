import { Box } from "@chakra-ui/react";

import MainInfo from "./accordionInfo";
import InfoHeader from "./infoHeader";
import MainHeader from "../layout/mainHeader";
import PricingTable from "./pricingTable";
import Footer from "../layout/footer/footer";

function LandingPage() {
  return (
    <>
      <Box mx={"auto"} h="100vh" w={"100%"}>
        <MainHeader />
        <InfoHeader />
        <MainInfo />
        <PricingTable />
        <Footer />
      </Box>
    </>
  );
}

export default LandingPage;
