import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <Box
      as="div"
      height="64px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#FF6889"
      color="white"
      shadow="lg"
    >
      <Flex
        width={["90%", "90%", "1400px"]}
        justify="space-between"
        alignItems="center"
      >
        <Box>
          <Link href="/">
            <Text as="h2" fontSize={26} fontWeight="bold">
              CareNow
            </Text>
          </Link>
        </Box>
        <Link href={"/treatments"} style={{ fontWeight: "bolder" }}>
          Treatments
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
