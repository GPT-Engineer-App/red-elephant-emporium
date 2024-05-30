import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="white" p={4} boxShadow="md">
      <Flex justify="space-between">
        <Link as={RouterLink} to="/rally" color="red.500" fontWeight="bold">
          Rally
        </Link>
        <Link as={RouterLink} to="/daily" color="blue.500" fontWeight="bold">
          Daily
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
