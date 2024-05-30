import { Container, VStack, HStack, Box, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaTshirt, FaHatCowboy, FaFlag, FaSign, FaMugHot } from "react-icons/fa";

const products = [
  { id: 1, name: "Republican T-Shirt", icon: FaTshirt, img: "https://images.unsplash.com/photo-1484516396415-4971641de8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXB1YmxpY2FuJTIwdC1zaGlydHxlbnwwfHx8fDE3MTcwNzUyMzR8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Republican Hat", icon: FaHatCowboy, img: "https://images.unsplash.com/photo-1603215317604-385cde394880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXB1YmxpY2FuJTIwaGF0fGVufDB8fHx8MTcxNzA3NTIzNHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Republican Flag", icon: FaFlag, img: "https://images.unsplash.com/photo-1583341592469-c4b5ae4c1d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXB1YmxpY2FuJTIwZmxhZ3xlbnwwfHx8fDE3MTcwNzUyMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Republican Yard Sign", icon: FaSign, img: "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXB1YmxpY2FuJTIweWFyZCUyMHNpZ258ZW58MHx8fHwxNzE3MDc1MjM1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 5, name: "Republican Mug", icon: FaMugHot, img: "https://images.unsplash.com/photo-1491720731493-223f97d92c21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXB1YmxpY2FuJTIwbXVnfGVufDB8fHx8MTcxNzA3NTIzNnww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const ProductCard = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} textAlign="center">
    <Image src={product.img} alt={product.name} boxSize="150px" objectFit="cover" mx="auto" mb={4} />
    <Heading as="h3" size="md" mb={2}>
      {product.name}
    </Heading>
    <IconButton aria-label={product.name} icon={<product.icon />} size="lg" mb={4} />
    <Button colorScheme="red" leftIcon={<FaShoppingCart />}>
      Add to Cart
    </Button>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={8}>
          Republican Party Merchandise
        </Heading>
        <HStack spacing={8} wrap="wrap" justify="center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
