import {BsHouseFill, BsBellFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";
import {BiLogOut} from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
const Sidebar = () => {

    const items=[
        {
            label:"Home",
            href:"/",
            icon:BsHouseFill
        },
        {
            label:"Notification",
            href:"/notification",
            icon:BsBellFill
        },
        {
            label:"Profile",
            href:"/user/123",
            icon:FaUser
        },

    ]



  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
     <div className="flex flex-col item-end">
        <div className="space-y-2 lg:w-[230px]">
            <SidebarLogo />
            {items.map((item)=>(
                <SidebarItem 
                label={item.label}
                key={item.href}
                href={item.href}
                icon={item.icon}
                />
            ))}

        </div>
        <SidebarItem onClick={()=>{}} label="Logout" icon={BiLogOut} href=""/>
        <SidebarTweetButton />
     </div>
        </div>
  )
}

export default Sidebar