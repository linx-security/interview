'use client'
import { Box, Flex, useColorModeValue as mode } from '@chakra-ui/react'
import Sidebar from '../_components/Sidebar'
import { LibraryList } from './_components/LibraryList/LibraryList'

const App = () => {
  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Sidebar />
        <Box bg={mode('#fafafa', 'gray.800')} flex="1" p="6">
          <LibraryList />
        </Box>
      </Flex>
    </Box>
  )
}

export default App
