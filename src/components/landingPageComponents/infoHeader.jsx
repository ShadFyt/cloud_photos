import {
    Heading,
    Box,
    Text,
} from "@chakra-ui/react"

function InfoHeader() {
    
    return (
        <Box d={"flex"} as={"header"} h={"100px"} w={"full"} justifyContent={"center"} mt={8}>
            <Heading as={"h4"} fontSize={"3xl"} fontFamily={"body"} fontWeight={"medium"} alignSelf={"center"}>What makes us special</Heading>
            <Text></Text>
        </Box>
    )
}

export default InfoHeader