import type { Meta, StoryObj } from "@storybook/react";
import { Toaster, toast } from "./Sonner";
import { Button } from "../Button/Button";

const meta: Meta<typeof Toaster> = {
  title: "Components/Sonner",
  component: Toaster,
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button onClick={() => toast("Saved successfully.")}>Show toast</Button>
    </div>
  ),
};
