import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";

const Profile = () => {
    return(
        <div className={styles.content}>
            <div className={styles.content_info}>
                <UserInfo/>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;