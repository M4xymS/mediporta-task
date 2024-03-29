import {PlusCircledIcon} from "@radix-ui/react-icons";


const HeaderLogo = () => {

    return (
        <a href="https://www.mediporta.pl/" target="_blank" className='flex items-center flex-row'>
            <PlusCircledIcon className='text-green-400 bg-background rounded-full m-2 size-7'/>
            <p className='hidden md:inline-block font-bold'>Mediporta Table</p>
        </a>
    )
}

export default HeaderLogo