import React, { useState } from 'react';
import { VStack, Heading, Input, Button, Text } from '@chakra-ui/react';
import axios from 'axios';

function ResearchersSection() {
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
        userGroup: 'researchers'
      });
      setResults(response.data.results);
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Error fetching search results:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <VStack p={4}>
      <Heading>Researchers Section</Heading>
      <Input
        placeholder="Search for academic content"
        size="md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button colorScheme="teal" size="md" onClick={handleSearch}>
        Search
      </Button>
      {error && (
        <Text color="red.500" mt={4}>
          {error}
        </Text>
      )}
      {results.length > 0 && (
        <VStack spacing={4} mt={4}>
          {results.map((result, index) => (
            <VStack key={index} p={4} borderWidth={1} borderRadius="md" w="100%">
              <Heading size="md">{result.title}</Heading>
              <Text>{result.description}</Text>
            </VStack>
          ))}
        </VStack>
      )}
    </VStack>
  );
}

export default ResearchersSection;
