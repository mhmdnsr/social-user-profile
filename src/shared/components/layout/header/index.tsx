import React, {useCallback, useEffect, useState} from "react";
import {NextComponentType} from "next";
import HeaderStyles from "@styles/components/layout/header/header.module.scss";
import Logo from "@components/logo";
import {Button, Drawer} from "antd";
import {AiOutlineMenu} from "react-icons/ai";
import MenuDrawer from "@components/layout/header/menu-drawer";

const Header: NextComponentType = () => {
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

    const closeDrawer = () => {
        setDrawerOpen(false);
    }

    const openDrawer = () => {
        setDrawerOpen(true);
    }

    const onWindowResize = useCallback(() => {
        if (window.innerWidth > 768) {
            closeDrawer();
        }
    }, [isDrawerOpen])

    useEffect(() => {
        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        }
    }, []);

    return (
        <div className={HeaderStyles.header}>
            <div className={HeaderStyles.header__logo}>
                <Logo/>
            </div>
            <div className={HeaderStyles.header__menu}>
                <Button type='text'
                        className={HeaderStyles.header__menu_button}
                        icon={<AiOutlineMenu className={HeaderStyles.header__menu_icon}/>}
                        size='middle'
                        shape='default' onClick={openDrawer}/>
                <Drawer width={275} height='100%'
                        className='header-drawer-wrapper'
                        closable={false} placement="left"
                        onClose={closeDrawer} open={isDrawerOpen}>
                    <MenuDrawer onClose={closeDrawer}/>
                </Drawer>
            </div>
        </div>
    );
}

export default Header;
