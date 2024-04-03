import {ReactNode} from "react";

export type PartialOrReactNode<T> = {
    [K in keyof T]+?: T[K] | ReactNode;
}

export type SortingOrder = 'asc' | 'desc'