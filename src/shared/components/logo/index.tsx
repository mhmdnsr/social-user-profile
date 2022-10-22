import React from "react";
import {NextComponentType} from "next";
import LogoStyles from "@styles/components/layout/logo.module.scss"
import Image from "next/image";
import logoImage from "@images/logo.png";

const Logo: NextComponentType = () => {
    return (
        <div className={LogoStyles.logo__container}>
            <div className={LogoStyles.logo__small_logo_container}>
                <Image src={logoImage} width={25} height={20}/>
            </div>
            <div className={LogoStyles.logo__full_logo_container}>
                <h3>cofeed</h3>
            </div>
        </div>
    );
}

export default Logo;
