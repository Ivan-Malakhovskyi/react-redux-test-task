import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/Input";

type StoryObjType = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: "App/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

export const BaseInput: StoryObjType = {
  args: {
    size: "sm",
  },
};

export const MediumInput: StoryObjType = {
  args: {
    size: "md",
  },
};

export const LargeInput: StoryObjType = {
  args: {
    size: "md",
  },
};
