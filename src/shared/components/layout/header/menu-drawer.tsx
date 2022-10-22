import React from "react";
import {NextComponentType, NextPageContext} from "next";
import MenuDrawerStyles from "@styles/components/layout/header/menu-drawr.module.scss";
import NavigationMenu from "@components/layout/navigation-menu";
import UserAccountWrapper from "@components/layout/user-account/user-account-wrapper";
import {IoClose} from "react-icons/io5";
import {Button} from "antd";

const MenuDrawer: NextComponentType<NextPageContext, unknown, {onClose: () => void}> = ({onClose}) => {
    return (
        <div className={MenuDrawerStyles.menu_drawer}>
            <div className={MenuDrawerStyles.menu_drawer__close}>

                <Button type='text'
                        className={MenuDrawerStyles.menu_drawer__close_button}
                        icon={<IoClose className={MenuDrawerStyles.menu_drawer__close_icon}/>}
                        size='middle'
                        shape='default' onClick={onClose}/>
            </div>
            <div className={MenuDrawerStyles.menu_drawer__menu}>
                <NavigationMenu onRouteChange={onClose}/>
            </div>
            <div className={MenuDrawerStyles.menu_drawer__account}>
                <UserAccountWrapper/>
            </div>
        </div>
    );
}

export default MenuDrawer;
