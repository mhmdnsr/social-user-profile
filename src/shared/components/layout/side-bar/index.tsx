import React from "react";
import {NextComponentType} from "next";
import SideBarStyles from "@styles/components/layout/side-bar/side-bar.module.scss"
import Logo from "@components/logo";
import NavigationMenu from "@components/layout/navigation-menu";
import UserAccountWrapper from "@components/layout/user-account/user-account-wrapper";

const SideBar: NextComponentType = () => {
    return (
        <div className={SideBarStyles.side_bar}>
            <div className={SideBarStyles.side_bar__logo_container}>
                <Logo/>
            </div>
            <div className={SideBarStyles.side_bar__menu_container}>
                <NavigationMenu/>
            </div>
            <div className={SideBarStyles.side_bar__account_container}>
                <UserAccountWrapper/>
            </div>
        </div>
    );
}

export default SideBar;
