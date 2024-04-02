import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/store/store.ts";
import {api} from "@/api/api.ts";


const params = new URLSearchParams(window.location.search);

const initialState = {
    pageSize: 100,
    page: Number(params.get('page')) || 1,
    hasMore: true,
    order: params.get('order') || 'desc',
    sort: params.get('sort') || 'popular'
}

const tableSettings = createSlice({
    name: "tableSettings",
    initialState,
    reducers: {
        setPageSize(state, action) {
            state.pageSize = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setOrder(state, action) {
            state.order = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints?.getAllTags.matchFulfilled, (state, action) => {
            state.hasMore = action.payload.has_more;
        })
    }
});

export const {setPageSize, setPage, setSort, setOrder} = tableSettings.actions;


export const getPageSize = (state: RootState) => state.tableSettings.pageSize;

export const getPage = (state: RootState) => state.tableSettings.page;

export const getSort = (state: RootState) => state.tableSettings.sort;

export const getOrder = (state: RootState) => state.tableSettings.order;

export const getHasMore = (state: RootState) => state.tableSettings.hasMore;

export default tableSettings.reducer;