import {BsHouseFill, BsBellFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";
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
            
        </div>
     </div>
        </div>
  )
}

export default Sidebar