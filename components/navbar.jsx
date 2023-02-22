import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <>
      <Box
        w={"70%"}
        h={"100px"}
        bgColor={"rgba(0, 0, 0, 0.6)"}
        borderRadius={"23px"}
        border={"1px solid rgba(255, 255, 255, 0.15)"}
        margin={"auto"}
        marginTop={"30px"}
      >
        <Button>hello</Button>
      </Box>
    </>
  );
}
