import { BsFillGridFill, BsCardChecklist } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import { BiMessageDetail } from "react-icons/bi"
import { RiAppsLine } from "react-icons/ri"

export const mobileNavIcons = [
    {
        icon: <RiAppsLine className="w-8 h-6" />,
        link: '/home'
    },
    {
        icon: <BsFillGridFill className="w-8 h-6" />,
        link: '/grid'
    },
    {
        icon: <AiOutlineHome className="w-8 h-6" />,
        link: '/about'
    },
    {
        icon: <BiMessageDetail className="w-8 h-6" />,
        link: '/chat'
    },
    {
        icon: <BsCardChecklist className="w-8 h-6" />,
        link: '/profile'
    }
]