import { SideBarRoutes } from "./sidebar-routes"

export const Sidebar = () =>{
    return(
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className='p-5 border-b z-50'>
              <img src="/logo.png" alt="Logo" width={170} height={100} />
            </div>

            <div className="flex flex-col w-full">
                <SideBarRoutes/>
                
            </div>
        </div>
    )
}

