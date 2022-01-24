import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export function AppProvider({children}) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page: '', links: []})

    function openSidebar(){
        setIsSidebarOpen(true)
    }
    
    function closeSidebar(){
        setIsSidebarOpen(false)
    }

    function openSubMenu(text, coordinates){
        const currentPage = sublinks.find((navLink) => navLink.page === text)
        setPage(currentPage)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    
    function closeSubMenu(){
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider
        value ={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            openSubMenu,
            closeSidebar,
            closeSubMenu,
            location,
            page,
        }}
    >{children}
    </AppContext.Provider>
}

export function useGlobalContext(){
    return useContext(AppContext)
}


