import styles from './UserPersonalInformation.module.css'

const UserPersonalInformation = () => {
    return(
        <div className={styles.user_personal__info}>
            <p className={styles.name}>Romaniuk.D</p>
            <p className={styles.date_of__birth}>08.07.2003</p>
            <p className={styles.living}>city:Ternopil, Ukraine</p>
        </div>
    )
}

export default UserPersonalInformation;