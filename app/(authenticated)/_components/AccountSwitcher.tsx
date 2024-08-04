import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import AccountSwitcherButton from './AccountSwitcherButton'
import { useSearchParams } from 'next/navigation'

const AccountSwitcher = () => {
  const searchParams = useSearchParams()

  const email = searchParams.get('email')
  const emailToRender = email || 'Chakra UI'

  return (
    <Menu>
      <AccountSwitcherButton email={emailToRender} />
      <MenuList
        shadow="lg"
        py="4"
        color={useColorModeValue('gray.600', 'gray.200')}
        px="3"
      >
        <Text fontWeight="medium" mb="2">
          {email || 'joe.biden@chakra-ui.com'}
        </Text>
        <MenuOptionGroup defaultValue="chakra-ui">
          <MenuItemOption value="chakra-ui" fontWeight="semibold" rounded="md">
            {emailToRender}
          </MenuItemOption>
          <MenuItemOption value="careerlyft" fontWeight="semibold" rounded="md">
            CareerLyft
          </MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuItem rounded="md">Workspace settings</MenuItem>
        <MenuItem rounded="md">Add an account</MenuItem>
        <MenuDivider />
        <MenuItem rounded="md">Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default AccountSwitcher
