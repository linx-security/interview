export interface LibraryItemProps {
  name: string
  description: string
  imgFile: string
}

export const FIGMA_ITEM: LibraryItemProps = {
  name: 'Figma',
  description: 'See your designs',
  imgFile: 'figma.png'
}

export const LIBRARY_ITEMS: LibraryItemProps[] = [
  FIGMA_ITEM,
  { name: 'GitHub', description: 'Read your code', imgFile: 'github.png' },
  {
    name: 'Atlassian',
    description: 'Rule your tickets',
    imgFile: 'atlassian.png'
  },
  FIGMA_ITEM,
  FIGMA_ITEM,
  FIGMA_ITEM,
  FIGMA_ITEM
]
