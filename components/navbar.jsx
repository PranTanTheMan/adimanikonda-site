import React from "react";
import { Flex, Box, Text, Button, Divider, Image } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <>
      <Box
        w="70%"
        h="100px"
        bgColor="layout.100"
        borderRadius="23px"
        border="1px solid rgba(255, 255, 255, 0.15)"
        margin="auto"
        marginTop="30px"
      >
        <Flex
          p="10px 30px"
          h={"100%"}
          alignItems="center"
          justifyContent={""}
          w="100%"
        >
          <Image src="/BWlogo.png" alt="logo" w="64px" h="64px" />
          <Text>Logo</Text>
          <Divider mx="20px" h="30" orientation="vertical" />
        </Flex>
      </Box>
    </>
  );
}
