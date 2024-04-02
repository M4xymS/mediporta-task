import {createSlice} from "@reduxjs/toolkit";


const tableSettings = createSlice({
    name: "tableSettings",
    initialState: {
        pageSize: 10,
    },
    reducers: {
        setPageSize(state, action) {
            state.pageSize = action.payload;
        }
    }
});

export const {setPageSize} = tableSettings.actions;


export const getPageSize = (state) => state.tableSettings.pageSize;

export default tableSettings.reducer;