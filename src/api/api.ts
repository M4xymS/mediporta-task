import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {createApi} from "@reduxjs/toolkit/query/react";
import {ApiParams, APIResponse} from "@/types";

const API_KEY = import.meta.env.VITE_API_KEY || "U4DMV*8nvpm3EOpvf69Rxw(("
const BASE_URL = import.meta.env.VITE_APP_BASE_URL || "https://api.stackexchange.com/2.3/"


const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL
})

export const api = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: (builder) => ({
        getAllTags: builder.query<APIResponse, ApiParams>({
            query: (args) => {
                return {
                    url: "/tags",
                    params: {
                        ...args,
                        site: "stackoverflow",
                        key: API_KEY
                    }
                }
            }
        })
    })
})

export const {useGetAllTagsQuery} = api;
