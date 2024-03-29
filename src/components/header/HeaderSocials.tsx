import {Button} from "@/components/ui/button.tsx";
import {EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";


const HeaderSocials = () => {

    return (
        <>
            <a href="mailto:smolinskimaksym@gmail.com" target="_blank">
                <Button className='p-3' variant='ghost'>
                    <EnvelopeClosedIcon className='size-3.5'/>
                </Button>
            </a>
            <a href="https://www.linkedin.com/in/smolinskimaksym/" target="_blank">
                <Button className='p-3' variant='ghost'>
                    <LinkedInLogoIcon className='size-3.5'/>
                </Button>
            </a>
            <a href="https://github.com/M4xymS" target="_blank">
                <Button className='p-3' variant='ghost'>
                    <GitHubLogoIcon className='size-3.5'/>
                </Button>
            </a>
        </>
    )
}

export default HeaderSocials