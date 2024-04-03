import type {Meta, StoryObj} from "@storybook/react"
import TableGrid from "@/components/table-grid/TableGrid"
import {Column, Tag} from "@/types";

/**
 * Displays a table grid.
 */
const mockData: Column<Tag>[] = [
    {
        key: 'count',
        header: 'Count',
        sort: 'popular'
    },
    {
        key: 'name',
        header: 'Name',
    }]

const meta = {
    title: "table/TableGrid",
    component: TableGrid,
    tags: ["autodocs"],
    args: {
        headers: mockData,
        data: [{
            "has_synonyms": false,
            "is_moderator_only": false,
            "is_required": false,
            "count": 311849,
            "name": "django"
        }]
    },
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof TableGrid<Tag>>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Loading: Story = {
    args: {
        isLoading: true
    }
}

export const Error: Story = {
    args: {
        isError: true,
        error: {"status": "FETCH_ERROR", "error": "TypeError: failed to fetch"}
    }
}

