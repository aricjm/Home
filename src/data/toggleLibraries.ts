export interface ToggleExample {
  label: string;
  description: string;
  code: string;
}

export interface ToggleLibraryConfig {
  id: string;
  name: string;
  description: string;
  website: string;
  installCommand: string;
  importStatement: string;
  providerSetup?: string;
  examples: ToggleExample[];
}

export const TOGGLE_LIBRARIES: ToggleLibraryConfig[] = [
  {
    id: "toggle-shadcn",
    name: "shadcn/ui (Switch / Toggle)",
    description: "A control that allows the user to toggle between checked and unchecked states.",
    website: "https://ui.shadcn.com/docs/components/switch",
    installCommand: "npx shadcn@latest add switch toggle",
    importStatement: "import { Switch } from '@/components/ui/switch'\nimport { Toggle } from '@/components/ui/toggle'",
    examples: [
      { label: "Switch Basic", description: "Standard switch toggle component", code: "<Switch />" },
      { label: "Switch Label", description: "Accessible switch with descriptive title label", code: `<div className="flex items-center space-x-2">\n  <Switch id="airplane-mode" />\n  <Label htmlFor="airplane-mode">Airplane Mode</Label>\n</div>` },
      { label: "Toggle Button", description: "Standard 2-state toggle button with icon", code: `<Toggle aria-label="Toggle bold">\n  <Bold className="h-4 w-4" />\n</Toggle>` },
      { label: "Disabled Switch", description: "Non-interactive switch state", code: "<Switch disabled />" },
    ],
  },
  {
    id: "toggle-radix",
    name: "Radix UI (Switch)",
    description: "An unstyled switch primitive that manages focus transitions and accessibility specs.",
    website: "https://www.radix-ui.com/primitives/docs/components/switch",
    installCommand: "npm install @radix-ui/react-switch",
    importStatement: "import * as Switch from '@radix-ui/react-switch';",
    examples: [
      { label: "Switch Primitive", description: "Root and Thumb switch setup", code: `<Switch.Root className="SwitchRoot" id="s1">\n  <Switch.Thumb className="SwitchThumb" />\n</Switch.Root>` },
    ],
  },
  {
    id: "toggle-mantine",
    name: "Mantine (Switch)",
    description: "Fully styled switch controls with support for inner labels, sizes, and loading state badges.",
    website: "https://mantine.dev/core/switch/",
    installCommand: "npm install @mantine/core @mantine/hooks",
    importStatement: "import { Switch } from '@mantine/core';",
    providerSetup: "import { MantineProvider } from '@mantine/core';\n<MantineProvider><App /></MantineProvider>",
    examples: [
      { label: "Basic Switch", description: "Standard state switch component", code: "<Switch label=\"Activate setting\" />" },
      { label: "Inner Labels", description: "Text inside the thumb slider track", code: "<Switch onLabel=\"ON\" offLabel=\"OFF\" />" },
      { label: "Size: xs", description: "Smaller toggle scale", code: "<Switch size=\"xs\" />" },
      { label: "Size: xl", description: "Larger toggle scale", code: "<Switch size=\"xl\" />" },
      { label: "Disabled", description: "Locked switch interaction", code: "<Switch disabled />" },
    ],
  },
  {
    id: "toggle-heroui",
    name: "HeroUI (NextUI Switch)",
    description: "Animated toggle switches featuring customizable thumb icon renders.",
    website: "https://nextui.org/docs/components/switch",
    installCommand: "npm install @nextui-org/react framer-motion",
    importStatement: "import { Switch } from '@nextui-org/react';",
    providerSetup: 'import { NextUIProvider } from "@nextui-org/react";\n<NextUIProvider><App /></NextUIProvider>',
    examples: [
      { label: "Basic Switch", description: "Default toggle element", code: "<Switch defaultSelected>Automatic updates</Switch>" },
      { label: "Thumb Icon", description: "Switch containing custom check/sun icons in the toggle handle", code: `<Switch\n  startContent={<SunIcon />}\n  endContent={<MoonIcon />}\n>\n  Dark Mode\n</Switch>` },
      { label: "Color Variants", description: "Styled variants like secondary or success green", code: "<Switch color=\"success\" defaultSelected>Success</Switch>" },
    ],
  },
  {
    id: "toggle-chakra",
    name: "Chakra UI (Switch)",
    description: "Accessible toggle switch with variants and size props.",
    website: "https://chakra-ui.com/docs/components/switch",
    installCommand: "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion",
    importStatement: "import { Switch, FormControl, FormLabel } from '@chakra-ui/react';",
    providerSetup: "import { ChakraProvider } from '@chakra-ui/react';\n<ChakraProvider><App /></ChakraProvider>",
    examples: [
      { label: "Basic Switch", description: "Standard clean toggle", code: "<Switch />" },
      { label: "Chakra FormControl", description: "Form labeled switch alignment", code: `<FormControl display="flex" alignItems="center">\n  <FormLabel htmlFor="email-alerts" mb="0">Email Alerts?</FormLabel>\n  <Switch id="email-alerts" />\n</FormControl>` },
      { label: "Color Scheme", description: "Custom focus/thumb accent color selection", code: "<Switch colorScheme=\"teal\" size=\"lg\" />" },
    ],
  },
  {
    id: "toggle-mui",
    name: "MUI (Switch)",
    description: "Material Design switch controls.",
    website: "https://mui.com/material-ui/react-switch/",
    installCommand: "npm install @mui/material @emotion/react @emotion/styled",
    importStatement: "import Switch from '@mui/material/Switch';\nimport FormControlLabel from '@mui/material/FormControlLabel';",
    examples: [
      { label: "Basic Switch", description: "Base input switch", code: "<Switch defaultChecked />" },
      { label: "Form Label Switch", description: "Positioned label wrapping the input", code: "<FormControlLabel control={<Switch />} label=\"Label\" />" },
      { label: "Color: secondary", description: "Secondary theme palette color track", code: "<Switch color=\"secondary\" />" },
    ],
  },
  {
    id: "toggle-headless",
    name: "Headless UI (Switch)",
    description: "Completely unstyled toggle switch primitive to design custom layouts with Tailwind classes.",
    website: "https://headlessui.com/react/switch",
    installCommand: "npm install @headlessui/react",
    importStatement: "import { Switch } from '@headlessui/react';",
    examples: [
      { label: "Basic Switch", description: "Tailwind styled switch thumb structure", code: `<Switch\n  checked={enabled}\n  onChange={setEnabled}\n  className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out data-[checked]:bg-white/10"\n>\n  <span className="pointer-events-none block size-5 translate-x-0 rounded-full bg-white transition duration-200 ease-in-out group-data-[checked]:translate-x-7" />\n</Switch>` },
    ],
  },
  {
    id: "toggle-react-aria",
    name: "React Aria (Toggle / Switch)",
    description: "Accessible toggle components that ensure full assistive screen-reader compatibility.",
    website: "https://react-spectrum.adobe.com/react-aria/Switch.html",
    installCommand: "npm install react-aria-components",
    importStatement: "import { Switch } from 'react-aria-components';",
    examples: [
      { label: "Basic Switch", description: "Fully accessible labeled Switch input", code: "<Switch>Low Power Mode</Switch>" },
      { label: "Disabled", description: "Locked accessible toggle state", code: "<Switch isDisabled>Low Power Mode</Switch>" },
    ],
  },
  {
    id: "toggle-antd",
    name: "Ant Design (Switch)",
    description: "A compact slider toggle that indicates active states with optional text or icons.",
    website: "https://ant.design/components/switch",
    installCommand: "npm install antd",
    importStatement: "import { Switch } from 'antd';",
    examples: [
      { label: "Basic Switch", description: "Standard ant slide switch", code: "<Switch defaultChecked />" },
      { label: "Inner Text/Icons", description: "Exposes labels inside switch track", code: "<Switch checkedChildren=\"1\" unCheckedChildren=\"0\" />" },
      { label: "Loading Switch", description: "Switch loading animation state block", code: "<Switch loading defaultChecked />" },
    ],
  },
  {
    id: "toggle-daisyui",
    name: "DaisyUI (Toggle)",
    description: "Tailwind CSS class-based toggle buttons and checkboxes.",
    website: "https://daisyui.com/components/toggle/",
    installCommand: "npm install daisyui",
    importStatement: "// No import required — use Tailwind CSS class names",
    examples: [
      { label: "Default Toggle", description: "Base toggle class", code: "<input type=\"checkbox\" className=\"toggle\" />" },
      { label: "Primary Toggle", description: "Accent colored slide track", code: "<input type=\"checkbox\" className=\"toggle toggle-primary\" defaultChecked />" },
      { label: "Sizes", description: "Miniature toggle sizes", code: "<input type=\"checkbox\" className=\"toggle toggle-xs\" />" },
    ],
  },
];

export const getToggleLibrary = (id: string): ToggleLibraryConfig | undefined =>
  TOGGLE_LIBRARIES.find((lib) => lib.id === id);
