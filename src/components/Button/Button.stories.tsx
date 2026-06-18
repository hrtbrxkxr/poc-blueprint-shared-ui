import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { variant: "default", children: "Click me" } };
export const Secondary: Story = { args: { variant: "secondary", children: "Click me" } };
export const Outline: Story = { args: { variant: "outline", children: "Click me" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Click me" } };
export const Destructive: Story = { args: { variant: "destructive", children: "Click me" } };
export const Link: Story = { args: { variant: "link", children: "Click me" } };
