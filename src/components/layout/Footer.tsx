import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      alignSelf="flex-end"
      // height={[120, 36]}
      justifyContent="center"
    >
      <Box textAlign="center">
        <Text>
          2020 -{" "}
          <Link href="https://github.com/fu4303" fontWeight="bold" isExternal>
            fu4303
          </Link>
        </Text>

        <Text fontSize="sm">Powered by https://api.publicapis.org/</Text>

      </Box>
    </Flex>
  );
};

export default Footer;
