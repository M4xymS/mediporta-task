import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from "@/store/store.ts";
import {Provider} from "react-redux";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import Header from "@/components/header/Header.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <TooltipProvider delayDuration={10} disableHoverableContent>
                <Header/>
                <App/>
            </TooltipProvider>
        </Provider>
    </React.StrictMode>,
)
