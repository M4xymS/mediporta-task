import {useGetAllTagsQuery} from "@/api/api.ts";
import Header from "@/components/header/Header.tsx";

function App() {
    useGetAllTagsQuery({})

    return (
        <>
            <Header />
            Hello world
        </>
    )
}

export default App
