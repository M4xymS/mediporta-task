import {combineReducers} from "@reduxjs/toolkit";
import {api} from "@/api/api.ts";
import tableSettings from "@/features/tableSettings.ts";
const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    tableSettings
})

export default rootReducer