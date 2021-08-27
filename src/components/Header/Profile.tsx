import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gallo</Text>
          <Text color="gray.300" fontSize="small">wellinton.gallo77@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Wellington Gallo" />
    </Flex>
  )
}