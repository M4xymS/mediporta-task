import logger from "redux-logger";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "@/store/rootReducer.ts";


const middlewares = [logger]

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;