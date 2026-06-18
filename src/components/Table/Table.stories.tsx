import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const platformModules = [
  { id: "module-a", name: "BMI Calculator", status: "enabled" },
  { id: "module-b", name: "Module B", status: "disabled" },
  { id: "module-c", name: "Module C", status: "disabled" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Registered platform modules.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {platformModules.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
