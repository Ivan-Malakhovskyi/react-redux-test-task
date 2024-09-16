import { Meta, StoryObj } from "@storybook/react";
import { AppInputText } from "../components/InputText/InputText";

const meta: Meta<typeof AppInputText> = {
  title: "App/InputText",
  component: AppInputText,
  tags: ["autodocs"],
};

export default meta;

export const DefaultInputText: StoryObj<typeof AppInputText> = {
  args: {
    size: "sm",
  },
};

export const nextSample: StoryObj<typeof AppInputText> = {
  args: {
    ...DefaultInputText.args,
    size: "md",
  },
};
