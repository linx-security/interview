'use client'

import {
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import { Logo } from '../../_components/Logo'
import {
  GitHubIcon,
  GoogleIcon,
  TwitterIcon
} from './_components/ProvidersIcons'
import { useRouter } from 'next/navigation'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const onEmailLogin: FormEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault()
    router.push(`/?email=${encodeURIComponent(email)}`)
  }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    const { target } = ev
    setEmail(target.value)
  }

  return (
    <Container maxW="md" py={{ base: '12', md: '24' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'sm' }}>
              Log in to your account
            </Heading>
            <Text color="fg.muted">Start making your dreams come true</Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="4" as="form" onSubmit={onEmailLogin}>
            <Input
              placeholder="Enter your email"
              onChange={handleInputChange}
              required
              type="email"
            />
            <Button type="submit">Continue with email</Button>
          </Stack>
          <HStack>
            <Divider />
            <Text textStyle="sm" color="fg.muted">
              OR
            </Text>
            <Divider />
          </HStack>
          <Stack spacing="3">
            <Button variant="secondary" leftIcon={<GoogleIcon />}>
              Continue with Google
            </Button>
            <Button variant="secondary" leftIcon={<TwitterIcon />}>
              Continue with Twitter
            </Button>
            <Button variant="secondary" leftIcon={<GitHubIcon />}>
              Continue with GitHub
            </Button>
          </Stack>
        </Stack>
        <HStack spacing="1" justify="center">
          <Text textStyle="sm" color="fg.muted">
            Having issues? <Link href="#">Contact us</Link>
          </Text>
        </HStack>
      </Stack>
    </Container>
  )
}

export default LoginPage
