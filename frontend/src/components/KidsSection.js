import React, { useState } from 'react';
import { VStack, Heading, Input, Button, Text, Box, Image, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

function KidsSection() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Query string cannot be empty');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/search`, {
        query,
        userGroup: 'kids'
      });
      console.log('Search response:', response.data);
      setResults(response.data.results);
      setError(''); // Clear any previous error
      console.log('Updated results state:', response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
      if (error.response && error.response.status === 400) {
        setError('Query string cannot be empty');
      } else {
        setError('An error occurred while fetching search results');
      }
    }
  };

  return (
    <VStack p={4} bg="blue.50" minH="100vh">
      <Heading color="blue.700" fontFamily="Comic Sans MS, cursive">Kids Section</Heading>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.05 }}
      >
        <Input
          placeholder="Search for educational content"
          size="md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          bg="white"
          borderColor="blue.300"
          _hover={{ borderColor: 'blue.500' }}
          _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
        />
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Button colorScheme="teal" size="md" onClick={handleSearch} leftIcon={<FaSearch />}>
          Search
        </Button>
      </motion.div>
      {error && (
        <Text color="red.500" mt={4}>
          {error}
        </Text>
      )}
      {results.length > 0 && (
        <VStack spacing={4} mt={4}>
          {results.map((result, index) => (
            <VStack key={index} p={4} borderWidth={1} borderRadius="md" w="100%" bg="white">
              <Heading size="md" color="blue.700">{result.title}</Heading>
              <Text color="blue.600">{result.description}</Text>
            </VStack>
          ))}
        </VStack>
      )}
      <Box mt={8}>
        <Image src="https://via.placeholder.com/150" alt="Kid-friendly graphic" />
      </Box>
      <SimpleGrid columns={2} spacing={4} mt={8}>
        <Box p={4} bg="yellow.100" borderRadius="md">
          <Heading size="sm" color="yellow.800">Popular Search 1</Heading>
          <Text color="yellow.700">Description for popular search 1</Text>
        </Box>
        <Box p={4} bg="green.100" borderRadius="md">
          <Heading size="sm" color="green.800">Popular Search 2</Heading>
          <Text color="green.700">Description for popular search 2</Text>
        </Box>
        <Box p={4} bg="pink.100" borderRadius="md">
          <Heading size="sm" color="pink.800">Popular Search 3</Heading>
          <Text color="pink.700">Description for popular search 3</Text>
        </Box>
        <Box p={4} bg="purple.100" borderRadius="md">
          <Heading size="sm" color="purple.800">Popular Search 4</Heading>
          <Text color="purple.700">Description for popular search 4</Text>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}

export default KidsSection;
