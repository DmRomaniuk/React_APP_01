import styles from "./NavBar.module.css";

const NavBar = () => {
    return(
        <div className={styles.sidebar}>
            <nav className={styles.sidebar_navigation}>
                <ul className={styles.sidebar_navigation__menu}>
                    <li className={styles.navigation_menu__item}>News</li>
                    <li className={styles.navigation_menu__item}>Profile</li>
                    <li className={styles.navigation_menu__item}>Messages</li>
                    <li className={styles.navigation_menu__item}>Settings</li>
                    <li className={styles.navigation_menu__item}>Tech Contacts</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;