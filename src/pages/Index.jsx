import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Breaking News: Market Hits Record Highs",
    description: "The stock market reached new heights today as investors reacted to positive economic data...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Global Politics: New Trade Agreements",
    description: "Countries around the world are negotiating new trade agreements to boost economic growth...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Technology: Innovations in AI",
    description: "Artificial Intelligence continues to evolve, with new applications being developed in various industries...",
    image: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Editor's Pick: The Future of Renewable Energy",
  "Trending: Advances in Medical Technology",
  "Opinion: The Impact of Social Media on Society",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#fff1e5">
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/technology">Technology</Link>
        </HStack>
      </Flex>

      <Flex mt={4} direction={{ base: "column", md: "row" }}>
        <Box flex="3">
          <Heading size="md" mb={4}>Latest News</Heading>
          <VStack spacing={4}>
            {articles.map((article, index) => (
              <Box key={index} p={4} shadow="md" borderWidth="1px">
                <Flex>
                  <Image src={article.image} alt={article.title} boxSize="150px" objectFit="cover" mr={4} />
                  <Box>
                    <Heading size="md">{article.title}</Heading>
                    <Text mt={2}>{article.description}</Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading size="md" mb={4}>Trending</Heading>
          <VStack spacing={2} align="start">
            {trendingArticles.map((title, index) => (
              <Link key={index} href="#" color="blue.500">{title}</Link>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;