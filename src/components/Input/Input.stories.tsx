import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: "Email" } };
export const Disabled: Story = { args: { placeholder: "Email", disabled: true } };
export const Invalid: Story = { args: { placeholder: "Email", "aria-invalid": true } };
