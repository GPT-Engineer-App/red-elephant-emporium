import { Container, VStack, HStack, Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8} bgImage="url('https://images.unsplash.com/photo-1583341592469-c4b5ae4c1d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXB1YmxpY2FuJTIwZmxhZ3xlbnwwfHx8fDE3MTcwNzUyMzV8MA&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" bgPos="center" color="white">
      <VStack spacing={8} align="center" justify="center" minH="100vh" bg="rgba(0, 0, 0, 0.5)" p={8} borderRadius="md">
        <Heading as="h1" size="4xl" fontWeight="bold" textAlign="center" color="yellow.400">
          Rally Daily
        </Heading>
        <HStack spacing={8}>
          <Link to="/rally">
            <Button colorScheme="red" size="lg">
              Rally
            </Button>
          </Link>
          <Link to="/daily">
            <Button colorScheme="blue" size="lg">
              Daily
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
