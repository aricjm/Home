export interface DropdownExample {
  label: string;
  description: string;
  code: string;
}

export interface DropdownLibraryConfig {
  id: string;
  name: string;
  description: string;
  website: string;
  installCommand: string;
  importStatement: string;
  providerSetup?: string;
  examples: DropdownExample[];
}

export const DROPDOWN_LIBRARIES: DropdownLibraryConfig[] = [
  {
    id: "dropdown-shadcn",
    name: "shadcn/ui (Dropdown Menu)",
    description: "A robust dropdown menu component built with Radix UI primitives and styled with Tailwind CSS.",
    website: "https://ui.shadcn.com/docs/components/dropdown-menu",
    installCommand: "npx shadcn@latest add dropdown-menu",
    importStatement: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"`,
    examples: [
      { label: "Basic Dropdown", description: "Standard dropdown menu with basic text links", code: `<DropdownMenu>\n  <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuLabel>My Account</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Profile</DropdownMenuItem>\n    <DropdownMenuItem>Billing</DropdownMenuItem>\n    <DropdownMenuItem>Settings</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>` },
      { label: "With Shortcut", description: "Menu item with right-aligned keyboard shortcut", code: `<DropdownMenuItem>\n  Profile\n  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>\n</DropdownMenuItem>` },
      { label: "Disabled Item", description: "Non-selectable option inside menu", code: `<DropdownMenuItem disabled>API Access (Locked)</DropdownMenuItem>` },
      { label: "With Icons", description: "Dropdown items featuring Lucide icons", code: `<DropdownMenuItem>\n  <User className="mr-2 h-4 w-4" />\n  <span>Profile</span>\n</DropdownMenuItem>` },
      { label: "Submenu", description: "Nested dropdown menu trigger", code: `<DropdownMenuSub>\n  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>\n  <DropdownMenuPortal>\n    <DropdownMenuSubContent>\n      <DropdownMenuItem>Email</DropdownMenuItem>\n      <DropdownMenuItem>Message</DropdownMenuItem>\n    </DropdownMenuSubContent>\n  </DropdownMenuPortal>\n</DropdownMenuSub>` },
    ],
  },
  {
    id: "dropdown-react-select",
    name: "React Select",
    description: "A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, and async loading support.",
    website: "https://react-select.com/home",
    installCommand: "npm install react-select",
    importStatement: "import Select from 'react-select';",
    examples: [
      { label: "Basic Select", description: "Standard select input with autocomplete", code: `const options = [\n  { value: 'chocolate', label: 'Chocolate' },\n  { value: 'strawberry', label: 'Strawberry' }\n];\n\n<Select options={options} />` },
      { label: "Multi Select", description: "Allow choosing multiple values concurrently", code: `<Select isMulti options={options} />` },
      { label: "Clearable Select", description: "Adds a button to clear current selection", code: `<Select isClearable options={options} />` },
      { label: "Searchable Select", description: "Enables filter input inside select dropdown", code: `<Select isSearchable options={options} />` },
      { label: "Disabled Select", description: "Locks down dropdown input interaction", code: `<Select isDisabled options={options} />` },
    ],
  },
  {
    id: "dropdown-mantine",
    name: "Mantine (Menu)",
    description: "Fully accessible menu component with hover support, customizable items, and visual transitions.",
    website: "https://mantine.dev/core/menu/",
    installCommand: "npm install @mantine/core @mantine/hooks",
    importStatement: "import { Menu, Button, Text } from '@mantine/core';\nimport { IconSettings, IconTrash } from '@tabler/icons-react';",
    providerSetup: "import { MantineProvider } from '@mantine/core';\n<MantineProvider><App /></MantineProvider>",
    examples: [
      { label: "Basic Menu", description: "Default action menu on click", code: `<Menu shadow="md" width={200}>\n  <Menu.Target>\n    <Button>Toggle menu</Button>\n  </Menu.Target>\n  <Menu.Dropdown>\n    <Menu.Label>Application</Menu.Label>\n    <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>\n    <Menu.Item leftSection={<IconTrash size={14} />} color="red">Delete</Menu.Item>\n  </Menu.Dropdown>\n</Menu>` },
      { label: "Hover Trigger", description: "Open menu automatically on hover", code: `<Menu trigger="hover" openDelay={100} closeDelay={400}>\n  <Menu.Target><Button>Hover me</Button></Menu.Target>\n  <Menu.Dropdown>\n    <Menu.Item>Profile</Menu.Item>\n  </Menu.Dropdown>\n</Menu>` },
      { label: "Dividers & Labels", description: "Grouped items with headings and dividers", code: `<Menu.Dropdown>\n  <Menu.Label>Danger zone</Menu.Label>\n  <Menu.Divider />\n  <Menu.Item color="red">Delete account</Menu.Item>\n</Menu.Dropdown>` },
    ],
  },
  {
    id: "dropdown-headless",
    name: "Headless UI (Menu)",
    description: "Completely unstyled, accessible dropdown menu components styled using custom Tailwind transitions.",
    website: "https://headlessui.com/react/menu",
    installCommand: "npm install @headlessui/react",
    importStatement: "import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';",
    examples: [
      { label: "Standard Dropdown", description: "Unstyled dropdown structure tailored with Tailwind CSS", code: `<Menu>\n  <MenuButton className="rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white">Options</MenuButton>\n  <MenuItems anchor="bottom" className="w-52 rounded border border-white/5 bg-gray-800 p-1 text-sm text-white">\n    <MenuItem>\n      <a className="block rounded py-1.5 px-3 data-[focus]:bg-white/10" href="/settings">Settings</a>\n    </MenuItem>\n  </MenuItems>\n</Menu>` },
      { label: "Transitions", description: "Dropdown menu with smooth scale/fade entry", code: `<MenuItems\n  transition\n  className="transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"\n>\n  <MenuItem><button>Edit</button></MenuItem>\n</MenuItems>` },
    ],
  },
  {
    id: "dropdown-radix",
    name: "Radix UI (Dropdown Menu)",
    description: "Low-level unstyled React dropdown primitive which manages focus, keyboard navigation, and ARIA attributes.",
    website: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu",
    installCommand: "npm install @radix-ui/react-dropdown-menu",
    importStatement: "import * as DropdownMenu from '@radix-ui/react-dropdown-menu';",
    examples: [
      { label: "Radix Primitive", description: "Low-level dropdown element tree", code: `<DropdownMenu.Root>\n  <DropdownMenu.Trigger className="btn">Options</DropdownMenu.Trigger>\n  <DropdownMenu.Portal>\n    <DropdownMenu.Content className="dropdown-content" sideOffset={5}>\n      <DropdownMenu.Item className="item">Cut</DropdownMenu.Item>\n      <DropdownMenu.Separator className="separator" />\n      <DropdownMenu.Item className="item">Copy</DropdownMenu.Item>\n    </DropdownMenu.Content>\n  </DropdownMenu.Portal>\n</DropdownMenu.Root>` },
    ],
  },
  {
    id: "dropdown-heroui",
    name: "HeroUI (NextUI Dropdown)",
    description: "Modern, pre-styled dropdown menus built with animation components from Framer Motion.",
    website: "https://nextui.org/docs/components/dropdown",
    installCommand: "npm install @nextui-org/react framer-motion",
    importStatement: "import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';",
    providerSetup: 'import { NextUIProvider } from "@nextui-org/react";\n<NextUIProvider><App /></NextUIProvider>',
    examples: [
      { label: "Basic Dropdown", description: "Default animated dropdown action menu", code: `<Dropdown>\n  <DropdownTrigger>\n    <Button variant="bordered">Open Menu</Button>\n  </DropdownTrigger>\n  <DropdownMenu aria-label="Static Actions">\n    <DropdownItem key="new">New file</DropdownItem>\n    <DropdownItem key="copy">Copy link</DropdownItem>\n    <DropdownItem key="delete" className="text-danger" color="danger">Delete file</DropdownItem>\n  </DropdownMenu>\n</Dropdown>` },
      { label: "Disabled Keys", description: "Menu items disabled dynamically", code: `<DropdownMenu disabledKeys={['copy']}>\n  <DropdownItem key="new">New</DropdownItem>\n  <DropdownItem key="copy">Copy</DropdownItem>\n</DropdownMenu>` },
      { label: "Custom Styles", description: "Styled variants like flat, faded, or solid", code: `<DropdownMenu variant="faded" color="primary">\n  <DropdownItem key="profile">My Profile</DropdownItem>\n</DropdownMenu>` },
    ],
  },
  {
    id: "dropdown-chakra",
    name: "Chakra UI (Menu)",
    description: "Accessible click-based dropdown system using built-in design primitives.",
    website: "https://chakra-ui.com/docs/components/menu",
    installCommand: "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion",
    importStatement: "import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, Button } from '@chakra-ui/react';",
    providerSetup: "import { ChakraProvider } from '@chakra-ui/react';\n<ChakraProvider><App /></ChakraProvider>",
    examples: [
      { label: "Basic Menu", description: "Standard clean select overlay trigger", code: `<Menu>\n  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Actions</MenuButton>\n  <MenuList>\n    <MenuItem>Download</MenuItem>\n    <MenuItem>Create a Copy</MenuItem>\n    <MenuDivider />\n    <MenuItem>Delete</MenuItem>\n  </MenuList>\n</Menu>` },
      { label: "With Icon & Command", description: "Item with icon prefixes and shortcut keys", code: `<MenuItem icon={<AddIcon />} command="⌘N">New Tab</MenuItem>` },
    ],
  },
  {
    id: "dropdown-mui",
    name: "MUI (Menu)",
    description: "Material Design drop-down selection menus anchored to buttons.",
    website: "https://mui.com/material-ui/react-menu/",
    installCommand: "npm install @mui/material @emotion/react @emotion/styled",
    importStatement: "import Menu from '@mui/material/Menu';\nimport MenuItem from '@mui/material/MenuItem';\nimport Button from '@mui/material/Button';",
    examples: [
      { label: "Anchor Menu", description: "Standard Material Menu positioned relative to anchor element", code: `const [anchorEl, setAnchorEl] = React.useState(null);\nconst open = Boolean(anchorEl);\n\n<Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Menu</Button>\n<Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>\n  <MenuItem onClick={handleClose}>Profile</MenuItem>\n  <MenuItem onClick={handleClose}>Logout</MenuItem>\n</Menu>` },
      { label: "Selected Item", description: "Highlight active choice in menu list", code: `<MenuItem selected={selectedIndex === 0}>Profile</MenuItem>` },
    ],
  },
  {
    id: "dropdown-downshift",
    name: "Downshift",
    description: "A low-level, lightweight primitive collection to build custom, accessible combobox and select components.",
    website: "https://github.com/downshift-js/downshift",
    installCommand: "npm install downshift",
    importStatement: "import { useSelect } from 'downshift';",
    examples: [
      { label: "useSelect Hook", description: "State reducer hooks managing dropdown select layout states", code: `const { isOpen, selectedItem, getToggleButtonProps, getMenuProps, getItemProps } = useSelect({ items });\n\n<div>\n  <button {...getToggleButtonProps()}>{selectedItem || 'Select Color'}</button>\n  <ul {...getMenuProps()}>\n    {isOpen && items.map((item, index) => (\n      <li key={item} {...getItemProps({ item, index })}>{item}</li>\n    ))}\n  </ul>\n</div>` },
    ],
  },
  {
    id: "dropdown-cmdk",
    name: "cmdk (Command Menu)",
    description: "Fast, accessible command menu React component designed for search portals and keyboard palettes.",
    website: "https://github.com/pacocoursey/cmdk",
    installCommand: "npm install cmdk",
    importStatement: "import { Command } from 'cmdk';",
    examples: [
      { label: "Search Palette", description: "Full search and item list selector", code: `<Command label="Command Menu">\n  <Command.Input placeholder="Search command..." />\n  <Command.List>\n    <Command.Empty>No results found.</Command.Empty>\n    <Command.Group heading="Settings">\n      <Command.Item>Profile</Command.Item>\n      <Command.Item>Billing</Command.Item>\n    </Command.Group>\n  </Command.List>\n</Command>` },
    ],
  },
];

export const getDropdownLibrary = (id: string): DropdownLibraryConfig | undefined =>
  DROPDOWN_LIBRARIES.find((lib) => lib.id === id);
