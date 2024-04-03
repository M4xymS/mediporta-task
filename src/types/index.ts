import {ReactNode} from "react";



export interface External_Link {
    type: string
    link: string
}


export interface APIResponse {
    items: Tag[]
    has_more: boolean;
    quota_max: number
    quota_remaining: number
}

export interface Collective {
    tags: string[]
    external_links: External_Link[]
    description: string
    link: string
    name: string
    slug: string
}

export interface Tag {
    collectives?: Collective[]
    has_synonyms: boolean
    is_moderator_only: boolean
    is_required: boolean
    count: number
    name: string
}

export interface Column<T> {
    key: keyof T,
    id?: string,
    size?: number,
    header?: string | ReactNode;
    valueFormatter?: (value: any) => ReactNode | undefined;
    sort?: string
}

export interface ApiParams {
    page: number
    pageSize: number
    order?: string
    sort?: string
}

