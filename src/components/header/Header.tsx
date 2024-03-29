import HeaderSocials from "@/components/header/HeaderSocials.tsx";
import HeaderLogo from "@/components/header/HeaderLogo.tsx";
import DarkModeToggle from "@/components/header/DarkModeToggle.tsx";

const Header = () => {
    return (
        <header className='w-full sticky top-0 border-b border-zinc-400/30 bg-background h-12 shadow-lg'>
            <div className='container flex items-center justify-between h-full'>
                <HeaderLogo/>
                <div className='space-x-2'>
                    <HeaderSocials/>
                    <DarkModeToggle/>
                </div>
            </div>
        </header>
    )
}

export default Header