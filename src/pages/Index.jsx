import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaChartLine, FaShieldAlt, FaCloudUploadAlt } from "react-icons/fa";

const features = [
  {
    title: "Analytics",
    text: "Powerful analytics to track your business growth.",
    icon: FaChartLine,
  },
  {
    title: "Security",
    text: "State-of-the-art security features to protect your data.",
    icon: FaShieldAlt,
  },
  {
    title: "Cloud Storage",
    text: "Scalable cloud storage for all your business needs.",
    icon: FaCloudUploadAlt,
  },
];

const Index = () => {
  return (
    <Box>
      <Box bg="purple.600" color="white" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex={1} mr={{ md: 8 }}>
              <Heading as="h1" size="2xl" mb={4}>
                Supercharge Your Business
              </Heading>
              <Text fontSize="xl" mb={8}>
                Our SaaS platform provides all the tools you need to take your business to the next level.
              </Text>
              <Button size="lg" colorScheme="white" bg="white" color="purple.600">
                Get Started
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDB8fHx8MTcxMDk1OTAzOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Business growth" />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Key Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {features.map((feature, index) => (
              <Box key={index} bg="gray.50" p={8} rounded="md" textAlign="center">
                <Icon as={feature.icon} w={12} h={12} color="purple.600" mb={4} />
                <Heading as="h3" size="lg" mb={4}>
                  {feature.title}
                </Heading>
                <Text>{feature.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg="purple.600" color="white" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Get Started?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Sign up now and take your business to new heights!
          </Text>
          <Button size="lg" colorScheme="white" bg="white" color="purple.600">
            Sign Up
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
