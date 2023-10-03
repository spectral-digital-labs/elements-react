import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    // Add more controls for props if needed.
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  // args: {
  //   children: "Button",
  //   variant: "secondary",
  //   state: "success",
  // },
};

// export const IconLeft: Story = {
//   name: 'With icon on the left',
//   args: {
//     icon: 'plus',
//     children: 'Icon left'
//   }
// };
