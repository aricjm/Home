export interface RadioExample {
  label: string;
  description: string;
  code: string;
}

export interface RadioLibraryConfig {
  id: string;
  name: string;
  description: string;
  website: string;
  installCommand: string;
  importStatement: string;
  providerSetup?: string;
  examples: RadioExample[];
}

export const RADIO_LIBRARIES: RadioLibraryConfig[] = [
  {
    id: "radio-shadcn",
    name: "shadcn/ui (Radio Group)",
    description: "A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time.",
    website: "https://ui.shadcn.com/docs/components/radio-group",
    installCommand: "npx shadcn@latest add radio-group",
    importStatement: "import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'\nimport { Label } from '@/components/ui/label'",
    examples: [
      { label: "Basic Group", description: "Standard radio button list", code: `<RadioGroup defaultValue="comfortable">\n  <div className="flex items-center space-x-2">\n    <RadioGroupItem value="default" id="r1" />\n    <Label htmlFor="r1">Default</Label>\n  </div>\n  <div className="flex items-center space-x-2">\n    <RadioGroupItem value="comfortable" id="r2" />\n    <Label htmlFor="r2">Comfortable</Label>\n  </div>\n</RadioGroup>` },
      { label: "Disabled Item", description: "Radio choice locked/disabled", code: `<div className="flex items-center space-x-2">\n  <RadioGroupItem value="disabled" id="r3" disabled />\n  <Label htmlFor="r3" className="opacity-50">Disabled Option</Label>\n</div>` },
    ],
  },
  {
    id: "radio-radix",
    name: "Radix UI (Radio Group)",
    description: "Low level accessible radio button primitive suitable for custom styling.",
    website: "https://www.radix-ui.com/primitives/docs/components/radio-group",
    installCommand: "npm install @radix-ui/react-radio-group",
    importStatement: "import * as RadioGroup from '@radix-ui/react-radio-group';",
    examples: [
      { label: "Radio Primitive", description: "Radix UI Root, Item, and Indicator structure", code: `<RadioGroup.Root defaultValue="1">\n  <RadioGroup.Item value="1" className="RadioGroupItem">\n    <RadioGroup.Indicator className="RadioGroupIndicator" />\n  </RadioGroup.Item>\n</RadioGroup.Root>` },
    ],
  },
  {
    id: "radio-mantine",
    name: "Mantine (Radio Group)",
    description: "Styled radio button lists with layout alignment controls and optional helper messages.",
    website: "https://mantine.dev/core/radio/",
    installCommand: "npm install @mantine/core @mantine/hooks",
    importStatement: "import { Radio, Group } from '@mantine/core';",
    providerSetup: "import { MantineProvider } from '@mantine/core';\n<MantineProvider><App /></MantineProvider>",
    examples: [
      { label: "Basic Group", description: "Horizontal list of radio choices", code: `<Radio.Group name="favFramework" label="Select framework" withAsterisk>\n  <Group mt="xs">\n    <Radio value="react" label="React" />\n    <Radio value="svelte" label="Svelte" />\n  </Group>\n</Radio.Group>` },
      { label: "Helper Texts", description: "Radio choice with supporting details below it", code: "<Radio value=\"opt\" label=\"Option\" description=\"Additional details here\" />" },
      { label: "Disabled Options", description: "Option item disabled", code: "<Radio value=\"disabled\" label=\"Disabled Option\" disabled />" },
    ],
  },
  {
    id: "radio-heroui",
    name: "HeroUI (NextUI Radio Group)",
    description: "Card-like radio options with interactive states and smooth scaling indicators.",
    website: "https://nextui.org/docs/components/radio-group",
    installCommand: "npm install @nextui-org/react framer-motion",
    importStatement: "import { RadioGroup, Radio } from '@nextui-org/react';",
    providerSetup: 'import { NextUIProvider } from "@nextui-org/react";\n<NextUIProvider><App /></NextUIProvider>',
    examples: [
      { label: "Basic Group", description: "Default radio group list", code: `<RadioGroup label="Select your plans">\n  <Radio value="buys">Basic</Radio>\n  <Radio value="pro">Pro Edition</Radio>\n</RadioGroup>` },
      { label: "Description Text", description: "Group option including sub-descriptions", code: "<Radio value=\"enterprise\" description=\"Best for teams\">Enterprise</Radio>" },
      { label: "Color scheme", description: "Green success accent ring", code: "<Radio value=\"success\" color=\"success\">Success Plan</Radio>" },
    ],
  },
  {
    id: "radio-chakra",
    name: "Chakra UI (Radio)",
    description: "Accessible, flex-aligned radio button layouts.",
    website: "https://chakra-ui.com/docs/components/radio",
    installCommand: "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion",
    importStatement: "import { Radio, RadioGroup, Stack } from '@chakra-ui/react';",
    providerSetup: "import { ChakraProvider } from '@chakra-ui/react';\n<ChakraProvider><App /></ChakraProvider>",
    examples: [
      { label: "Basic Group", description: "Stack layout radio button array", code: `<RadioGroup defaultValue="1">\n  <Stack spacing={4} direction="row">\n    <Radio value="1">Option 1</Radio>\n    <Radio value="2">Option 2</Radio>\n  </Stack>\n</RadioGroup>` },
      { label: "Color Schema", description: "Teal focus rings and checks", code: "<Radio value=\"teal\" colorScheme=\"teal\">Teal Radio</Radio>" },
    ],
  },
  {
    id: "radio-mui",
    name: "MUI (Radio Group)",
    description: "Material Design radio inputs wrapped in accessible form controls.",
    website: "https://mui.com/material-ui/react-radio-button/",
    installCommand: "npm install @mui/material @emotion/react @emotion/styled",
    importStatement: "import Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport FormControl from '@mui/material/FormControl';\nimport FormLabel from '@mui/material/FormLabel';",
    examples: [
      { label: "Basic Group", description: "Standard Material form control radio array", code: `<FormControl>\n  <FormLabel>Gender</FormLabel>\n  <RadioGroup defaultValue="female" name="radio-buttons-group">\n    <FormControlLabel value="female" control={<Radio />} label="Female" />\n    <FormControlLabel value="male" control={<Radio />} label="Male" />\n  </RadioGroup>\n</FormControl>` },
      { label: "Row Layout", description: "Horizontal form control row list", code: "<RadioGroup row defaultValue=\"a\"><FormControlLabel value=\"a\" control={<Radio />} label=\"A\" /></RadioGroup>" },
    ],
  },
  {
    id: "radio-headless",
    name: "Headless UI (Radio Group)",
    description: "Completely unstyled screen-reader accessible radio group component tags styled with Tailwind.",
    website: "https://headlessui.com/react/radio-group",
    installCommand: "npm install @headlessui/react",
    importStatement: "import { Radio, RadioGroup } from '@headlessui/react';",
    examples: [
      { label: "Basic Group", description: "Unstyled radio list utilizing tailwind selected state indicators", code: `<RadioGroup value={selected} onChange={setSelected} aria-label="Server size">\n  <Radio value="startup" className="group flex items-center justify-between rounded-lg bg-white/5 py-4 px-5 text-white data-[checked]:bg-white/10">\n    <span className="text-sm">Startup</span>\n    <CheckCircleIcon className="size-5 fill-white opacity-0 group-data-[checked]:opacity-100" />\n  </Radio>\n</RadioGroup>` },
    ],
  },
  {
    id: "radio-react-aria",
    name: "React Aria (Radio Group)",
    description: "Fully accessible radio option list conforming to WAI-ARIA standards.",
    website: "https://react-spectrum.adobe.com/react-aria/RadioGroup.html",
    installCommand: "npm install react-aria-components",
    importStatement: "import { RadioGroup, Label, Radio } from 'react-aria-components';",
    examples: [
      { label: "Basic Group", description: "Standard accessible labeled radio list", code: `<RadioGroup>\n  <Label>Favorite fruit</Label>\n  <Radio value="apple">Apple</Radio>\n  <Radio value="banana">Banana</Radio>\n</RadioGroup>` },
    ],
  },
  {
    id: "radio-antd",
    name: "Ant Design (Radio)",
    description: "Standard radio circles and segmented toggle button groups.",
    website: "https://ant.design/components/radio",
    installCommand: "npm install antd",
    importStatement: "import { Radio } from 'antd';",
    examples: [
      { label: "Basic Group", description: "Standard ant choices group", code: `<Radio.Group onChange={onChange} value={value}>\n  <Radio value={1}>A</Radio>\n  <Radio value={2}>B</Radio>\n</Radio.Group>` },
      { label: "Radio Button style", description: "Segmented tabs button style group", code: `<Radio.Group defaultValue="a">\n  <Radio.Button value="a">Hangzhou</Radio.Button>\n  <Radio.Button value="b">Shanghai</Radio.Button>\n</Radio.Group>` },
    ],
  },
  {
    id: "radio-daisyui",
    name: "DaisyUI (Radio)",
    description: "Tailwind CSS class-based checkable radio circle buttons.",
    website: "https://daisyui.com/components/radio/",
    installCommand: "npm install daisyui",
    importStatement: "// No import required — use Tailwind CSS class names",
    examples: [
      { label: "Default Radio", description: "Standard circular radio class", code: "<input type=\"radio\" name=\"radio-1\" className=\"radio\" />" },
      { label: "Primary Radio", description: "Primary colored selection indicator", code: "<input type=\"radio\" name=\"radio-2\" className=\"radio radio-primary\" defaultChecked />" },
      { label: "Sizes", description: "Small radio scale options", code: "<input type=\"radio\" className=\"radio radio-xs\" />" },
    ],
  },
];

export const getRadioLibrary = (id: string): RadioLibraryConfig | undefined =>
  RADIO_LIBRARIES.find((lib) => lib.id === id);
