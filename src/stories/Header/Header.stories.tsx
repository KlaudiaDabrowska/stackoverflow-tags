import Header from "@/components/Common/Header";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Main/Header",
  component: Header,
};

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  decorators: [(Story) => <Story />],
};

export default meta;
