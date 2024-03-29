import {useEffect, useState} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {DesktopIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";

type Theme = "dark" | "light" | "system"

interface DarkModeToggle {
    defaultTheme?: Theme;
}

const DarkModeToggle = ({defaultTheme = "dark"}: DarkModeToggle) => {
    const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("theme") as Theme) || defaultTheme)

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="icon" className='p-3 rounded-full'>
                    {theme === "light" ? <SunIcon className='transition-all size-3.5'/> :
                        <MoonIcon className='transition-all size-3.5'/>}
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <SunIcon className='mr-3 size-3.5'/>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <MoonIcon className='mr-3 size-3.5'/>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    <DesktopIcon className='mr-3 size-3.5'/>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DarkModeToggle