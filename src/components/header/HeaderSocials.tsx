import {Button} from "@/components/ui/button.tsx";
import {EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";


const HeaderSocials = () => {

    return (
        <div className='space-x-2'>
            <Button className='p-3 rounded-full' variant='ghost'>
                <a href="mailto:smolinskimaksym@gmail.com" target="_blank">
                    <EnvelopeClosedIcon className='size-3.5'/>
                </a>
            </Button>
            <Button className='p-3 rounded-full' variant='ghost'>
                <a href="https://www.linkedin.com/in/smolinskimaksym/" target="_blank">
                    <LinkedInLogoIcon className='size-3.5'/>
                </a>
            </Button>
            <Button className='p-3 rounded-full' variant='ghost'>
                <a href="https://www.linkedin.com/in/smolinskimaksym/" target="_blank">
                    <GitHubLogoIcon className='size-3.5'/>
                </a>
            </Button>
        </div>
    )
}

export default HeaderSocials