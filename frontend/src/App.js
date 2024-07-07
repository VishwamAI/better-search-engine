import React from 'react';
import { ChakraProvider, Box, Heading, Text, VStack, HStack, Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import KidsSection from './components/KidsSection';
import EldersSection from './components/EldersSection';
import ResearchersSection from './components/ResearchersSection';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box p={4}>
          <HStack spacing={4}>
            <Button as={RouterLink} to="/kids" colorScheme="teal">Kids</Button>
            <Button as={RouterLink} to="/elders" colorScheme="teal">Elders</Button>
            <Button as={RouterLink} to="/researchers" colorScheme="teal">Researchers</Button>
          </HStack>
        </Box>
        <Routes>
          <Route path="/kids" element={<KidsSection />} />
          <Route path="/elders" element={<EldersSection />} />
          <Route path="/researchers" element={<ResearchersSection />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

function Home() {
  return (
    <VStack p={4}>
      <Heading>Welcome to the Better Search Engine</Heading>
      <Text>Select a section to get started.</Text>
    </VStack>
  );
}

export default App;
