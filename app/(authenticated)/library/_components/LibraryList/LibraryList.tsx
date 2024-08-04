import { Box } from '@chakra-ui/react'
import { useColorModeValue as mode } from '@chakra-ui/react'
import { LIBRARY_ITEMS } from '../../constants'
import { LibraryItem } from '../LibraryItem/LibraryItem'
export const LibraryList = () => {
  const renderLibraryList = LIBRARY_ITEMS.map((item, i) => {
    return <LibraryItem {...item} key={i} />
  })
  return (
    <Box
      w="full"
      h="full"
      rounded="lg"
      border="3px dashed currentColor"
      color={mode('gray.200', 'gray.700')}
      flexWrap="wrap"
      display="flex"
      gap="20px"
      as="ul"
      overflowX="auto"
    >
      {renderLibraryList}
    </Box>
  )
}
