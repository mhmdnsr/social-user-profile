import React, {ForwardedRef, ReactElement, useCallback, useEffect, useState} from "react";
import {NextComponentType, NextPageContext} from "next";
import NavLinkStyles from "@styles/components/layout/navigation-menu/nav-link.module.scss"
import {IconType} from "react-icons";
import {useRouter} from "next/router";

interface INavLinkProps {
    navItem: {
        icon: ReactElement<IconType>,
        text: string,
        route: string
    },
    onClick?: () => void,
    href?: string
}

const NavLink: NextComponentType<NextPageContext, unknown, INavLinkProps> = React.forwardRef((
    {
        onClick,
        href,
        navItem
    }, ref: ForwardedRef<HTMLAnchorElement>) => {

    const [navClass, setNavClass] = useState<string>(`${NavLinkStyles.nav_link}`);
    const router = useRouter();

    const onRouteChange = useCallback(() => {
        setNavClass(`${NavLinkStyles.nav_link} ${router.route === navItem.route ? NavLinkStyles.nav_link_active : ''}`)
    }, [router.route]);

    useEffect(() => {
        onRouteChange();
    }, [router.route])

    return (
        <a className={navClass} href={href} onClick={onClick} ref={ref}>
            <div className={NavLinkStyles.nav_link__icon_container}>
                {navItem.icon}
            </div>
            <div className={NavLinkStyles.nav_link__text_container}>
                <p>{navItem.text}</p>
            </div>
        </a>
    );
});

export default NavLink;
