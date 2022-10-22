import React, {ReactElement} from "react";
import {NextComponentType, NextPageContext} from "next";
import NavigationMenuStyles from "@styles/components/layout/navigation-menu/navigation-menu.module.scss"
import {IconType} from "react-icons";
import NavLink from "@components/layout/navigation-menu/nav-link";
import {AiFillHome, AiFillMessage} from "react-icons/ai";
import {FaUser} from "react-icons/fa";
import {BsBookmarkDashFill} from "react-icons/bs";
import {IoSettingsSharp} from "react-icons/io5";
import Link from "next/link";

const NavigationMenu: NextComponentType<NextPageContext, unknown, { onRouteChange?: () => void }> = ({onRouteChange}) => {
    const navItems: { text: string, icon: ReactElement<IconType>, route: string }[] = [
        {text: 'Home', icon: <AiFillHome/>, route: '/'},
        {text: 'Message', icon: <AiFillMessage/>, route: '/messages'},
        {text: 'Profile', icon: <FaUser/>, route: '/profile'},
        {text: 'Saved Posts', icon: <BsBookmarkDashFill/>, route: '/saved-posts'},
        {text: 'Settings', icon: <IoSettingsSharp/>, route: '/settings'},
    ];

    return (
        <div className={NavigationMenuStyles.navigation_menu}>
            <h4 className={NavigationMenuStyles.navigation_menu__title}>Menu</h4>
            <div className={NavigationMenuStyles.navigation_menu__menu_items}>
                {(navItems.map((navItem, index) => {
                    return (
                        <Link href={navItem.route} passHref key={`menu-key-${index}`}>
                            <NavLink onClick={onRouteChange ? onRouteChange : () => {
                            }} navItem={navItem}/>
                        </Link>
                    );
                }))}
            </div>
        </div>
    );
}

export default NavigationMenu;
