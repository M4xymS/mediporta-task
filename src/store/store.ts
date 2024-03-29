import logger from "redux-logger";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "@/store/rootReducer.ts";
import {api} from "@/api/api.ts";


const middlewares = [logger, api.middleware]

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;