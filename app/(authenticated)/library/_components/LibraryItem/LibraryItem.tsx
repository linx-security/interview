import { Card, CardBody, CardFooter, CardHeader, Text } from '@chakra-ui/react'
import { LibraryItemProps } from '../../constants'

export const LibraryItem = (props: LibraryItemProps) => {
  const { name, description, imgFile } = props
  return (
    <Card width="272px" height="197px" padding="1.25rem" as="li">
      <CardHeader padding="unset">
        <Text
          fontFamily="Inter"
          fontWeight="300"
          fontSize="20px"
          color="#272727"
          as="h2"
        >
          {name}
        </Text>
      </CardHeader>
      <CardBody padding="unset">
        <Text
          fontFamily="Inter"
          fontWeight="400"
          fontSize="14px"
          color="#6F6B6B"
        >
          {description}
        </Text>
      </CardBody>
      <CardFooter
        padding="unset"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80px"
      >
        <img src={`/assets/images/${imgFile}`} alt={name} height="auto" />
      </CardFooter>
    </Card>
  )
}
