import styles from './UserInfo.module.css';
import UserPersonalAvatar from "./UserPersonalAvatar/UserPersonalAvatar";
import UserPersonalInformation from "./UserPersonalInformation/UserPersonalInformation";

const UserInfo = () => {
    return(
        <div className={styles.user_info}>
            <UserPersonalAvatar/>
            <UserPersonalInformation/>
        </div>
    )
}

export default UserInfo;