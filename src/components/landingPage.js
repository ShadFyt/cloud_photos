import {
    Box,
    Divider,
} from "@chakra-ui/react"

import MainInfo from "./landingPageComponents/accordionInfo"
import InfoHeader from "./landingPageComponents/infoHeader"
import MainHeader from "./layout/mainHeader"

function LandingPage() {

    return (
        <Box mx={"auto"} h="100vh" w={"99%"}>
            <MainHeader />
            <InfoHeader />
            <Divider orientation={"horizontal"} />
            <MainInfo />

        </Box>
    )
}

export default LandingPage