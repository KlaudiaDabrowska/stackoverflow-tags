import LoadingProgress from "@/components/Common/LoadingProgress";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoadingProgress> = {
  title: "Common/LoadingProgress",
  component: LoadingProgress,
};

type Story = StoryObj<typeof LoadingProgress>;

export const Primary: Story = {
  decorators: [(Story) => <Story />],
};

export default meta;
