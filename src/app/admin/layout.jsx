import Image from "next/image";
import Sidebar from "../Componenets/AdminComponents/Sidebar";
import { assets } from "../../../Assets/assets";

export default function Layout({children}){
       return(
          <>
          <div className="flex"> 
          <Sidebar />
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full py-7 max-h-[60px] px-12 border-b border-black">
                <h3 className="font-medium">Admin Panal</h3>
                <Image src={assets.profile_pic1} width={40} alt=""/>
            </div>
            {children}
          </div>
          </div>
          </>
       )
}