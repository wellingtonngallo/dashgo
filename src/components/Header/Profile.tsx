import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Gallo</Text>
        <Text color="gray.300" fontSize="small">wellinton.gallo77@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Wellington Gallo" />
    </Flex>
  )
}