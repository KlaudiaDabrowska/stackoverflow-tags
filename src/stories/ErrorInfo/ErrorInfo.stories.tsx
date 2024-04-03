import ErrorInfo from "@/components/Common/ErrorInfo";
import { Meta, StoryObj } from "@storybook/react";
import args from "./consts/args";
import argTypes from "./consts/argTypes";

const meta: Meta<typeof ErrorInfo> = {
  title: "Common/ErrorInfo",
  component: ErrorInfo,
};

type Story = StoryObj<typeof ErrorInfo>;

export const Primary: Story = {
  args,
  argTypes,
  decorators: [(Story) => <Story />],
};

export default meta;
