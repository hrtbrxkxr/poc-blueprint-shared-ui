import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import { Input } from "../Input/Input";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = { args: { children: "Email", htmlFor: "email" } };

export const WithInput: Story = {
  render: () => (
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="you@example.com" />
    </div>
  ),
};
