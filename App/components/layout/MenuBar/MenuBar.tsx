"use client"
import Image from "next/image"
import logo from "@/assets/logos/logo.png"
import { Icon } from '@iconify/react'
import { useState } from "react"
import { 
    MenuBarContainer,
    HeadSection,
    MenuSection,
    LogoutItem,
    MenuTitle,
    MenuItem
} from "./MenuBar.styles"


const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuJsx = menudata.map(el => (
        <MenuItem href={el.path} key={el.id}>
            <Icon icon={el.icon} />
            <p>{el.name}</p>
        </MenuItem>
    ))

    const accountJsx = accountData.map(el => (
        <MenuItem href={el.path} key={el.id}>
            <Icon icon={el.icon} />
            <p>{el.name}</p>
        </MenuItem>
    ))

 return (
    <MenuBarContainer>
        <HeadSection>
            <Image src={logo} alt="logo" />
            <span>Upstat</span>
            <Icon icon="ri:arrow-right-double-line" />
        </HeadSection>
        <MenuSection>
            <MenuTitle>MENU</MenuTitle>
            {menuJsx}
        </MenuSection>
        <MenuSection>
            <MenuTitle>ACCOUNTS</MenuTitle>
            {accountJsx}
        </MenuSection>
        <MenuSection>
            <LogoutItem href="#">
                <Icon icon="majesticons:logout" />
                <p>Log out</p>
            </LogoutItem>
        </MenuSection>
    </MenuBarContainer>
 )
}

const menudata = [
    {
        id: 0,
        icon: "material-symbols:dashboard",
        name: "Dashboard",
        path:"dashboard"
    },
    {
        id: 1,
        icon: "ph:traffic-sign-fill",
        name: "Traffic",
        path:"traffic"
    },
    {
        id: 2,
        icon: "mingcute:time-fill",
        name: "Page Load Time",
        path:"pageLoadTime"
    },
    {
        id: 3,
        icon: "mdi:analytics",
        name: "SEO Metrics",
        path:"seo"
    },
    {
        id: 4,
        icon: "fluent:arrow-bounce-16-filled",
        name: "Bounce Rate",
        path:"bounce"
    },
    {
        id: 5,
        icon: "material-symbols:error",
        name: "Error Rate",
        path:"error"
    }
]

const accountData = [
    {
        id: 0,
        icon: "mdi:account",
        name: "Account",
        path:"account"
    },
    {
        id: 1,
        icon: "icon-park-solid:setting",
        name: "Settings",
        path:"settings"
    },
    {
        id: 2,
        icon: "mdi:help-box",
        name: "Help Center",
        path:"help"
    },
]

export default MenuBar