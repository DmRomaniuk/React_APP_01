import styles from "./NavBar.module.css";

const NavBar = () => {
    return(
        <div className={styles.sidebar}>
            <nav className={styles.sidebar_navigation}>
                <ul className={styles.sidebar_navigation__menu}>
                    <li className={styles.navigation_menu__item}>
                        <a href="/news">News</a>
                    </li>
                    <li className={styles.navigation_menu__item}>
                        <a href="/profile">Profile</a>
                    </li>
                    <li className={styles.navigation_menu__item}>
                        <a href="/messages">Messages</a>
                    </li>
                    <li className={styles.navigation_menu__item}>
                        <a href="/contacts">Tech Contacts</a>
                    </li>
                </ul>
                <ul className={styles.navigation_menu__settings}>
                    <li className={styles.settings_menu__item}>
                        <a href="/settings">Settings</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;