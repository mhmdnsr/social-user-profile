import React, {useState} from "react";
import {NextComponentType} from "next";
import UserAccountWrapperStyles from "@styles/components/layout/user-account/user-account-wrapper.module.scss";
import {Collapse} from "antd";
import {FiChevronRight} from "react-icons/fi";
import UserAccount from "@components/layout/user-account/user-account";

const {Panel} = Collapse;

const UserAccountWrapper: NextComponentType = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    return (
        <div className={`user-account-wrapper ${UserAccountWrapperStyles.user_account_wrapper}`}>
            <Collapse defaultActiveKey={['1']} ghost={true}
                      accordion={true}
                      className={UserAccountWrapperStyles.user_account_wrapper__collapse}
                      onChange={({}) => {
                          setIsExpanded((prevState) => !prevState)
                      }}>
                <Panel showArrow={false}
                       header={
                           <div className={UserAccountWrapperStyles.user_account_wrapper__collapse_panel_header}>
                               <h5>Account</h5>
                               <FiChevronRight
                                   className={UserAccountWrapperStyles.user_account_wrapper__collapse_icon}
                                   style={{rotate: isExpanded ? '90deg' : '0deg'}}/>
                           </div>
                       } key="1"
                       className={UserAccountWrapperStyles.user_account_wrapper__collapse_panel}>
                    <UserAccount/>
                </Panel>
            </Collapse>
        </div>
    );
}

export default UserAccountWrapper;
