import styles from "./UserPersonalAvatar.module.css";

const UserPersonalAvatar = () => {
    return(
        <div className={styles.user_personal__avatar}>
            <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="" width='150px' height='150px'/>
        </div>
    )
}

export default UserPersonalAvatar;