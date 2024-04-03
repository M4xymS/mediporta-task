import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/components/ui/button"

/**
 * Displays a button or a component that looks like a button.
 */
const meta = {
    title: "ui/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: "text",
        },
    },
    parameters: {
        layout: "centered",
    },
    args: {
        variant: "default",
        size: "default",
        children: "Button",
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the button, used for primary actions and commands.
 */
export const Default: Story = {}

/**
 * Use the `outline` button to reduce emphasis on secondary actions, such as
 * canceling or dismissing a dialog.
 */
export const Outline: Story = {
    args: {
        variant: "outline",
    },
}

/**
 * Use the `ghost` button is minimalistic and subtle, for less intrusive
 * actions.
 */
export const Ghost: Story = {
    args: {
        variant: "ghost",
    },
}

/**
 * Use the `secondary` button to call for less emphasized actions, styled to
 * complement the primary button while being less conspicuous.
 */
export const Secondary: Story = {
    args: {
        variant: "secondary",
    },
}

/**
 * Use the `destructive` button to indicate errors, alerts, or the need for
 * immediate attention.
 */
export const Destructive: Story = {
    args: {
        variant: "destructive",
    },
}

/**
 * Use the `link` button to reduce emphasis on tertiary actions, such as
 * hyperlink or navigation, providing a text-only interactive element.
 */
export const Link: Story = {
    args: {
        variant: "link",
    },
}