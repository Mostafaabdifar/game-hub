import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image src="src/assets/react.svg" boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
