import React, {ReactElement} from "react";
import {NextComponentType, NextPageContext} from "next";
import LayoutStyles from "@styles/components/layout/layout.module.scss";
import SideBar from "@components/layout/side-bar";
import Header from "@components/layout/header";

const Layout: NextComponentType<NextPageContext, unknown, { children: ReactElement }> = ({children}) => {
    return (
        <div className={LayoutStyles.layout}>
            <div className={LayoutStyles.layout__header}>
                <Header/>
            </div>
            <div className={LayoutStyles.layout__side_bar}>
                <div className={LayoutStyles.layout__side_bar_wrapper}>
                    <SideBar/>
                </div>
            </div>
            <div className={LayoutStyles.layout__main}>
                {children}
            </div>
        </div>
    );
}

export default Layout;
