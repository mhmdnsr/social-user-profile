import React from "react";
import {NextComponentType} from "next";
import UserAccountStyles from "@styles/components/layout/user-account/user-account.module.scss";
import {Avatar} from "antd";


const UserAccount: NextComponentType = () => {

    return (
        <div className={UserAccountStyles.user_account}>
            <div className={UserAccountStyles.user_account__avatar_container}>
                <Avatar className={UserAccountStyles.user_account__avatar} size={45}>M</Avatar>
            </div>
            <div className={UserAccountStyles.user_account__info_container}>
                <h4 className={UserAccountStyles.user_account__info_name}>Mohamed</h4>
                <p className={UserAccountStyles.user_account__info_email}>@mohamed.nsr.El-dain</p>
            </div>
        </div>
    );
}

export default UserAccount;
